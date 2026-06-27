<?php

namespace App\Http\Controllers\Landing;

use App\Models\Project;
use App\Models\Seo;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::paginate();
        $seo = Seo::forPage('Projects-Page');

        return view('landing.projects.index', compact('projects', 'seo'));
    }

    public function show($projectSlug)
    {
        $project = Project::firstWhere('slug', $projectSlug);
        if (!$project) {
            abort(404);
        }

        $seo = Seo::forPage('Single-Project-Page');

        return view('landing.projects.show', compact('project', 'seo'));
    }
}
