<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\GymRequest;


class AdminController extends Controller
{
    public function index(){

        return view('muscle-up-app.admin.index');
    }
    public function inbox(){
        $Requests = GymRequest::all();
        return view('muscle-up-app.admin.inbox')->with('Requests', $Requests);    }
}
