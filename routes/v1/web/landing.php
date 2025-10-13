<?php

use App\Http\Controllers\Landing\SiteController;
use Illuminate\Support\Facades\Route;

Route::get('/', [SiteController::class, 'index'])->name('index');
Route::inertia('/customer-service', 'landing/customer-service')->name('customer.service');
