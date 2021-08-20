<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    /**
     * UserModel login
     * @param Request $request
     * @return JsonResponse
     */
    public function login(Request $request)
    {
        $request->validate([
            "email" => "required",
            "password" => "required"
        ]);
        $user = User::with([
            "city_note" => function($query) { $query->with('city'); },
           "school_note" => function($query) {  $query->with('school'); }
        ])->where('email', $request->email)->first();
        if (!empty($user) && Hash::check($request->password, $user->password)) {
            $user->access_token = Str::random(50);
            $user->save();
            return $user->toArray();
            return response()->json(compact('user'));
        }
        return response()->json([
            'email' => 'Information de connexions invalid',
        ], 401);
    }


    /**
     * UserModel registration
     * @param Request $request
     * @return JsonResponse
     */
    public function register(Request $request)
    {
        $request->validate([
            "last_name" => "required",
            "family_name" => "required",
            "born_at" => "required",
            "gender" => "required",
            "name" => "required:unique:users",
            "email" => "required|unique:users",
            "phone" => "required",
            "password" => "required|confirmed"
        ]);
        $data = $request->all();
        $data['access_token'] = md5(Str::random(130));
        $data['password'] = bcrypt($data['password']);
        $user = User::query()->create($data);
        return response()->json([
            'user' => $user
        ]);
    }

}
