<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use App\Http\Resources\v1\ProjectResource;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::paginate();

        return Inertia::render('landing/projects/index', [
            'projects' => Inertia::scroll(fn() => ProjectResource::collection($projects)),
        ]);
    }

    public function show($projectId)
    {
        $project = Project::find($projectId);
        if (!$project) {
            abort(404);
        }

        return Inertia::render('landing/projects/show', [
            'project' => ProjectResource::make($project),
        ]);
    }
}
