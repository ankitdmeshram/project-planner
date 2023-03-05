<?php

namespace App\Http\Controllers;

use App\Models\project;
use App\Models\project_task;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class projectController extends Controller
{

    function projects(Request $req)
    {
        return DB::select('select * from projects where owner = :owner OR team_member LIKE :team_member', ['owner' => $req->email, 'team_member' => $req->email]);
    }

    function createProject(Request $req)
    {
        $project = new Project;
        $project->project_name = $req->project_name;
        $project->description = $req->description;
        $project->owner = $req->owner;
        $project->status = $req->status;
        $project->start_date = $req->start_date;
        $project->end_date = $req->end_date;
        $project->team_member = $req->team_member;

        $result = $project->save();

        if ($result) {
            return ['success' => $project];
        } else {
            return ['message' => "Something went wrong"];
        }
    }

    function updateProject(Request $req)
    {
        $project = Project::find($req->id);
        $project->project_name = $req->project_name;
        $project->description = $req->description;
        $project->owner = $req->owner;
        $project->status = $req->status;
        $project->start_date = $req->start_date;
        $project->end_date = $req->end_date;
        $project->team_member = $req->team_member;

        $result = $project->save();

        if ($result) {
            return ['success' => $project];
        } else {
            return ['message' => "Something went wrong"];
        }
    }

    function deleteProject(Request $req)
    {
        $project = Project::find($req->id);
        $result = $project->delete();

        if ($result) {
            return ["message" => " Deleted Successfully"];
        } else {
            return ["message" => "Something went wrong"];
        }
    }

    function project_details(Request $req)
    {
        return DB::select('select * from project_tasks where project_name = :project_name', ['project_name' => $req->id]);
    }

    function createTask(Request $req)
    {
        $project_task = new project_task;
        $project_task->title = $req->title;
        $project_task->description = $req->description;
        $project_task->created_by = $req->created_by;
        $project_task->project_name = $req->project_name;
        $project_task->assigned_by = $req->assigned_by;
        $project_task->assigned_to = $req->assigned_to;
        $project_task->tags = $req->tags;
        $project_task->due_date = $req->due_date;
        $project_task->status = $req->status;
        $project_task->priority = $req->priority;
        $project_task->comments = $req->comments;

        $result = $project_task->save();

        if ($result) {
            return ['success' => $project_task];
        } else {
            return ['message' => "Something went wrong"];
        }
    }

    function updateTask(Request $req)
    {
        $project_task = project_task::find($req->id);
        $project_task->title = $req->title;
        $project_task->description = $req->description;
        $project_task->created_by = $req->created_by;
        $project_task->project_name = $req->project_name;
        $project_task->assigned_by = $req->assigned_by;
        $project_task->assigned_to = $req->assigned_to;
        $project_task->tags = $req->tags;
        $project_task->due_date = $req->due_date;
        $project_task->status = $req->status;
        $project_task->priority = $req->priority;
        $project_task->comments = $req->comments;

        $result = $project_task->save();

        if ($result) {
            return ['success' => $project_task];
        } else {
            return ['message' => "Something went wrong"];
		}
    }
	
	function deleteTask(Request $req)
        {
            $project_task = project_task::find($req->id);
            $result = $project_task->delete();

            if ($result) {
                return ["message" => " Deleted Successfully"];
            } else {
                return ["message" => "Something went wrong"];
            }
        }
}
