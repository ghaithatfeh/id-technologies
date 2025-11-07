<?php

namespace App\Services\v1\Project;

use App\Models\Project;
use App\Repositories\ProjectRepository;
use App\Services\Contracts\BaseService;
use App\Traits\Makable;

/**
 * @extends BaseService<Project>
 * @property ProjectRepository $repository
 */
class ProjectService extends BaseService
{
    use Makable;

    protected string $repositoryClass = ProjectRepository::class;
}
