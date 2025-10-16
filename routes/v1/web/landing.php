<?php

use App\Http\Controllers\Landing\BrandController;
use App\Http\Controllers\Landing\SiteController;
use Illuminate\Support\Facades\Route;

Route::get('/', [SiteController::class, 'index'])->name('index');
Route::get('/customer-service', [SiteController::class, 'customerService'])->name('customer.service');

Route::get('/brands/{brandId}/categories/{categoryId?}', [BrandController::class, 'show'])->name('brands.show');
