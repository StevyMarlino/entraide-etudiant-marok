<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Http\Requests\API\Schools\SchoolsStoreRequest;
use App\Models\School;
use Illuminate\Http\Request;

class SchoolsController extends Controller
{

    public function index(Request $request)
    {
        return School::query()->with('notes', 'students')->get();
    }

    public function show(School $school)
    {
        return $school;
    }

    public function store(SchoolsStoreRequest $request)
    {
        School::query()->create($request->all());
        return [];
    }


    public function update(Request $request, School $school)
    {
        $school->update($request->all());
        return [];
    }

    public function destroy(School $school)
    {
        $school->delete();
        return [];
    }

}
