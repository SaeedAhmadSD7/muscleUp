<?php

namespace App\Http\Controllers\MuscleUpApp;
use Illuminate\Routing\Controller;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('muscle-up-app\home\index');
    }
}
