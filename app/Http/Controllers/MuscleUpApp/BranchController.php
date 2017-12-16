<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\Branch;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\BranchCreateRequest;
use Illuminate\Support\Facades\Auth;

class BranchController extends Controller
{
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

    public function create(){

        $branch = Null;

        return view('muscle-up-app.branch.create', compact('branch'));
    }

    public function store(BranchCreateRequest $request){

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


        $branch = new Branch();
        $branch->gym_id = Auth::user()->gym->id;
//        $branch->branch_no = $request->branch_no;
        $branch->title = $request->branch_name;
//        $branch->email = $request->branch_email;
        $branch->phone_no = $request->branch_phone;
//        $branch->opening_time = $request->opening_time;
//        $branch->clossing_time = $request->clossing_time;
        $branch->address = $request->address;
        $branch->save();

        dd("Success");

        return view('muscle-up-app.company.create');
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
//        $branch = new Branch();
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
        $branch=Branch::find($id);
        return view('muscle-up-app.gym.update')->with('branch',$branch);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $branch = Branch::find($id);
        $branch->branch_no = $request->branch_no;
        $branch->email = $request->email;
        $branch->phone_no = $request->phone_no;
        $branch->opening_time = $request->opening_time;
        $branch->clossing_time = $request->clossing_time;
        $branch->address = $request->address;
        $branch->save();

        return redirect()->route('show-branch');
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

        return redirect()->route('show-branch');
    }
}
