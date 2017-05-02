<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Http\Controllers\Controller;
use App\User;

class ContactusController extends Controller
{
    function contactus (){
        return view('muscle-up-app.contact.contactus');
    }
}
