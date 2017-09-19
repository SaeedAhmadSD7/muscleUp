<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\Allocation;
use App\Models\DietPlan;
use App\Models\Phase;
use App\Models\Program;
use App\Models\Trainee;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AllocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $users = User::where('type','=','trainee')->get();
        $programs = Program::showAll();
        $diets = DietPlan::showAll();
        return view('muscle-up-app.allocation.create-allocation',compact('users','programs','diets'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Allocation::create($request->all());

        return redirect()->route('show-allocation');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {

        $trainees = Trainee::with('allocation')->get();
        $trainees->load('user');
        $programs=Allocation::with('program')->get();
        $diets= Allocation::with('diet_plan')->get();

        return view('muscle-up-app.allocation.show-allocation-list',compact('trainees','programs','diets'));


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

//        $allocation = Allocation::find($id);
        $users = User::where('type','=','trainee')->get();
        $programs = Program::showAll();
        $diets = DietPlan::showAll();
        return view('muscle-up-app.allocation.edit-allocation',compact('allocation','users','programs','diets'));
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
