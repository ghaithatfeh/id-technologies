<?php

namespace App\Services\v1\PageVisit;

use App\Models\PageVisit;
use App\Repositories\PageVisitRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<PageVisit>
 * @property PageVisitRepository $repository
 */
class PageVisitService extends BaseService
{
    use Makable;

    protected string $repositoryClass = PageVisitRepository::class;

    public function getStats(): array
    {
        return [
            'total'     => $this->repository->countUniqueVisitors(),
            'today'     => $this->repository->countUniqueVisitorsToday(),
            'this_week' => $this->repository->countUniqueVisitorsSince(7),
            'top_pages' => $this->repository->getTopPages(),
            'daily'     => $this->repository->getDailyUniqueVisitors(),
        ];
    }
}
