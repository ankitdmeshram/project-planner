<?php

use App\Http\Controllers\projectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware(['cors'])->group(function () {

// Route::get("projects", [projectController::class, 'getData']);
Route::post("projects", [projectController::class, 'projects']);

Route::post("project/create_project", [projectController::class, 'createProject']);

Route::post("project/update_project", [projectController::class, 'updateProject']);

Route::post("project/delete_project", [projectController::class, 'deleteProject']);

Route::post("project/details", [projectController::class, 'projectDetails']);

// Route::get("projects", [projectController::class, 'getData']);
Route::post("projects_details", [projectController::class, 'project_details']);

Route::post("projects_details/create_task", [projectController::class, 'createTask']);

Route::post("projects_details/update_task", [projectController::class, 'updateTask']);

Route::post("projects_details/delete_task", [projectController::class, 'deleteTask']);

});
