<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\JsonResponse;

class SpaAuthentication
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $request->validate([
            'access_token' => 'required'
        ]);
        $user = User::query()->where('access_token',$request->access_token)->first();
        if( empty($user) ) {
           return  response()->json([],JsonResponse::HTTP_FORBIDDEN);
        }
        Auth::loginUsingId($user->id);
        return $next($request);
    }
}
