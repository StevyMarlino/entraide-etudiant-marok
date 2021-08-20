<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CitiesController;
use App\Http\Controllers\API\DashboardController;
use App\Http\Controllers\API\RequestsController;
use App\Http\Controllers\API\SchoolsController;
use App\Http\Controllers\API\UsersController;
use Illuminate\Support\Facades\Route;


Route::post('/login', [AuthController::class, 'login']);

Route::post('/register', [AuthController::class, 'register']);

Route::middleware('auth.token')->group(static function () {
    // users
    Route::get('/users', [UsersController::class, 'index']);
    Route::put('/users/{id}', [UsersController::class, 'update']);

    // cities
    Route::get('/cities', [CitiesController::class, 'index']);
    Route::put('/cities/{id}', [CitiesController::class, 'update']);

    // schools
    Route::get('/schools', [SchoolsController::class, 'index']);
    Route::put('/schools/{id}', [SchoolsController::class, 'update']);

    // requests
    Route::put('/requests/{id}', [RequestsController::class, 'update']);

});

Route::get('/dashboard/home', [DashboardController::class, 'home']);
