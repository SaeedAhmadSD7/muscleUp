<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LoginController extends Controller
{


    public function index() {

        return view('muscle-up-app.login_form.login');

    }


    public function login(Request $request) {
        $request->session()->regenerate();


        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $request->session()->regenerate();
            $user = User::where('email',$request->email)->first();

            if ($user['user-type'] == 'trainee') {
                return redirect()->route('trainee-dashboard');
            }
            else if ($user['user-type'] == 'gym') {
                return redirect()->route('gym');
            }
            else if ($user['user-type'] == 'admin') {
                return redirect()->route('admin-dashboard');
            }
            else if ($user['user-type'] == 'instructor') {
                return redirect()->route('instructor-dashboard');
            }
        }
        else return dd('no');
    }
}