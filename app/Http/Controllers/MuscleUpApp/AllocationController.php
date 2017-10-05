<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\Allocation;
use App\Models\DietProgram;
use App\Models\Employee;
use App\Models\Program;
use App\Models\Trainee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

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
        /***
         * Auth Instructor to be passed in create argument
         */
        $employee = Auth::user()->employee;
        $trainees=Trainee::where('employee_id',$employee->id)->get();
        $trainees->load('user');
        $programs = Program::showAll();
        $diets = DietProgram::showAll();
        return view('muscle-up-app.allocation.create-allocation',compact('trainees','programs','diets','instructor'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(request $request) {
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
        $allocations = Allocation::with('trainee','trainee.user','diet_program', 'program')->whereNotNull('program_id')->get();

        Session::flash('Success','Congratulations Work out and diet have been added allocated. ');

        return view('muscle-up-app.allocation.show-allocation-list',compact('allocations'));


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $allocation = Allocation::find($id);
        $programs = Program::showAll();
        $diets = DietProgram::showAll();
        return view('muscle-up-app.allocation.edit-allocation',compact('allocation','programs','diets','allocations'));
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
        $allocation = Allocation::find($id);
        $allocation->program_id= $request->input('program_id');
        $allocation->diet_program_id= $request->input('diet_program_id');
        $allocation->start_date= $request->input('start_date');
        $allocation->save();



        return redirect()->route('show-allocation');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $allocation =Allocation::find($id);
        $allocation->delete();
        return redirect()->route('show-allocation');

    }
}
