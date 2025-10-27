<?php

namespace App\Http\Controllers\WEB\v1;

use App\Http\Controllers\WebController;
use App\Http\Requests\v1\SupportLink\StoreUpdateSupportLinkRequest;
use App\Http\Resources\v1\SupportLinkResource;
use App\Models\SupportLink;
use App\Services\v1\SupportLink\SupportLinkService;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SupportLinkController extends WebController
{
    private SupportLinkService $supportLinkService;

    public function __construct()
    {
        $this->supportLinkService = SupportLinkService::make();
        // place the relations you want to return them within the response
        $this->relations = [];
    }

    public function data()
    {
        $items = $this->supportLinkService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        $exportables = SupportLink::getModel()->exportable();

        return Inertia::render('dashboard/support-links/index', [
            'exportables' => $exportables,
        ]);
    }

    public function show($supportLinkId)
    {
        $supportLink = $this->supportLinkService->view($supportLinkId, $this->relations);

        return Inertia::render('dashboard/support-links/show', [
            'supportLink' => SupportLinkResource::make($supportLink),
        ]);
    }

    public function create()
    {
        return Inertia::render('dashboard/support-links/create');
    }

    public function store(StoreUpdateSupportLinkRequest $request)
    {
        $supportLink = $this->supportLinkService->store($request->validated(), $this->relations);
        if ($supportLink) {
            return redirect()
                ->route('v1.web.protected.support.links.index')
                ->with('success', trans('site.stored_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.something_went_wrong'));
    }

    public function edit($supportLinkId)
    {
        $supportLink = $this->supportLinkService->view($supportLinkId, $this->relations);

        if (! $supportLink) {
            abort(404);
        }

        return Inertia::render('dashboard/support-links/edit', [
            'supportLink' => SupportLinkResource::make($supportLink),
        ]);
    }

    public function update(StoreUpdateSupportLinkRequest $request, $supportLinkId)
    {
        $supportLink = $this->supportLinkService->update($request->validated(), $supportLinkId, $this->relations);
        if ($supportLink) {
            return redirect()
                ->route('v1.web.protected.support.links.index')
                ->with('success', trans('site.update_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.there_is_no_data'));
    }

    public function destroy($supportLinkId)
    {
        $result = $this->supportLinkService->delete($supportLinkId);

        return rest()
            ->when(
                $result,
                fn ($rest) => $rest->ok()->deleteSuccess(),
                fn ($rest) => $rest->noData(),
            )->send();
    }

    public function export(Request $request)
    {
        $ids = $request->ids ?? [];

        try {
            $result = $this->supportLinkService->export($ids);
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
            $result = $this->supportLinkService->getImportExample();
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
            $this->supportLinkService->import();

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
