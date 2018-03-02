<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Http\Requests\PasswordResetRequest;
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

class UserController extends Controller
{

    private $_user;

    /**
     * UserController constructor.
     * @param $user
     */
    public function __construct(User $user)
    {
        $this->_user = $user;
    }

    public function index() {
        $user = get_auth_user();
        $countries = Country::all();
        return view('muscle-up-app.user.index', compact('user', 'countries'));
    }

    public function create(){

        $gym = Null;

        return view('muscle-up-app.gym.create', compact('gym'));
    }

    public function update(Request $request){
//        dd($request->fileData[]);

        $user = get_auth_user();
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->dob = $request->dob;
        $user->gender = $request->gender;
        $user->country = $request->country;
        $user->city = $request->city;
        $user->phone_number = $request->phone_number;
        $user->address = $request->address;
        $user->save();

//        dd("Success");

        return redirect(route('user.index'));
    }

    public function passwordResetView(){
        $user = get_auth_user();
        return view('muscle-up-app.user.passwordChange', compact('user', 'countries'));

    }

    public function passwordReset(PasswordResetRequest $request){
        $password=$request['password'];
        $reset=$this->_user->passwordResetFunc($password);
        Auth::logout();
        return redirect('/login')->with('message','Password Reset Successfully.Please Login Again with new Password.');;
    }

//    public function destroy($id)
//    {
//        $user = User::find($id);
////        $gym->user()->whereIn('id', $id)->delete();
//        $user->delete();
//
//        return redirect()->route('gym.index');
//    }

}