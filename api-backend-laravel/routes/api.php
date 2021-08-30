<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CitiesController;
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\SchoolsController;
use App\Http\Controllers\API\UserCitiesController;
use App\Http\Controllers\API\UserRequestsController;
use App\Http\Controllers\API\UserSchoolsController;
use App\Http\Controllers\API\UsersController;
use Illuminate\Support\Facades\Route;


Route::post('/login', [AuthController::class, 'login']);

Route::post('/register', [AuthController::class, 'register']);

Route::middleware('auth.token')->group(static function () {

    Route::resource('/users/cities', UserCitiesController::class)
        ->except('create', 'edit');

    Route::put('/users/cities',[UserCitiesController::class,'updateUserCity']);

    Route::resource('/users/schools', UserSchoolsController::class)
        ->except('create', 'edit');

    Route::put('/users/schools',[UserSchoolsController::class,'updateUserSchool']);

    Route::resource('/users', UsersController::class)->except('create', 'edit');

    Route::resource('/cities', CitiesController::class)->except('create', 'edit');

    Route::resource('/schools', SchoolsController::class)->except('create', 'edit');

    Route::resource('/requests', UserRequestsController::class)
        ->except('create', 'edit','update','delete');

});

Route::get('/dashboard/home', [DashboardController::class, 'home']);
