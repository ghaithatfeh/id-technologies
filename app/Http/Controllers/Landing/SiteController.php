<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\BrandResource;
use App\Models\Brand;
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

        return Inertia::render('landing/index', [
            'brands' => $brands,
        ]);
    }
}
