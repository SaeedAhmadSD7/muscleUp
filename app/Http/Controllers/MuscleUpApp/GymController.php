<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\Country;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GymController extends Controller
{
    public function request(){
        $countries = Country::all();
        return view('muscle-up-app.gym.request-form')->with('countries',$countries);
    }
}
