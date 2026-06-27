<?php

namespace App\Http\Controllers\Landing;

use App\Models\Brand;
use App\Models\Product;
use App\Models\Seo;
use App\Models\SupportLink;
use App\Http\Controllers\Controller;

class SiteController extends Controller
{
    public function index()
    {
        $brands = Brand::query()
            ->limit(4)
            ->get();

        $featuredProduct = Product::where('is_featured', true)
            ->with([
                'category.brand',
                'category',
            ])->first();

        $seo = Seo::forPage('Home-Page');

        return view('landing.index', compact('brands', 'featuredProduct', 'seo'));
    }

    public function customerService()
    {
        $supportLinks = SupportLink::limit(100)->get();
        $seo = Seo::forPage('Customer-Service-Page');

        return view('landing.customer-service', compact('supportLinks', 'seo'));
    }
}
