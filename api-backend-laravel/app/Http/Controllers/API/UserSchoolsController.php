<?php

namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Http\Requests\API\UserSchools\UserSchoolsStoreRequest;
use App\Http\Requests\API\UserSchools\UserSchoolUpdateRequest;
use App\Models\School;
use App\Models\UserSchool;
use Illuminate\Http\JsonResponse;

class UserSchoolsController extends Controller
{

    public function index()
    {
        return UserSchool::all();
    }

    public function show(UserSchool $school)
    {
        return $school;
    }


    public function store(UserSchoolsStoreRequest $request)
    {
        $user = $request->user();
        $school = $user->school()->first();
        $inputs = $request->all();
        if (!empty($school)) {
            return response()->json([
                'errors' => [
                    'user' => "L'utilisateur a deja un etablissemnt"
                ]
            ],JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }
        return  UserSchool::query()->create($inputs);
    }

    public function updateUserSchool(UserSchoolsStoreRequest $request)
    {
        $user = $request->user();
        $school = $user->school()->first();
        $inputs = $request->all();
        if (!empty($school)) {
            $school->update($inputs);
            $data = $school;
        }else {
            $data = UserSchool::query()->create($inputs);
        }
        return $data;
    }

    public function update(UserSchoolUpdateRequest $request, UserSchool $school)
    {
        $data = $request->all();
        $school->update($data);
        return $school;
    }

    public function destroy(UserSchool $school)
    {
        $school->delete();
        return [];
    }

}
