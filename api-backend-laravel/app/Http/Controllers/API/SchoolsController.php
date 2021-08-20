<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Models\School;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SchoolsController extends Controller
{

    /**
     * Get schools
     * @param Request $request
     * @return Builder[]|Collection
     */
    public function index(Request $request)
    {
        return School::query()->with('notes', 'students')->get();
    }

    /**
     * Update SchoolModel
     * @param Request $request
     * @return JsonResponse
     */
    public function update(Request $request)
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

}
