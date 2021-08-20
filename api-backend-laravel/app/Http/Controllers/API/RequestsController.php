<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Models\RequestFile;
use App\Models\UserRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RequestsController extends Controller
{

    /**
     * Update request
     * @param Request $request
     * @return JsonResponse
     */
    public function update(Request $request)
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

}
