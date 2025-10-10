<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'landing/index')->name('index');
Route::inertia('/customer-service', 'landing/customer-service')->name('customer.service');
