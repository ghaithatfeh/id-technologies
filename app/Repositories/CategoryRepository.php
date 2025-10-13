<?php

namespace App\Repositories;

use App\Models\Category;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<Category>
 */
class CategoryRepository extends BaseRepository
{
    protected string $modelClass = Category::class;
}
