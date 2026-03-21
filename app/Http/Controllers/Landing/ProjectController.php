<?php

namespace App\Http\Controllers\Landing;

use App\Models\Project;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::paginate();

        return view('landing.projects.index', compact('projects'));
    }

    public function show($projectId)
    {
        dd($projectId);
        $project = Project::find($projectId);
        if (!$project) {
            abort(404);
        }

        return view('landing.projects.show', compact('project'));
    }
}
