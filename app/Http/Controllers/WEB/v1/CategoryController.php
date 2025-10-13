<?php

namespace App\Http\Controllers\WEB\v1;

use App\Http\Controllers\WebController;
use App\Http\Requests\v1\Category\StoreUpdateCategoryRequest;
use App\Http\Resources\v1\CategoryResource;
use App\Models\Category;
use App\Services\v1\Category\CategoryService;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends WebController
{
    private CategoryService $categoryService;

    public function __construct()
    {
        $this->categoryService = CategoryService::make();
        // place the relations you want to return them within the response
        $this->relations = ['brand'];
    }

    public function data()
    {
        $items = $this->categoryService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        $exportables = Category::getModel()->exportable();

        return Inertia::render('dashboard/categories/index', [
            'exportables' => $exportables,
        ]);
    }

    public function show($categoryId)
    {
        $category = $this->categoryService->view($categoryId, $this->relations);

        return Inertia::render('dashboard/categories/show', [
            'category' => CategoryResource::make($category),
        ]);
    }

    public function create()
    {
        return Inertia::render('dashboard/categories/create');
    }

    public function store(StoreUpdateCategoryRequest $request)
    {
        $category = $this->categoryService->store($request->validated(), $this->relations);
        if ($category) {
            return redirect()
                ->route('v1.web.protected.categories.index')
                ->with('success', trans('site.stored_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.something_went_wrong'));
    }

    public function edit($categoryId)
    {
        $category = $this->categoryService->view($categoryId, $this->relations);

        if (! $category) {
            abort(404);
        }

        return Inertia::render('dashboard/categories/edit', [
            'category' => CategoryResource::make($category),
        ]);
    }

    public function update(StoreUpdateCategoryRequest $request, $categoryId)
    {
        $category = $this->categoryService->update($request->validated(), $categoryId, $this->relations);
        if ($category) {
            return redirect()
                ->route('v1.web.protected.categories.index')
                ->with('success', trans('site.update_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.there_is_no_data'));
    }

    public function destroy($categoryId)
    {
        $result = $this->categoryService->delete($categoryId);

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
            $result = $this->categoryService->export($ids);
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
            $result = $this->categoryService->getImportExample();
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
            $this->categoryService->import();

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
