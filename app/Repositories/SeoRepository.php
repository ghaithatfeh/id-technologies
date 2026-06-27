<?php

namespace App\Repositories;

use App\Models\Seo;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends BaseRepository<Seo>
 */
class SeoRepository extends BaseRepository
{
    protected string $modelClass = Seo::class;
}
