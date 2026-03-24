<?php

namespace App\Repositories;

use App\Models\PageVisit;
use App\Repositories\Contracts\BaseRepository;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

/**
 * @extends BaseRepository<PageVisit>
 */
class PageVisitRepository extends BaseRepository
{
    protected string $modelClass = PageVisit::class;

    public function countUniqueVisitors(): int
    {
        return PageVisit::distinct('ip_address')->count('ip_address');
    }

    public function countUniqueVisitorsToday(): int
    {
        return PageVisit::whereDate('created_at', today())
            ->distinct('ip_address')
            ->count('ip_address');
    }

    public function countUniqueVisitorsSince(int $days): int
    {
        return PageVisit::where('created_at', '>=', now()->subDays($days))
            ->distinct('ip_address')
            ->count('ip_address');
    }

    public function getTopPages(int $limit = 10): Collection
    {
        return PageVisit::select('page', DB::raw('count(distinct ip_address) as count'))
            ->groupBy('page')
            ->orderByDesc('count')
            ->limit($limit)
            ->get();
    }

    public function getDailyUniqueVisitors(int $days = 14): Collection
    {
        return PageVisit::select(
            DB::raw('DATE(created_at) as date'),
            DB::raw('count(distinct ip_address) as count')
        )
            ->where('created_at', '>=', now()->subDays($days - 1))
            ->groupBy('date')
            ->orderBy('date')
            ->get();
    }
}
