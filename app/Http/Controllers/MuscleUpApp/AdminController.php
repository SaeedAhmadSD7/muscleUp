<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Mail\RequestGymRequest;
use App\Models\GymRequest;
use App\Models\Gym;
use App\Models\User;

class AdminController extends Controller
{
    public function index(){

        return view('muscle-up-app.admin.index');
    }
    public function inbox(){
        $Requests = GymRequest::all();
        return view('muscle-up-app.admin.inbox')->with('Requests', $Requests);
    }

    public function message_detail($id){
        $Request= GymRequest::find($id);
        return view('muscle-up-app.admin.message-detail')->with('Request',$Request);
    }

    public function request_accept($id){
        $Request =  GymRequest::find($id);
        $Request_Accept = $Request->toArray();

        $user = new User();
        $user->email = $Request_Accept['email'];
        $password = str_random(8);
        $user->password = bcrypt($password);
        $user['user-type'] = 'gym';
        $user->save();


        $gym = new Gym($Request_Accept);
        $gym->user_id = $user->id;
        $gym->open_time=10;
        $gym->close_time=10;
        $gym->save();
        $Request->delete();

        \Mail::to($Request)->send(new RequestGymRequest($Request->dial_code,$Request->email,$Request->phone_number,$password));
        return redirect()->route('admin-dashboard');
    }
}

