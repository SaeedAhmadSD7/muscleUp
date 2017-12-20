<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Mail\Welcome;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use App\Http\Requests\RequestGymRequest;
use App\Models\Country;
use App\Models\GymRequest;
use App\Models\Branch;
use App\Models\User;
use App\Models\Gym;
use App\Http\Requests\CompanyCreateRequest;
use phpDocumentor\Reflection\Types\Null_;
use \App\Utils\Globals\UserType;

class GymController extends Controller
{

    public function dashboard() {
        return view('muscle-up-app.gym.dashboard');
    }

    public function index() {
        $gyms=Gym::showAll();
//        dd($gyms);
        return view('muscle-up-app.gym.index', compact('gyms'));
    }

    public function create(){

        $company = Null;

        return view('muscle-up-app.gym.create', compact('company'));
    }

    public function store(CompanyCreateRequest $request){
//        dd($request->all());


        $gym = new Gym();

        $gym->title = $request->branch_name;
//        $gym->email = $request->branch_email;
//        $gym->country = $request['country'];
//        $gym->city = $request['city'];
//        $gym->dial_code = $request['dial_code'][0];
        $gym->phone_number = $request->branch_phone;
//        $gym->opening_time = $request->opening_time;
//        $gym->closing_time = $request->clossing_time;
//        $gym->address = $request->branch_phone;
        $gym->save();

        $branch = new Branch();
        $branch->gym_id = $gym->id;
//        $branch->branch_no = $request->branch_no;
        $branch->title = $request->branch_name;
//        $branch->email = $request->branch_email;
        $branch->phone_number = $request->branch_phone;
//        $gym->opening_time = $request->opening_time;
//        $gym->closing_time = $request->clossing_time;
        $branch->address = $request->address;
        $branch->is_main = 'Yes';
        $branch->save();


        $user = new User();
        $user->branch_id = $branch->id;
        $user->gym_id = $gym->id;
        $user->first_name=$request->admin_name;
        $user->email = $request->admin_email;
//        $password = str_random(8);
        $password = "asdf1234";
        $user->password = bcrypt($password);
        $user->type = UserType::ADMIN;
        $user->phone_number=$request->admin_phone;
//        $user->address=$request->address;
        $user->save();





//        $var = $request->branch_email;
//
//        dd($var);
        dd("Success");

        return view('muscle-up-app.company.create');
    }

    public function destroy($id)
    {
        $gym = Gym::find($id);
//        $gym->user()->whereIn('id', $id)->delete();
        $gym->delete();

        return redirect()->route('company.index');
    }

    public function joinRequest()
    {
        $countries = Country::all();
        return view('muscle-up-app.gym.request-form')->with('countries', $countries);
    }

    public function requestSubmit(RequestGymRequest $request)
    {
        $gym_request = new GymRequest($request->all());
        $gym_request->save();
        Session::flash('success','Request sucessfully submitted. You will be contacted for further processing.');
        return redirect()->route('home-page');
    }
    public function create_branch(){

        return view('muscle-up-app.branch.create-branch');
    }


    public function create_branch_user(){

        return view('muscle-up-app.branch.create-branch-user');
    }
}