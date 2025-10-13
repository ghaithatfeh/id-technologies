<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\BrandResource;
use App\Models\Brand;
use Inertia\Inertia;

class BrandController extends Controller
{
    public function show($brandId)
    {
        $brand = Brand::where('id', $brandId)
            ->with([
                'categories',
                'categories.products'
            ])->first();

        if (!$brand) {
            abort(404);
        }

        return Inertia::render('landing/brands/show', [
            'brand' => BrandResource::make($brand),
        ]);
    }
}
