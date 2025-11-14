<?php

namespace App\Http\Controllers\Landing;

use Inertia\Inertia;
use App\Models\Brand;
use App\Models\Product;
use App\Models\Category;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\BrandResource;
use App\Http\Resources\v1\ProductResource;
use App\Http\Resources\v1\CategoryResource;

class BrandController extends Controller
{
    public function show($brandId, $categoryId = null)
    {
        $subCategoryId = request()->query('subCategoryId', null);

        $brand = Brand::with(['categories' => function ($query) {
            $query->whereNull('parent_id')->with(['children']);
        }])->find($brandId);

        if (!$brand) {
            abort(404);
        }

        $categories = $brand->categories;

        if (!$categoryId) {
            $category = $categories->first();
        } else {
            $category = $categories->firstWhere('id', $categoryId);
            if (!$category) {
                $category = Category::with(['children', 'brand'])
                    ->where('id', $categoryId)
                    ->whereNull('parent_id')
                    ->where('brand_id', $brandId)
                    ->first();
            }
        }

        if (!$subCategoryId) {
            $childCategoryIds = $category->children->pluck('id')->toArray();
            $categoryIds = array_merge([$category->id], $childCategoryIds);
            $products = Product::with(['category'])
                ->whereIn('category_id', $categoryIds)
                ->get();
        } else {
            $products = Product::with(['category'])
                ->where('category_id', $subCategoryId)
                ->get();
        }

        return Inertia::render('landing/brands/show', [
            'brand' => BrandResource::make($brand),
            'category' => CategoryResource::make($category),
            'products' => ProductResource::collection($products),
            'subCategoryId' => $subCategoryId,
            'categories' => CategoryResource::collection($categories),
        ]);
    }
}
