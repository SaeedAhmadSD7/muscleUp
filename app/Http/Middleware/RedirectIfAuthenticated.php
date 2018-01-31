<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->check() && Auth::user()->type == 'admin') {
            return redirect()->route('admin-dashboard');
        }
        else if (Auth::guard($guard)->check() && Auth::user()->type == 'gym') {
            dd('this');
            return redirect()->route('gym-dashboard');
        }
        else if (Auth::guard($guard)->check() && Auth::user()->type == 'trainee') {
            return redirect()->route('trainee-dashboard');
        }
        else if (Auth::guard($guard)->check() && Auth::user()->type == 'employee') {
            return redirect()->route('employee-dashboard');
        }
//        else if (Auth::guard($guard)->check() && Auth::user()->type == 'instructor') {
//            return redirect()->route('employee-dashboard');
//        }

        return $next($request);
    }
}
