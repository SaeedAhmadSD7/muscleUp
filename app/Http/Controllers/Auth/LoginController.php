<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use \App\Utils\Globals\UserType;
use Illuminate\Http\Request;

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
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Http\RedirectResponse
     * @internal param string $
     */

    protected function authenticated(Request $request, User $user)
    {
        if($user->type=== UserType::SUPER_ADMIN) {
            return redirect()->intended(route('adminDashboard'));
        }
        else if($user->type === UserType::ADMIN) {
            return redirect()->intended(route('gymDashboard'));
        }
        else if($user->type === UserType::TRAINEE) {
            return redirect()->intended(route('traineeDashboard'));
        }
        else if($user->type === UserType::EMPLOYEE) {
            return redirect()->intended(route('employeeDashboard'));
        }
        else if($user->type === UserType::INSTRUCTOR) {
            return redirect()->intended(route('InstructorDashboard'));
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
