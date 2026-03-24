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

if (!function_exists('getProperty')) {
    /**
     * @param array|object|string $object
     * @param string              $property key of $object and for nested properties separate between them by "."
     * @return mixed
     */
    function getProperty(array|object|string $object, string $property): mixed
    {
        $properties = str($property)->explode(".")->toArray();

        $value = null;

        foreach ($properties as $p) {
            $value = $object->{$p};
        }

        return $value;
    }
}
