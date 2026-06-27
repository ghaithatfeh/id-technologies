<?php

namespace App\Http\Controllers\Landing;

use App\Models\Exhibition;
use App\Models\Seo;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Collection;

class ExhibitionController extends Controller
{
    public function index(?string $exhibitionSlug = null)
    {
        /** @var Collection<Exhibition> $exhibitions */
        $exhibitions = Exhibition::query()
            ->orderByDesc('date')
            ->get();

        $seo = Seo::forPage('Exhibitions-Page');

        if ($exhibitions->isEmpty()) {
            return view('landing.exhibitions.index', [
                'exhibitions' => $exhibitions,
                'selectedExhibition' => null,
                'seo' => $seo,
            ]);
        }

        if (!$exhibitionSlug) {
            $selectedExhibition = $exhibitions->first();
        } else {
            $selectedExhibition = $exhibitions->firstWhere('slug', $exhibitionSlug);
        }

        if (!$selectedExhibition) {
            abort(404);
        }

        return view('landing.exhibitions.index', compact('exhibitions', 'selectedExhibition', 'seo'));
    }
}
