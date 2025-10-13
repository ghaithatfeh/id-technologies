<?php

namespace App\Http\Controllers\WEB\v1;

use App\Http\Controllers\WebController;
use App\Http\Requests\v1\Product\StoreUpdateProductRequest;
use App\Http\Resources\v1\ProductResource;
use App\Models\Product;
use App\Services\v1\Product\ProductService;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends WebController
{
    private ProductService $productService;

    public function __construct()
    {
        $this->productService = ProductService::make();
        $this->relations = ['category'];
    }

    public function data()
    {
        $items = $this->productService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        return Inertia::render('dashboard/products/index');
    }

    public function show($productId)
    {
        $product = $this->productService->view($productId, $this->relations);

        return Inertia::render('dashboard/products/show', [
            'product' => ProductResource::make($product),
        ]);
    }

    public function create()
    {
        return Inertia::render('dashboard/products/create');
    }

    public function store(StoreUpdateProductRequest $request)
    {
        $product = $this->productService->store($request->validated(), $this->relations);
        if ($product) {
            return redirect()
                ->route('v1.web.protected.products.index')
                ->with('success', trans('site.stored_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.something_went_wrong'));
    }

    public function edit($productId)
    {
        $product = $this->productService->view($productId, $this->relations);

        if (!$product) {
            abort(404);
        }

        return Inertia::render('dashboard/products/edit', [
            'product' => ProductResource::make($product),
        ]);
    }

    public function update(StoreUpdateProductRequest $request, $productId)
    {
        $product = $this->productService->update($request->validated(), $productId, $this->relations);
        if ($product) {
            return redirect()
                ->route('v1.web.protected.products.index')
                ->with('success', trans('site.update_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.there_is_no_data'));
    }

    public function destroy($productId)
    {
        $result = $this->productService->delete($productId);

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
            $result = $this->productService->export($ids);
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
            $result = $this->productService->getImportExample();
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
            $this->productService->import();

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
