<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\BrandResource;
use App\Http\Resources\v1\ProductResource;
use App\Models\Brand;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SiteController extends Controller
{
    public function index()
    {
        $brands = Brand::query()
            ->limit(4)
            ->get()
            ->toResourceCollection(BrandResource::class);

        $featuredProduct = Product::where('is_featured', true)
            ->with([
                'category.brand',
                'category',
            ])->first()
            ?->toResource(ProductResource::class);

        return Inertia::render('landing/index', [
            'brands' => $brands,
            'featured_product' => $featuredProduct,
        ]);
    }

    public function customerService()
    {
        $products = Product::whereNotNull('support_link')->limit(100)->get();
        return Inertia::render('landing/customer-service', [
            'products' => ProductResource::collection($products)
        ]);
    }
}
