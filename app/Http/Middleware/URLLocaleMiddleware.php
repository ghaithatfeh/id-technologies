<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Symfony\Component\HttpFoundation\Response;

class URLLocaleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $stored = Session::get('locale', 'en');
        $locale = $request->route('locale');

        if (empty($locale)) {
            $locale = $stored;
            return redirect()->route(Route::currentRouteName(), [
                ...$request->route()->parameters(),
                'locale' => $locale,
            ]);
        }

        if (!in_array($locale, config('cubeta-starter.available_locales'))) {
            $locale = config('cubeta-starter.default_locale');
        }

        Session::put('locale', $locale);
        app()->setLocale($locale);

        URL::defaults(['locale' => $locale]);

        $request->route()->forgetParameter('locale');

        return $next($request);
    }
}
