<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Landing\SiteController;
use App\Http\Controllers\Landing\BrandController;
use App\Http\Controllers\Landing\ProjectController;

Route::get('/', [SiteController::class, 'index'])->name('index');
Route::get('/customer-service', [SiteController::class, 'customerService'])->name('customer.service');

Route::get('/brands/{brandSlug}/categories/{categorySlug?}/{subCategorySlug?}', [BrandController::class, 'show'])->name('brands.show');

Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
Route::get('/projects/{projectSlug}', [ProjectController::class, 'show'])->name('projects.show');
