<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Http\Requests\API\Users\UsersStoreRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{


    public function login(Request $request)
    {
        $request->validate([
            "email" => "required",
            "password" => "required"
        ]);
        $user = User::query()->where('email', $request->email)->first();
        if (!empty($user) && Hash::check($request->password, $user->password)) {
            $user->access_token = Str::random(50);
            $user->save();
            return response()->json($user);
        }
        return response()->json([
            'email' => 'Informations de connexion invalid',
        ], 401);
    }


    public function register(UsersStoreRequest $request)
    {
        $data = $request->all();
        $data['access_token'] = md5(Str::random(130));
        $data['password'] = bcrypt($data['password']);
        $user = User::query()->create($data);
        return response()->json($user);
    }

}
