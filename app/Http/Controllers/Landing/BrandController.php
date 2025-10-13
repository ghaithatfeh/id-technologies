<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\BrandResource;
use App\Http\Resources\v1\CategoryResource;
use App\Models\Brand;
use App\Models\Category;
use Illuminate\Database\Eloquent\Builder;
use Inertia\Inertia;

class BrandController extends Controller
{
    public function show($brandId, $categoryId = null)
    {
        $brand = Brand::where('id', $brandId)
            ->with([
                'categories'
            ])
            ->first();

        if (!$brand) {
            abort(404);
        }

        $category = Category::with([
            'products'
        ])->when(isset($categoryId), function (Category|Builder $query) use ($categoryId) {
            $query->where('id', $categoryId);
        })->where('brand_id', $brandId)->first();

        if (!$category) {
            abort(404);
        }

        return Inertia::render('landing/brands/show', [
            'brand' => BrandResource::make($brand),
            'category' => CategoryResource::make($category),
        ]);
    }
}
