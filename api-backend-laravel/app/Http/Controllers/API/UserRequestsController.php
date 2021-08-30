<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Http\Requests\API\UserRequest\UserRequestsUpdateRequest;
use App\Http\Requests\API\UserRequests\UserRequestsStoreRequest;
use App\Models\UserRequest;
use App\Models\UserRequestFile;
use Illuminate\Http\Request;

class UserRequestsController extends Controller
{
    public function index()
    {
        return UserRequest::all();
    }

    public function show(UserRequest $request)
    {
        return $request;
    }

    public function store(UserRequestsStoreRequest $request)
    {
        $model_request = UserRequest::query()->create($request->only(['content']));
        foreach ($request->file('files') as $files) {
            $path = $files->store("requests");
            UserRequestFile::query()->create([
                'path' => $path,
                'request_id' => $request->id,
                'user_id' => $request->user->id
            ]);
        }
        return response()->json(compact('model_request'));
    }

    public function update(UserRequestsUpdateRequest $httpRequest, UserRequest $request)
    {
        $request->update($httpRequest->all());
        return [];
    }

    public function destroy(UserRequest $request)
    {
        $request->delete();
        return [];
    }
}
