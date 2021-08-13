<?php

use App\Http\Controllers\MainAPIController;
use App\Models\City;
use App\Models\UserRequest as ModelsRequest;
use App\Models\RequestFile;
use App\Models\School;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;



Route::post('/login', [MainAPIController::class,'login']);

Route::post('/register', [MainAPIController::class,'registration']);

Route::middleware('auth.token')->group(static function () {
    Route::post('user',[MainAPIController::class,'user']);
    Route::post('city', [MainAPIController::class,'city']);
    Route::post('school', [MainAPIController::class,'school']);
    Route::post('request', [MainAPIController::class,'request']);
    Route::get('/users', [MainAPIController::class,'users']);
    Route::get('/cities', [MainAPIController::class,'cities']);
    Route::get('/schools',[MainAPIController::class,'schools']);
});

Route::get('/dashboard-data', [MainAPIController::class,'dashboardData']);
