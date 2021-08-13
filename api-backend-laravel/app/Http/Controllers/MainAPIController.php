<?php


namespace App\Http\Controllers;


use App\Models\City;
use App\Models\UserRequest;
use App\Models\RequestFile;
use App\Models\School;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Response;

class MainAPIController extends Controller
{

    public function login(Request $request)
    {
        $request->validate([
            "email" => "required",
            "password" => "required"
        ]);
        $user = User::query()->where('email', $request->email)->first();
        if (!empty($user) && Hash::check($request->password, $user->password)) {
            $user->fill([
                'access_token' => md5(Str::random(130))
            ]);
            $user->save();
            return $user;
        }
        return response()->json([
            'email' => 'Information de connexions invalid',
        ], 401);
    }


    public function registration(Request $request)
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
        $user = User::query()->create($data);
        return response()->json([
            'user' => $user
        ]);
    }


    public function user(Request $request)
    {
        $request->validate([
            'name' => 'unique:users',
            'email' => 'unique:users'
        ]);
        if (!empty($request->password)) {
            $request->merge([
                'password' => bcrypt($request->password)
            ]);
        }
        $user = $request->user->update($request->all());
        return response()->json([
            'user' => $user
        ]);
    }


    public function city(Request $request)
    {
        $request->validate([
            "city_id" => "nullable",
            "note" => "required",
            "message" => "required",
            "new_name" => "nullable",
        ]);
        if (empty($request->city_id) && !empty($request->new_name)) {
            $city = City::query()->create([
                'name' => $request->new_name
            ]);
            $request->merge([
                'city_id' => $city->id
            ]);
        }
        if (empty($request->city_id) && empty($request->new_name)) {
            return response()->json([
                'error' => "Ville invalid",
                'key' => 'INVALID_CITY'
            ], Response::HTTP_BAD_REQUEST);
        }
        $city = $request->user->cityNote()->first();
        if (!empty($city)) {
            $city->update($request->all());
        } else {
            $city = $request->user->cityNote()->create($request->all());
        }
        return $city;
    }

    public function school(Request $request)
    {
        $request->validate([
            "school_id" => "nullable",
            "note" => "required",
            "message" => "required",
            "new_name" => "nullable",
        ]);
        if (empty($request->school_id) && !empty($request->new_name)) {
            $school = School::query()->create([
                'name' => $request->new_name
            ]);
            $request->merge([
                'school_id' => $school->id
            ]);
        }
        if (empty($request->school_id) && empty($request->new_name)) {
            return response()->json([
                'error' => "Ecole invalid",
                'key' => 'INVALID_SCHOOL'
            ], Response::HTTP_BAD_REQUEST);
        }
        $school = $request->user->schoolNote()->first();
        if (!empty($school)) {
            $school->update($request->all());
        } else {
            $school = $request->user->schoolNote()->create($request->all());
        }
        return $school;
    }

    public function request(Request $request)
    {
        $request->validate([
            'fiiles.*' => 'required|file|max:20000',
            "content" => "required"
        ]);
        $model_request = UserRequest::query()->create($request->only(['content']));
        foreach ($request->file('files') as $files) {
            $path = $files->store("requests");
            RequestFile::query()->create([
                'path' => $path,
                'request_id' => $request->id,
                'user_id' => $request->user->id
            ]);
        }
        return response()->json(compact('model_request'));
    }

    public function users(Request $request)
    {
        return User::query()->get();
    }

    public function cities(Request $request)
    {
        return City::query()->get();
    }

    public function schools(Request $request)
    {
        return School::query()->get();
    }

    public function dashboardData(Request $request)
    {

    }

}
