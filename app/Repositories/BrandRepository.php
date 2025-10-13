<?php

namespace App\Repositories;

use App\Models\Brand;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<Brand>
 */
class BrandRepository extends BaseRepository
{
    protected string $modelClass = Brand::class;
}
