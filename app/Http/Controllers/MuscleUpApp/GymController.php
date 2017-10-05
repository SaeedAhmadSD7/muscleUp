<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Mail\Welcome;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\RequestGymRequest;
use App\Mail\AddGymRequest;
use App\Models\Country;
use App\Models\GymRequest;
use App\Models\User;
use App\Models\Gym;

class GymController extends Controller
{
    public function index() {
        return view('muscle-up-app.gym.index');
    }
    public function request()
    {
        $countries = Country::all();
        return view('muscle-up-app.gym.request-form')->with('countries', $countries);
    }

    public function request_save(RequestGymRequest $request)
    {
        $gym_request = new GymRequest($request->all());
        $gym_request->save();
        Session::flash('success','Request sucessfully submitted. You will be contacted for further processing.');
        return redirect()->route('home-page');
    }
    public function create_branch(){

        return view('muscle-up-app.branch.create-branch');
    }


    public function create_branch_user(){

        return view('muscle-up-app.branch.create-branch-user');
    }
}