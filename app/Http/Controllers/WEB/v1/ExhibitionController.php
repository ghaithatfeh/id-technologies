<?php

namespace App\Http\Controllers\WEB\v1;

use Exception;
use Inertia\Inertia;
use App\Models\Exhibition;
use Illuminate\Http\Request;
use App\Http\Controllers\WebController;
use App\Http\Resources\v1\ExhibitionResource;
use App\Services\v1\Exhibition\ExhibitionService;
use App\Http\Requests\v1\Exhibition\StoreUpdateExhibitionRequest;

class ExhibitionController extends WebController
{
    private ExhibitionService $exhibitionService;

    public function __construct()
    {
        $this->exhibitionService = ExhibitionService::make();
        // place the relations you want to return them within the response
        $this->relations = [];
    }

    public function data()
    {
        $items = $this->exhibitionService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        $exportables = Exhibition::getModel()->exportable();

        return Inertia::render('dashboard/exhibitions/index', [
            'exportables' => $exportables,
        ]);
    }

    public function show($exhibitionId)
    {
        $exhibition = $this->exhibitionService->view($exhibitionId, $this->relations);

        return Inertia::render('dashboard/exhibitions/show', [
            'exhibition' => ExhibitionResource::make($exhibition),
        ]);
    }

    public function create()
    {
        return Inertia::render('dashboard/exhibitions/create');
    }

    public function store(StoreUpdateExhibitionRequest $request)
    {
        $exhibition = $this->exhibitionService->store($request->validated(), $this->relations);
        if ($exhibition) {
            return redirect()
                ->route('v1.web.protected.exhibitions.index')
                ->with('success', trans('site.stored_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.something_went_wrong'));
    }

    public function edit($exhibitionId)
    {
        $exhibition = $this->exhibitionService->view($exhibitionId, $this->relations);

        if (!$exhibition) {
            abort(404);
        }

        return Inertia::render('dashboard/exhibitions/edit', [
            'exhibition' => ExhibitionResource::make($exhibition),
        ]);
    }

    public function update(StoreUpdateExhibitionRequest $request, $exhibitionId)
    {
        $exhibition = $this->exhibitionService->update($request->validated(), $exhibitionId, $this->relations);
        if ($exhibition) {
            return redirect()
                ->route('v1.web.protected.exhibitions.index')
                ->with('success', trans('site.update_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.there_is_no_data'));
    }

    public function destroy($exhibitionId)
    {
        $result = $this->exhibitionService->delete($exhibitionId);

        return rest()
            ->when(
                $result,
                fn($rest) => $rest->ok()->deleteSuccess(),
                fn($rest) => $rest->noData(),
            )->send();
    }

    public function export(Request $request)
    {
        $ids = $request->ids ?? [];

        try {
            $result = $this->exhibitionService->export($ids);
            session()->flash('success', trans('site.success'));

            return $result;
        } catch (Exception) {
            return redirect()
                ->back()
                ->with('error', trans('site.something_went_wrong'));
        }
    }

    public function getImportExample()
    {
        try {
            $result = $this->exhibitionService->getImportExample();
            session()->flash('success', trans('site.success'));

            return $result;
        } catch (Exception) {
            return redirect()
                ->back()
                ->with('error', trans('site.something_went_wrong'));
        }
    }

    public function import(Request $request)
    {
        try {
            $request->validate(['excel_file' => 'required|mimes:xls,xlsx']);
            $this->exhibitionService->import();

            return redirect()
                ->back()
                ->with('message', trans('site.success'));
        } catch (Exception) {
            return redirect()
                ->back()
                ->with('message', trans('site.something_went_wrong'));
        }
    }
}
