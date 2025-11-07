<?php

namespace App\Http\Controllers\WEB\v1;

use App\Http\Controllers\WebController;
use App\Http\Requests\v1\Project\StoreUpdateProjectRequest;
use App\Http\Resources\v1\ProjectResource;
use App\Models\Project;
use App\Services\v1\Project\ProjectService;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends WebController
{
    private ProjectService $projectService;

    public function __construct()
    {
        $this->projectService = ProjectService::make();
        $this->relations = [];
    }

    public function data()
    {
        $items = $this->projectService->indexWithPagination($this->relations);

        return rest()
            ->ok()
            ->getSuccess()
            ->data($items)
            ->send();
    }

    public function index()
    {
        $exportables = Project::getModel()->exportable();

        return Inertia::render('dashboard/projects/index', [
            'exportables' => $exportables,
        ]);
    }

    public function show($projectId)
    {
        $project = $this->projectService->view($projectId, $this->relations);

        return Inertia::render('dashboard/projects/show', [
            'project' => ProjectResource::make($project),
        ]);
    }

    public function create()
    {
        return Inertia::render('dashboard/projects/create');
    }

    public function store(StoreUpdateProjectRequest $request)
    {
        $project = $this->projectService->store($request->validated(), $this->relations);
        if ($project) {
            return redirect()
                ->route('v1.web.protected.projects.index')
                ->with('success', trans('site.stored_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.something_went_wrong'));
    }

    public function edit($projectId)
    {
        $project = $this->projectService->view($projectId, $this->relations);

        if (!$project) {
            abort(404);
        }

        return Inertia::render('dashboard/projects/edit', [
            'project' => ProjectResource::make($project),
        ]);
    }

    public function update(StoreUpdateProjectRequest $request, $projectId)
    {
        $project = $this->projectService->update($request->validated(), $projectId, $this->relations);
        if ($project) {
            return redirect()
                ->route('v1.web.protected.projects.index')
                ->with('success', trans('site.update_successfully'));
        }

        return redirect()
            ->back()
            ->with('error', trans('site.there_is_no_data'));
    }

    public function destroy($projectId)
    {
        $result = $this->projectService->delete($projectId);

        return rest()
            ->when(
                $result,
                fn($rest) => $rest->ok()->deleteSuccess(),
                fn($rest) => $rest->noData(),
            )->send();
    }

    public function export(Request $request)
    {
        $ids = $request->ids ?? [];

        try {
            $result = $this->projectService->export($ids);
            session()->flash('success', trans('site.success'));

            return $result;
        } catch (Exception) {
            return redirect()
                ->back()
                ->with('error', trans('site.something_went_wrong'));
        }
    }

    public function getImportExample()
    {
        try {
            $result = $this->projectService->getImportExample();
            session()->flash('success', trans('site.success'));
            return $result;
        } catch (Exception) {
            return redirect()
                ->back()
                ->with('error', trans('site.something_went_wrong'));
        }
    }

    public function import(Request $request)
    {
        try {
            $request->validate(['excel_file' => 'required|mimes:xls,xlsx']);
            $this->projectService->import();

            return redirect()
                ->back()
                ->with('message', trans('site.success'));
        } catch (Exception) {
            return redirect()
                ->back()
                ->with('message', trans('site.something_went_wrong'));
        }
    }
}
