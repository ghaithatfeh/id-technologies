<?php

namespace App\Services\v1\Product;

use App\Models\Product;
use App\Repositories\ProductRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<Product>
 * @property ProductRepository $repository
 */
class ProductService extends BaseService
{
    use Makable;

    protected string $repositoryClass = ProductRepository::class;
}
