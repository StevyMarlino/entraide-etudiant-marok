<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Http\Requests\API\UserCities\UserCitiesStoreRequest;
use App\Http\Requests\API\UserCities\UserCitiesUpdateRequest;
use App\Models\UserCity;
use Illuminate\Http\JsonResponse;

class UserCitiesController extends Controller
{

    public function index()
    {
        return UserCity::all();
    }

    public function show(UserCity $city)
    {
        return $city;
    }

    public function store(UserCitiesStoreRequest $request)
    {
        $user = $request->user();
        $city = $user->city()->first();
        $inputs = $request->all();
        $inputs['user_id'] = $request->user()->id;
        if (!empty($city)) {
            return response()->json([
                'errors' => [
                    'user' => "L'utilisateur a deja un etablissemnt"
                ]
            ], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }
        $data = UserCity::query()->create($inputs);
        return $data;
    }

    public function updateUserCity(UserCitiesStoreRequest $request)
    {
        $user = $request->user();
        $city = $user->city()->first();
        $inputs = $request->all();
        $inputs['user_id'] = $request->user()->id;
        if (!empty($city)) {
            $city->update($inputs);
            $data = $city;
        }else {
            $data = UserCity::query()->create($inputs);
        }
        return $data;
    }

    public function update(UserCitiesUpdateRequest $request,UserCity $city)
    {
        $city->update($request->all());
        return $city;
    }

    public function destroy(UserCity $city)
    {
        $city->delete();
        return [];
    }

}
