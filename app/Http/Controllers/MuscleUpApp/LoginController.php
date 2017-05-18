<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class LoginController extends Controller
{


    public function index() {

        return view('muscle-up-app.login_form.login');

    }


    public function login(Request $request) {


        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {

            $user = User::where('email',$request->email)->first();

            if ($user->trainee) {
                return redirect()->route('trainee');
            }
            if ($user->gym) {
                return redirect()->route('gym');
            }
            if ($user->admin) {
                return redirect()->route('admin');
            }
            if ($user->instructor) {
                return redirect()->route('instructor');
            }
        }

        else return redirect()->route('elselink');
    }
}