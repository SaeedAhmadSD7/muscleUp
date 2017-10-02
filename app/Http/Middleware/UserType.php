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
    public function handle($request, Closure $next)
    {
        if (Auth::user() && Auth::user()->type == 'gym') {
            return 'gym';
        }
        else if (Auth::user() && Auth::user()->type == 'admin') {
            return $next($request);
        }
        else if (Auth::user() && Auth::user()->type == 'trainee') {
            return 'trainee';
        }
        else if (Auth::user() && Auth::user()->type == 'employee') {
            return true;
        }
        return redirect('/');
    }
}
