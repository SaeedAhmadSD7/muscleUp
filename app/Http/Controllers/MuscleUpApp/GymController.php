<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Http\Requests\RequestGymRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Session;
use App\Models\Country;
use App\Models\GymRequest;

class GymController extends Controller
{
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

    public function request_process($id)
    {
        $request =  GymRequest::find($id);
        $countries = Country::all();
        return view ('muscle-up-app.gym.post-add')->with(['countries'=>$countries,'GymData'=>$request]);
    }
}