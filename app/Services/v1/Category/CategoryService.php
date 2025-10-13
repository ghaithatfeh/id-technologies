<?php

namespace App\Services\v1\Category;

use App\Models\Category;
use App\Repositories\CategoryRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<Category>
 *
 * @property CategoryRepository $repository
 */
class CategoryService extends BaseService
{
    use Makable;

    protected string $repositoryClass = CategoryRepository::class;
}
