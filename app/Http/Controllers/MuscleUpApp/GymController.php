<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\Country;
use App\Models\GymRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GymController extends Controller
{
    public function request()
    {
        $countries = Country::all();
        return view('muscle-up-app.gym.request-form')->with('countries', $countries);
    }

    public function request_save(Request $request)
    {
        $gym_request = new GymRequest();
        $gym_request->name = $request->name;
        $gym_request->email = $request->email;
        $gym_request->country = $request->country;
        $gym_request->city = $request->city;
        $gym_request->dial_code = $request->dial_code;
        $gym_request->phone_number = $request->phone_number;
        $gym_request->address = $request->address;
        $gym_request->save();
    }

    public function request_get()
    {
    }
}