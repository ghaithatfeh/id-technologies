<?php

namespace App\Http\Controllers\Landing;

use App\Models\Brand;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;

class BrandController extends Controller
{
    public function show(Request $request, $brandSlug, $categorySlug = null, $subCategorySlug = null)
    {
        $search = $request->query('search');
        $brand = Brand::with(['categories' => function ($query) {
            $query->whereNull('parent_id')->with(['children']);
        }])->firstWhere('slug', $brandSlug);

        if (!$brand) {
            abort(404);
        }

        $categories = $brand->categories;

        if (!$categorySlug) {
            $category = $categories->first();
        } else {
            $category = $categories->firstWhere('slug', $categorySlug);
            if (!$category) {
                $category = Category::with(['children', 'brand'])
                    ->where('slug', $categorySlug)
                    ->whereNull('parent_id')
                    ->where('brand_id', $brand->id)
                    ->first();
            }
        }

        $subCategory = $subCategorySlug ? $category->children->firstWhere('slug', $subCategorySlug) : null;
        $subCategoryId = $subCategory?->id;

        if ($search) {
            $allCategoryIds = $categories->flatMap(
                fn($cat) => array_merge([$cat->id], $cat->children->pluck('id')->toArray()),
            )->toArray();

            $products = Product::with(['category'])
                ->whereIn('category_id', $allCategoryIds)
                ->where(function (Builder $query) use ($search) {
                    return $query->whereRaw('LOWER(name) LIKE LOWER(?)', ["%{$search}%"])
                        ->orWhereRaw('LOWER(description) LIKE LOWER(?)', ["%{$search}%"]);
                })
                ->orWhereHas('category', function (Category|Builder $c) use ($search) {
                    return $c->whereRaw('LOWER(name) LIKE LOWER(?)', ["%{$search}%"]);
                })
                ->get();
        } elseif (!$subCategorySlug && $category) {
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
            'subCategorySlug',
            'categories',
            'search',
            'subCategoryId',
        ));
    }
}
