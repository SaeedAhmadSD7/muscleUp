<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

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
        return view('muscle-up-app.login_form.login');
    }

    /**
     * Where to redirect users after login.
     *
     * @var string
     */

    protected function authenticated($user,$request)
    {
        if($request->type=== 'admin') {
            return redirect()->intended('/admin/dashboard');
        }
        else if($request->type=== 'gym') {
            return redirect()->intended('/gym/dashboard');
        }
        else if($request->type=== 'trainee') {
            return redirect()->intended('/trainee/dashboard');
        }
        else if($request->type=== 'employee') {
            return redirect()->intended('/employee/dashboard');
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
