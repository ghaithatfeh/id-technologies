<?php

namespace App\Repositories;

use App\Models\Category;
use App\Repositories\Contracts\BaseRepository;
use Illuminate\Pagination\LengthAwarePaginator;

/**
 * @extends BaseRepository<Category>
 */
class CategoryRepository extends BaseRepository
{
    protected string $modelClass = Category::class;

    /**
     * @param array $relations
     * @return LengthAwarePaginator<int, Category>
     */
    public function getMainCategories(array $relations = []): LengthAwarePaginator
    {
        return $this->globalQuery($relations)
            ->whereNull('parent_id')
            ->paginate($this->perPage);
    }

    /**
     * @param int   $categoryId
     * @param array $relations
     * @return LengthAwarePaginator<int, Category>
     */
    public function getCategoryChildren(int $categoryId, array $relations = []): LengthAwarePaginator
    {
        return $this->globalQuery($relations)
            ->where('parent_id', $categoryId)
            ->paginate($this->perPage);
    }

    /**
     * @param int   $brandId
     * @param array $relations
     * @return LengthAwarePaginator<int, Category>
     */
    public function getMainByBrand(int $brandId, array $relations = []): LengthAwarePaginator
    {
        return $this->globalQuery($relations)
            ->where('brand_id', $brandId)
            ->whereNull('parent_id')
            ->paginate($this->perPage);
    }
}
