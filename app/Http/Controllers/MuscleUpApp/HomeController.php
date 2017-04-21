<?php
/**
 * Created by PhpStorm.
 * User: soft
 * Date: 4/20/2017
 * Time: 5:21 PM
 */

namespace App\Http\Controllers\MuscleUpApp;

use App\Http\Controllers\Controller;

class HomeController extends Controller
{
  function index (){
      return view('muscle-up-app\home\index');
  }
}