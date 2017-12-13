<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Mail\AddGymRequest;
use App\Http\Requests\CompanyCreateRequest;
use App\Models\GymRequest;
use App\Models\User;
use App\Models\Branch;
use App\Models\Gym;
use App\Models\Country;
use Illuminate\Support\Facades\Session;


class AdminController extends Controller
{
    public function index(){

        return view('muscle-up-app.admin.index');
    }
    public function inbox(){
        $Requests = GymRequest::all();
        return view('muscle-up-app.admin.inbox')->with('Requests', $Requests);
    }

    public function messageDetail($id){
        $Request= GymRequest::find($id);
        return view('muscle-up-app.admin.message-detail')->with('Request',$Request);
    }

    public function requestProcess($id) {

        $request =  GymRequest::find($id);
        $countries = Country::all();
        return view ('muscle-up-app.gym.post-add')->with(['countries'=>$countries,'gymdata'=>$request->toArray()]);
    }

    public function companyCreate(){

        return view('muscle-up-app.company.create');
    }

    public function companyCreatePost(CompanyCreateRequest $request){
//        dd($request->all());

        $user = new User();
        $user->first_name=$request->admin_name;
        $user->email = $request->admin_email;
//        $password = str_random(8);
        $password = "asdf1234";
        $user->password = bcrypt($password);
        $user->type = 'gym';
        $user->phone_number=$request->admin_phone;
//        $user->address=$request->address;
        $user->save();

        $gym = new Gym();
        $gym->user_id = $user->id;
        $gym->title = $request->branch_name;
        $gym->email = $request->branch_email;
//        $gym->country = $request['country'];
//        $gym->city = $request['city'];
//        $gym->dial_code = $request['dial_code'][0];
        $gym->phone_number = $request->branch_phone;
        $gym->open_time = $request->opening_time;
        $gym->close_time = $request->clossing_time;
//        $gym->address = $request->branch_phone;
        $gym->save();

        $branch = new Branch();
        $branch->gym_id = $gym->id;
//        $branch->branch_no = $request->branch_no;
        $branch->title = $request->branch_name;
//        $branch->email = $request->branch_email;
        $branch->phone_no = $request->branch_phone;
//        $branch->opening_time = $request->opening_time;
//        $branch->clossing_time = $request->clossing_time;
        $branch->address = $request->address;
        $branch->save();

//        $var = $request->branch_email;
//
//        dd($var);
        dd("Success");

        return view('muscle-up-app.company.create');
    }

    public function addGym(Request $request) {
        $user= new User();
        $user['type'] = 'gym';
        $user['email'] = $request['email'][1];
        $password = str_random(8);
        $user->password = bcrypt($password);
        $user['first_name'] = $request['first_name'];
        $user['last_name'] = $request['last_name'];
        $user['dob'] = $request['dob'];
        $user['gender'] = $request['gender'];
        $user['dial_code'] = $request['dial_code'][1];
        $user['phone_number'] = $request['phone_number'][1];
        $user['address'] = $request['address'][1];
        $user->save();

        $gym = new Gym();
        $gym['user_id'] = $user->id;
        $gym['title'] = $request['title'];
        $gym['email'] = $request['email'][0];
        $gym['country'] = $request['country'];
        $gym['city'] = $request['city'];
        $gym['dial_code'] = $request['dial_code'][0];
        $gym['phone_number'] = $request['phone_number'][0];
        $gym['open_time'] = $request['open_time'];
        $gym['close_time'] = $request['close_time'];
        $gym['latitude'] = $request['latitude'];
        $gym['longitude'] = $request['longitude'];
        $gym['address'] = $request['address'][0];
        $gym->save();

        GymRequest::where('email', $request->email)->delete();
        \Mail::to($user)->send(new AddGymRequest($user->email,$password));
        Session::flash('success','Account Succesfully created and credentials have been mailed to the added Gym.');
        return redirect()->route('admin-dashboard');

        dd($request['email']['1']);


    }

    public function gymList(){
        $gyms=Gym::showAll();
        return view('muscle-up-app.admin.gym-list')->with('gyms',$gyms);
    }


    public function destroy($id)
    {
        $gym =Gym::find($id);
        $gym->user()->delete();
        $gym->delete();
        return redirect()->route('gym-list');
    }
}

