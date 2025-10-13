<?php

namespace App\Http\Controllers\WEB\v1;

use App\Http\Controllers\WebController;
use App\Http\Requests\v1\Brand\StoreUpdateBrandRequest;
use App\Http\Resources\v1\BrandResource;
use App\Models\Brand;
use App\Services\v1\Brand\BrandService;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BrandController extends WebController
{
    private BrandService $brandService;

    public function __construct()
    {
        $this->brandService = BrandService::make();
        // place the relations you want to return them within the response
        $this->relations = [];
    }

    public function data()
    {
        $items = $this->brandService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        $exportables = Brand::getModel()->exportable();

        return Inertia::render('dashboard/brands/index', [
            'exportables' => $exportables,
        ]);
    }

    public function show($brandId)
    {
        $brand = $this->brandService->view($brandId, $this->relations);

        return Inertia::render('dashboard/brands/show', [
            'brand' => BrandResource::make($brand),
        ]);
    }

    public function create()
    {
        return Inertia::render('dashboard/brands/create');
    }

    public function store(StoreUpdateBrandRequest $request)
    {
        $brand = $this->brandService->store($request->validated(), $this->relations);
        if ($brand) {
            return redirect()
                ->route('v1.web.protected.brands.index')
                ->with('success', trans('site.stored_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.something_went_wrong'));
    }

    public function edit($brandId)
    {
        $brand = $this->brandService->view($brandId, $this->relations);

        if (!$brand) {
            abort(404);
        }

        return Inertia::render('dashboard/brands/edit', [
            'brand' => BrandResource::make($brand),
        ]);
    }

    public function update(StoreUpdateBrandRequest $request, $brandId)
    {
        $brand = $this->brandService->update($request->validated(), $brandId, $this->relations);
        if ($brand) {
            return redirect()
                ->route('v1.web.protected.brands.index')
                ->with('success', trans('site.update_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.there_is_no_data'));
    }

    public function destroy($brandId)
    {
        $result = $this->brandService->delete($brandId);

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
            $result = $this->brandService->export($ids);
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
            $result = $this->brandService->getImportExample();
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
            $this->brandService->import();

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
