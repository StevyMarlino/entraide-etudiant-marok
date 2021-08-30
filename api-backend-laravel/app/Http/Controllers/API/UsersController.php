<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Http\Requests\API\Users\UsersStoreRequest;
use App\Http\Requests\API\Users\UsersUpdateRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UsersController extends Controller
{

    public function index(Request $request)
    {
        return User::query()
            ->where($request->only([
                'name',
                'email'
            ]))
            ->get();
    }

    public function show(User $user)
    {
        return $user;
    }

    public function store(UsersStoreRequest $request)
    {
        $data = $request->all();
        $data['access_token'] = md5(Str::random(130));
        $data['password'] = bcrypt($data['password']);
        $user = User::query()->create($data);
        return response()->json($user);
    }


    public function update(UsersUpdateRequest $request, User $user)
    {
        $data = $request->all();
        if (!empty($request->password)) {
            $data['password'] = bcrypt($request->password);
        }
        if ($request->hasFile('avatar')) {
            $file = $request
                ->file('avatar')
                ->store("avatar",'public');
            $data['avatar'] = $file;
        }
        if ($request->hasFile('cover')) {
            $file = $request
                ->file('cover')
                ->store("cover",'public');
            $data['cover'] = $file;
        }
        $user->update($data);
        return $user;
    }

    public function destroy(User $user)
    {
        $user->delete();
        return [];
    }


}
