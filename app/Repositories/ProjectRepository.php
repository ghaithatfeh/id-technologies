<?php

namespace App\Repositories;

use App\Models\Project;
use App\Repositories\Contracts\BaseRepository;

/**
 * @extends  BaseRepository<Project>
 */
class ProjectRepository extends BaseRepository
{
    protected string $modelClass = Project::class;
}
