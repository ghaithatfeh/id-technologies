<?php

namespace App\Repositories;

use App\Models\Exhibition;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<Exhibition>
 */
class ExhibitionRepository extends BaseRepository
{
    protected string $modelClass = Exhibition::class;
}
