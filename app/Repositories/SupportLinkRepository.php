<?php

namespace App\Repositories;

use App\Models\SupportLink;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<SupportLink>
 */
class SupportLinkRepository extends BaseRepository
{
    protected string $modelClass = SupportLink::class;
}
