<?php

use App\Http\Middleware\Authenticate;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Middleware\URLLocaleMiddleware;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Foundation\Configuration\Exceptions;
use App\Http\Middleware\AcceptedLanguagesMiddleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
        then: function () {

            Route::middleware(['web', 'locale',])
                ->group(base_path('routes/v1/web/public.php'));

            Route::middleware(['web', 'locale', 'authenticated:web'])
                ->group(base_path('routes/v1/web/protected.php'));

            Route::prefix('{locale?}')
                ->namespace()
                ->where(['locale' => implode('|', config('cubeta-starter.available_locales'))])
                ->middleware(['web', 'url-locale'])
                ->name('landing.')
                ->group(base_path('routes/v1/web/landing.php'));
        },
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->alias([
            'authenticated' => Authenticate::class,
            'locale' => AcceptedLanguagesMiddleware::class,
            'url-locale' => URLLocaleMiddleware::class,
        ]);
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);
    })->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
