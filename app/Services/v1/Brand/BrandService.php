<?php

namespace App\Services\v1\Brand;

use App\Models\Brand;
use App\Repositories\BrandRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<Brand>
 * @property BrandRepository $repository
 */
class BrandService extends BaseService
{
    use Makable;

    protected string $repositoryClass = BrandRepository::class;
}
