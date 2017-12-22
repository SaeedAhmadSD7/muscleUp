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
        $user = Auth::user();
        return view('muscle-up-app.user.index', compact('user'));
    }

    public function create(){

        $gym = Null;

        return view('muscle-up-app.gym.create', compact('gym'));
    }

    public function update(Request $request, $id){
        dd($request->fileData[]);

//        $user = $this->_user;
//        $userid = Auth::user()->id;
//        $user = User::findOrFail($userid);
        $user = Auth::user();
        $user->first_name = $request->first_name;
        $user->last_name = $request->last_name;
        $user->email = $request->email;
        $user->dob = $request->dob;
        $user->gender = $request->gender;
        $user->phone_number = $request->phone_number;
        $user->address = $request->address;
        $user->save();

//        dd("Success");

        return redirect(route('user.index'));
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