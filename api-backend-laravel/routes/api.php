<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;


Route::post('/users/login',static function (Request $request){
    $request->validate([
        "email" => "required",
        "password" => "required"
    ]);
    $user = User::query()->where('email',$request->email)->first();
    if (!empty($user) && Hash::check($request->password,$user->password) ) {
        $user->access_token = md5(Str::random(130)) ;
        $user->save();
        return  $user;
    }
    return response()->json([
        'email' => 'Information de connexions invalid',
    ],401);
});

Route::post('/users/registration',static function (Request $request){

});

Route::post('/users/profile-update/user',static function (Request $request){

});

Route::post('/users/profile-update/city',static function (Request $request){

});

Route::post('/users/profile-update/school',static function (Request $request){

});

Route::post('/users/profile-update/request',static function (Request $request){

});

Route::get('/users',static function (Request $request){

});

Route::get('/dashboard-data',static function (Request $request){

});
