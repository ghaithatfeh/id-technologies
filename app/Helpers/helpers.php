<?php

use App\Modules\ApiResponse;

if (!function_exists('rest')) {
    function rest()
    {
        return ApiResponse::create();
    }
}

if (!function_exists('urlActive')) {
    function urlActive(string $url): string
    {
        return request()->fullUrl() == $url;
    }
}
