<?php

namespace App\Services\v1\Category;

use App\Traits\Makable;
use App\Models\Category;
use App\Services\Contracts\BaseService;
use App\Repositories\CategoryRepository;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * @extends BaseService<Category>
 * @property CategoryRepository $repository
 */
class CategoryService extends BaseService
{
    use Makable;

    protected string $repositoryClass = CategoryRepository::class;

    /**
     * @param array $relations
     * @return LengthAwarePaginator<int, Category>
     */
    public function getMainCategories(array $relations = []): LengthAwarePaginator
    {
        return $this->repository->getMainCategories($relations);
    }

    /**
     * @param int   $categoryId
     * @param array $relations
     * @return LengthAwarePaginator<int, Category>
     */
    public function getCategoryChildren(int $categoryId, array $relations = []): LengthAwarePaginator
    {
        return $this->repository->getCategoryChildren($categoryId, $relations);
    }

    /**
     * @param int   $brandId
     * @param array $relations
     * @return LengthAwarePaginator<int, Category>
     */
    public function getMainByBrand(int $brandId, array $relations = []): LengthAwarePaginator
    {
        return $this->repository->getMainByBrand($brandId, $relations);
    }
}
