<?php

namespace App\Services\v1\Seo;

use App\Models\Seo;
use App\Repositories\SeoRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<Seo>
 *
 * @property SeoRepository $repository
 */
class SeoService extends BaseService
{
    use Makable;

    protected string $repositoryClass = SeoRepository::class;
}
