<?php

namespace App\Http\Controllers\Landing;

use Inertia\Inertia;
use App\Models\Project;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\ProjectResource;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::paginate();

        return view('landing.projects.index', compact('projects'));
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
