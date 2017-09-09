<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Mail\Welcome;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\RequestGymRequest;
use App\Mail\AddGymRequest;
use App\Models\Country;
use App\Models\GymRequest;
use App\Models\User;
use App\Models\Gym;

class GymController extends Controller
{
    public function index() {
        return view('muscle-up-app.gym.index');
    }
    public function request()
    {
        $countries = Country::all();
        return view('muscle-up-app.gym.request-form')->with('countries', $countries);
    }

    public function request_save(RequestGymRequest $request)
    {
        $gym_request = new GymRequest($request->all());
        $gym_request->save();
        Session::flash('success','Request sucessfully submitted. You will be contacted for further processing.');
        return redirect()->route('home-page');
    }

    public function request_process($id)
    {
        $request =  GymRequest::find($id);
        dd($request);
        $countries = Country::all();
        return view ('muscle-up-app.gym.post-add')->with(['countries'=>$countries,'GymData'=>$request]);
    }

    public function add_gym(Request $request){
//        GymRequest::where('email', $request->email)->delete();
//        $user= new User();
//        $user->email = $request->email;
//        $password = str_random(8);
//        $user->password = bcrypt($password);
//        $user['user-type'] = 'gym';
//        $user->save();
//        $gym = new Gym($request->all());
//        $gym->user_id = $user->id;
//        $gym->save();

//        Mail::send(['text'=> $template_path ], $data, function($message) {
//            // Set the receiver and subject of the mail.
//            $message->to('haris.ch470@gmail.com','PAUL')->subject('Laravel First Mail');
//            // Set the sender
//            $message->from('hqayyum47@gmail.com','Our Code World');
//        });
//        Mail::to($user)->send(new Welcome);
//        Mail::to($user)->send(new AddGymRequest($user->email,$password));
//        Session::flash('success','Account Succesfully created and credentials have been mailed to the email you entered.');
//        return redirect()->route('admin-dashboard');
    }
}