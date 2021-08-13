<?php

namespace App\Http\Middleware;

use App\Models\User;
use Closure;
use Illuminate\Http\Request;

class SpaAuthemtication
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
//        $request->validate([
//            'access_token' => 'required'
//        ]);
//        $request->user = User::query()->where('access_token',$request->access_token)->first();
//        if( empty($request->user) ) {
//            abort(404);
//        }
        return $next($request);
    }
}
