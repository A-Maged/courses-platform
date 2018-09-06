<?php

namespace App\Http\Middleware;

use Closure;

class isAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->user()['isAdmin']) {
            return $next($request);
        }

        //   if ($request->ajax()) {
        return response()->json([
            'status' => 'failed',
            'msg' => 'you are not an admin',
        ]);
        //   }

    }
}
