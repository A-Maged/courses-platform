<?php

namespace App\Http\Middleware;

use Closure;

class isPremium
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

        if ($request->user()['isPremium']) {
            return $next($request);
        }

        return response()->json([
            'status' => 'failed',
            'msg' => 'you are not a premium user',
        ]);
    }
}
