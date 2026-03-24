<?php

namespace App\Http\Controllers\WEB\v1;

use App\Http\Controllers\WebController;
use App\Services\v1\PageVisit\PageVisitService;
use Inertia\Inertia;

class DashboardController extends WebController
{
    private PageVisitService $pageVisitService;

    public function __construct()
    {
        $this->pageVisitService = PageVisitService::make();
    }

    public function index()
    {
        return Inertia::render('dashboard/index', [
            'stats' => $this->pageVisitService->getStats(),
        ]);
    }
}
