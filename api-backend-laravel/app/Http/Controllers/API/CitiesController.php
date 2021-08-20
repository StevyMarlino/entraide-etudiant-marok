<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CitiesController extends Controller
{

    /**
     * Get cities
     * @param Request $request
     * @return Builder[]|Collection
     */
    public function index(Request $request)
    {
        return City::query()->with('notes', 'students')->get();
    }

    /**
     * update a city
     * @param Request $request
     * @return JsonResponse
     */
    public function update(Request $request)
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




}
