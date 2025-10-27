<?php

namespace App\Services\v1\SupportLink;

use App\Models\SupportLink;
use App\Repositories\SupportLinkRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<SupportLink>
 *
 * @property SupportLinkRepository $repository
 */
class SupportLinkService extends BaseService
{
    use Makable;

    protected string $repositoryClass = SupportLinkRepository::class;
}
