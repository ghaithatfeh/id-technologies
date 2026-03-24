<?php

namespace App\Http\Middleware;

use App\Models\PageVisit;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TrackLandingVisit
{
    public const PAGE_LABELS = [
        'landing.index'           => 'Home',
        'landing.brands.show'     => 'Brand Page',
        'landing.customer.service' => 'Customer Service',
        'landing.projects.index'  => 'Projects',
        'landing.projects.show'   => 'Project Detail',
    ];

    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        if ($request->isMethod('GET')) {
            $routeName = $request->route()?->getName();
            $label = self::PAGE_LABELS[$routeName] ?? $routeName;

            if ($label) {
                PageVisit::create([
                    'page'       => $label,
                    'url'        => $request->url(),
                    'ip_address' => $request->ip(),
                    'user_agent' => $request->userAgent(),
                    'created_at' => now(),
                ]);
            }
        }

        return $response;
    }
}
