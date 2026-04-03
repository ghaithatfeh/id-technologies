<?php

namespace App\Services\v1\Exhibition;

use App\Models\Exhibition;
use App\Repositories\ExhibitionRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<Exhibition>
 *
 * @property ExhibitionRepository $repository
 */
class ExhibitionService extends BaseService
{
    use Makable;

    protected string $repositoryClass = ExhibitionRepository::class;
}
