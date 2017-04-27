<?php
/**
 * Created by PhpStorm.
 * User: soft
 * Date: 4/20/2017
 * Time: 5:21 PM
 */

namespace App\Http\Controllers\MuscleUpApp;

use App\Http\Controllers\Controller;
use App\User;

class HomeController extends Controller
{

    /**
     * @param User $user
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    function index (){
        return view('muscle-up-app\home\index');
    }

}