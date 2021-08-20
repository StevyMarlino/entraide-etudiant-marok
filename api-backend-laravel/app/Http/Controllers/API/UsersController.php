<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UsersController extends Controller
{

    /**
     * Get users
     * @param Request $request
     * @return Builder[]|Collection
     */
    public function index(Request $request)
    {
        return User::query()->get();
    }

    /**
     * Update UserModel Information's
     * @param Request $request
     * @param string $id
     * @return JsonResponse
     */
    public function update(Request $request, $id)
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


}
