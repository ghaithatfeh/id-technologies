<?php

namespace App\Http\Controllers\Landing;

use App\Models\Brand;
use App\Models\Product;
use App\Models\Category;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function show(Request $request, $brandId, $categoryId = null, $subCategoryId = null)
    {
        $search = $request->query('search');
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

        if ($search) {
            $allCategoryIds = $categories->flatMap(
                fn($cat) => array_merge([$cat->id], $cat->children->pluck('id')->toArray())
            )->toArray();

            $products = Product::with(['category'])
                ->whereIn('category_id', $allCategoryIds)
                ->where('name', 'like', "%{$search}%")
                ->get();
        } elseif (!$subCategoryId && $category) {
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

        return view('landing.brands.show', compact(
            'brand',
            'category',
            'products',
            'subCategoryId',
            'categories',
            'search',
        ));
    }
}
