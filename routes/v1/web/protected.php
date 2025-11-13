<?php

use App\Http\Controllers\WEB\v1;
use Illuminate\Support\Facades\Route;

Route::inertia('/v1/dashboard/', 'dashboard/index')->name('v1.web.protected.index');

Route::get('/v1/dashboard/me', [v1\BaseAuthController::class, 'userDetails'])->name('v1.web.protected.me');
Route::put('/v1/dashboard/me', [v1\BaseAuthController::class, 'updateUserDetails'])->name('v1.web.protected.me.update');
Route::get('/v1/dashboard/logout', [v1\BaseAuthController::class, 'logout'])->name('v1.web.protected.logout');

Route::post('/v1/brands/export', [v1\BrandController::class, 'export'])->name('v1.web.protected.brands.export');
Route::post('/v1/brands/import', [v1\BrandController::class, 'import'])->name('v1.web.protected.brands.import');
Route::get('/v1/brands/get-import-example', [v1\BrandController::class, 'getImportExample'])->name('v1.web.protected.brands.import.example');
Route::get('/v1/brands/data', [v1\BrandController::class, 'data'])->name('v1.web.protected.brands.data');
Route::resource('/v1/brands', v1\BrandController::class)
    ->except([
        'create',
        'store',
        'destroy',
    ])->names('v1.web.protected.brands');

Route::post('/v1/categories/export', [v1\CategoryController::class, 'export'])->name('v1.web.protected.categories.export');
Route::post('/v1/categories/import', [v1\CategoryController::class, 'import'])->name('v1.web.protected.categories.import');
Route::get('/v1/categories/get-import-example', [v1\CategoryController::class, 'getImportExample'])->name('v1.web.protected.categories.import.example');
Route::get('/v1/categories/data', [v1\CategoryController::class, 'data'])->name('v1.web.protected.categories.data');
Route::get('/brands/{brandId}/categories/main', [v1\CategoryController::class , 'getMainByBrand'])->name('v1.web.protected.brands.categories.main');
Route::get('/categories/main', [v1\CategoryController::class, 'getMainCategories'])->name('v1.web.protected.categories.main');
Route::get('/categories/{categoryId}/children', [v1\CategoryController::class, 'getCategoryChildren'])->name('v1.web.protected.categories.children');
Route::resource('/v1/categories', v1\CategoryController::class)->names('v1.web.protected.categories');

Route::post('/v1/products/export', [v1\ProductController::class, 'export'])->name('v1.web.protected.products.export');
Route::post('/v1/products/import', [v1\ProductController::class, 'import'])->name('v1.web.protected.products.import');
Route::get('/v1/products/get-import-example', [v1\ProductController::class, 'getImportExample'])->name('v1.web.protected.products.import.example');
Route::get('/v1/products/data', [v1\ProductController::class, 'data'])->name('v1.web.protected.products.data');
Route::resource('/v1/products', v1\ProductController::class)->names('v1.web.protected.products');

Route::post('/v1/support-links/export', [v1\SupportLinkController::class, 'export'])->name('v1.web.protected.support.links.export');
Route::post('/v1/support-links/import', [v1\SupportLinkController::class, 'import'])->name('v1.web.protected.support.links.import');
Route::get('/v1/support-links/get-import-example', [v1\SupportLinkController::class, 'getImportExample'])->name('v1.web.protected.support.links.import.example');
Route::get('/v1/support-links/data', [v1\SupportLinkController::class, 'data'])->name('v1.web.protected.support.links.data');
Route::resource('/v1/support-links', v1\SupportLinkController::class)->names('v1.web.protected.support.links');

Route::post('/v1/projects/export', [v1\ProjectController::class, 'export'])->name('v1.web.protected.projects.export');
Route::post('/v1/projects/import', [v1\ProjectController::class, 'import'])->name('v1.web.protected.projects.import');
Route::get('/v1/projects/get-import-example', [v1\ProjectController::class, 'getImportExample'])->name('v1.web.protected.projects.import.example');
Route::get('/v1/projects/data', [v1\ProjectController::class, 'data'])->name('v1.web.protected.projects.data');
Route::resource('/v1/projects', v1\ProjectController::class)->names('v1.web.protected.projects');
