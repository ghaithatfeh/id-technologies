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
        'destroy'
    ])->names('v1.web.protected.brands');
