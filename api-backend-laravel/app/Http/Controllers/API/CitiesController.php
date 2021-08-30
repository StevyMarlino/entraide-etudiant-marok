<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Http\Requests\API\Cities\CitiesStoreRequest;
use App\Http\Requests\API\Cities\CitiesUpdateRequest;
use App\Models\City;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class CitiesController extends Controller
{

    public function index(Request $request)
    {
        return City::query()->with('notes', 'students')->get();
    }

    public function show(City $city)
    {
        return $city;
    }

    public function store(CitiesStoreRequest $request)
    {
        City::query()->create($request->all());
        return [];
    }

    public function update(CitiesUpdateRequest $request, City $city)
    {
        $city->update($request->all());
        return [];
    }

    public function destroy(City $city)
    {
        $city->delete();
        return [];
    }


}
