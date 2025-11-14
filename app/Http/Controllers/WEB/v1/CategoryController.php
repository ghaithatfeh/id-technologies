<?php

namespace App\Http\Controllers\WEB\v1;

use Exception;
use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\WebController;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\v1\CategoryResource;
use App\Services\v1\Category\CategoryService;
use App\Http\Requests\v1\Category\StoreUpdateCategoryRequest;
use Illuminate\Validation\Rule;

class CategoryController extends WebController
{
    private CategoryService $categoryService;

    public function __construct()
    {
        $this->categoryService = CategoryService::make();
        // place the relations you want to return them within the response
        $this->relations = ['brand', 'parent'];
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
        $category = $this->categoryService->view($categoryId, [...$this->relations, 'children']);

        if (!$category) {
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
                fn($rest) => $rest->ok()->deleteSuccess(),
                fn($rest) => $rest->noData(),
            )->send();
    }

    /**
     * Update only the sort_index of a category with an API-like response.
     * Response structure mirrors destroy() action (rest()->when(...)->send()).
     */
    public function updateSortIndex(Request $request, $categoryId)
    {
        $category = $this->categoryService->view($categoryId);

        if (!$category) {
            return rest()->noData()->send();
        }

        $validator = Validator::make([
            'sort_index' => $request->integer('sort_index'),
        ],[
            'sort_index' => [
                'nullable',
                'integer',
                Rule::unique('categories', 'sort_index')
                    ->where('parent_id', $category->parent_id)
                    ->where('brand_id', $category->brand_id)
                    ->whereNotNull('sort_index')
                    ->ignore($categoryId),
            ]
        ]);

        if ($validator->fails()){
            return rest()
                ->message($validator->errors()->first('sort_index'))
                ->validationError();
        }

        $updated = $this->categoryService->update([
            'sort_index' => $request->integer('sort_index') ?? null,
        ], $categoryId, $this->relations);

        return rest()
            ->when(
                $updated,
                fn($rest) => $rest->ok()->updateSuccess(),
                fn($rest) => $rest->noData(),
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

    public function getMainCategories()
    {
        $data = $this->categoryService->getMainCategories($this->relations);

        return rest()
            ->data($data)
            ->ok()
            ->getSuccess();
    }

    public function getCategoryChildren($categoryId)
    {
        $data = $this->categoryService->getCategoryChildren($categoryId, $this->relations);

        return rest()
            ->data($data)
            ->ok()
            ->getSuccess();
    }

    public function getMainByBrand($brandId)
    {
        $data = $this->categoryService->getMainByBrand($brandId, $this->relations);

        return rest()
            ->data($data)
            ->ok()
            ->getSuccess();
    }
}
