<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class UserType
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next,$type)
    {
        if (Auth::user()) {
            if (Auth::user()->type === $type) {
                return $next($request);
            }
            else{
                return redirect()->route('denied');
            }
        }
        else {
            return redirect()->route('login');
        }
    }
}
