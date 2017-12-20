<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use \App\Utils\Globals\UserType;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    public function showLoginForm()
    {
        return view('auth.login.showLogin');
    }

    /**
     * Where to redirect users after login.
     *
     * @var string
     */

    protected function authenticated($user,$request)
    {
        if($request->type=== UserType::SUPER_ADMIN) {
            return redirect()->intended(route('adminDashboard'));
        }
        else if($request->type=== UserType::ADMIN) {
            return redirect()->intended(route('gymDashboard'));
        }
        else if($request->type=== UserType::TRAINEE) {
            return redirect()->intended(route('traineeDashboard'));
        }
        else if($request->type=== UserType::EMPLOYEE) {
            return redirect()->intended(route('employeeDashboard'));
        }
    }

    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'logout']);
    }

}
