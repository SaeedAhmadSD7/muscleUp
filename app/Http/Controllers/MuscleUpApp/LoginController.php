<?php
/**
 * Created by PhpStorm.
 * User: soft
 * Date: 4/26/2017
 * Time: 4:55 PM
 */

namespace App\Http\Controllers\MuscleUpApp;

use App\Http\Controllers\Controller;

class LoginController extends controller
{
   function login(){
       return view('muscle-up-app\login\main-login');
   }
}