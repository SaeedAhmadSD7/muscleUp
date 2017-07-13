<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class WorkoutPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function workout()
    {
        return view('muscle-up-app.instructor.workout');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('muscle-up-app.instructor.workout');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $workoutplan = new WorkoutPlan();
        $workoutplan->type = $request->input('type');
        $workoutplan->exerciseType = $request->input('exerciseType');
        $workoutplan->duration = $request->input('duration');
        $workoutplan->hours = $request->input('hours');
        $workoutplan->save();

        return redirect()->route('workout');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
