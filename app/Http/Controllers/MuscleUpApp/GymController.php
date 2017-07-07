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
        $gym_request = new GymRequest($request->all());
        $gym_request->save();
    }

    public function request_get()
    {
    }
}