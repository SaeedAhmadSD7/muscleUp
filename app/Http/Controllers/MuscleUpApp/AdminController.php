<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;


class AdminController extends Controller
{
    public function index(){

        return view('muscle-up-app.admin.index');
    }
}

