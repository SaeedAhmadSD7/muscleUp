<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Http\Requests\BranchUpdateRequest;
use App\Models\Branch;
use App\Models\User;
use App\Models\Country;
use App\Models\Gym;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\BranchCreateRequest;
use Illuminate\Support\Facades\Auth;
use \App\Utils\Globals\UserType;

class BranchController extends Controller
{
    private $_branch;
    private $_user;

    /**
     * BranchController constructor.
     * @param $branch
     * @param $user
     */
    public function __construct(Branch $branch, User $user)
    {
        $this->_branch = $branch;
        $this->_user = $user;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function branch()
    {
        return view('muscle-up-app.gym.branch');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
//    public function create()
//    {
//        return view('muscle-up-app.gym.branch');
//    }
    public function index() {

        $user = Auth::user();
        $gyms=Branch::where('gym_id',$user->gym_id)->get();
        $countries = Country::all();   //only for user modal data
//        dd($gyms->gym->title);
        return view('muscle-up-app.branch.index', compact('gyms','countries','user'));
    }


    public function create(){

        $branch = Null;
        $countries=Country::all();
        return view('muscle-up-app.branch.create', compact('branch','countries'));
    }

    public function store(BranchCreateRequest $request){

//dd(Auth::user()->id);
        $branch = $this->_branch;
        $branch->gym_id = Auth::user()->gym_id;
//        $branch->branch_no = $request->branch_no;
        $branch->title = $request->branch_name;
//        $branch->email = $request->branch_email;
        $branch->phone_number = $request->branch_phone;
        $branch->country = $request->country;
        $branch->city = $request->city;
        $branch->latitude = $request->latitude;
        $branch->longitude = $request->longitude;
        $branch->opening_time = $request->opening_time;
        $branch->closing_time = $request->closing_time;
        $branch->address = $request->branch_address;
        $branch->save();

        //        dd($request)->all;
        $user = $this->_user;
        $user->branch_id = $branch->id;
        $user->gym_id = Auth::user()->gym_id;
        $user->first_name=$request->admin_name;
        $user->email = $request->admin_email;
//        $password = str_random(8);
        $password = "asdf1234";
        $user->password = bcrypt($password);
        $user->type = UserType::ADMIN;
        $user->phone_number=$request->admin_phone;
//        $user->address=$request->address;
        $user->save();



        return redirect()-> route('branch.index');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function branch_detail($id)
    {

        $branchDetail= Branch::find($id);
        return view('muscle-up-app.gym.branch-detail',compact('branchDetail'));

    }
//    public function store(Request $request)
//    {
////        dd($request);
//        $branch = new branch();
//        $branch->branch_no = $request->branch_no;
//        $branch->email = $request->email;
//        $branch->phone_no = $request->phone_no;
//        $branch->opening_time = $request->opening_time;
//        $branch->clossing_time = $request->clossing_time;
//        $branch->address = $request->address;
//        $branch->save();
//
//        return redirect()->route('branch');
//    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $branchs=Branch::all();

        return view('muscle-up-app.gym.show')->with('branch',$branchs);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $user = Auth::user();
        if(($id==0)){
            $id =$user->branch_id;
        }
        $branch=Branch::find($id);


        $countries = Country::all();   //only for user modal data
        return view('muscle-up-app.branch.edit',compact('user','branch','countries'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BranchUpdateRequest $request, $id)
    {
//        dd($request->title);
        $user = Auth::user();
//        $id =$user->branch_id;
        $branch = Branch::find($id);
//        $branch->branch_no = $request->branch_no;
        $branch->title = $request->branch_name;
        $branch->phone_number = $request->phone_number;
        $branch->opening_time = $request->opening_time;
        $branch->closing_time = $request->closing_time;
        $branch->country = $request->country;
        $branch->city = $request->city;
        $branch->address = $request->branch_address;
        $branch->save();

        return redirect()->route('branch.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $branch=Branch::find($id);
        $branch->delete();

//        return view('muscle-up-app.branch.index');
        return redirect()->route('branch.index');
    }
}
