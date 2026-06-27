<?php

namespace App\Http\Controllers\WEB\v1;

use Inertia\Inertia;
use App\Services\v1\Seo\SeoService;
use App\Http\Resources\v1\SeoResource;
use App\Http\Controllers\WebController;
use App\Http\Requests\v1\Seo\StoreUpdateSeoRequest;

class SeoController extends WebController
{
    private SeoService $seoService;

    public function __construct()
    {
        $this->seoService = SeoService::make();
        // place the relations you want to return them within the response
        $this->relations = [];
    }

    public function data()
    {
        $items = $this->seoService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        return Inertia::render('dashboard/seo/index');
    }

    public function show($seoId)
    {
        $seo = $this->seoService->view($seoId, $this->relations);

        return Inertia::render('dashboard/seo/show', [
            'seo' => SeoResource::make($seo),
        ]);
    }

    public function edit($seoId)
    {
        $seo = $this->seoService->view($seoId, $this->relations);

        if (!$seo) {
            abort(404);
        }

        return Inertia::render('dashboard/seo/edit', [
            'seo' => SeoResource::make($seo),
        ]);
    }

    public function update(StoreUpdateSeoRequest $request, $seoId)
    {
        $seo = $this->seoService->update($request->validated(), $seoId, $this->relations);
        if ($seo) {
            return redirect()
                ->route('v1.web.protected.seo.index')
                ->with('success', trans('site.update_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.there_is_no_data'));
    }

    public function destroy($seoId)
    {
        $result = $this->seoService->delete($seoId);

        return rest()
            ->when(
                $result,
                fn($rest) => $rest->ok()->deleteSuccess(),
                fn($rest) => $rest->noData(),
            )->send();
    }
}
