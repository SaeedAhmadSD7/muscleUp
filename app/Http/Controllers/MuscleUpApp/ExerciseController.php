<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\Exercise;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

class ExerciseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function exercise_list(){

    $exercise = Exercise::all();
    return view('muscle-up-app.workout.exercise')->with('exercises',$exercise);
}
    public function exercise()
    {
        return view('muscle-up-app.instructor.exercise');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $exercise_Instance = new Exercise();
        $exercise_list = $exercise_Instance->getList();
        dd($exercise_list);


//        $exercise = new Exercise();
//        $exercise->id=$request->id;
//        $exercise->name=$request->name;
//        $exercise->name_original=$request->name_original;
//        $exercise->category=$request->category;
//        $exercise->muscles=$request->muscles;
//        $exercise->muscles_secondary=$request->muscles_secondary;
//        $exercise->equipment=$request->equipment;
//        $exercise->description=$request->description;
//        $exercise->save();

        return redirect()->route('/home');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Exercise  $exercise
     * @return \Illuminate\Http\Response
     */
    public function show(Exercise $exercise)
    {
        $exercise=Exercise::all();

        return view('muscle-up-app.instructor.exercise')->with('exercise',$exercise);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Exercise  $exercise
     * @return \Illuminate\Http\Response
     */
    public function edit($id,Exercise $exercise)
    {
        $exercise=exercise::find($id);
        return view('muscle-up-app.instructor.eupdate')->with('exercise',$exercise);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Exercise  $exercise
     * @return \Illuminate\Http\Response
     */
    public function update($id,Request $request, Exercise $exercise)
    {
        $exercise = Exercise::find($id);
//        $exercise->id=$request->id;
        $exercise->name=$request->name;
        $exercise->name_original=$request->name_original;
        $exercise->category=$request->category;
//        $exercise->muscles=$request->muscles;
//        $exercise->muscles_secondary=$request->muscles_secondary;
//        $exercise->equipment=$request->equipment;
        $exercise->description=$request->description;
        $exercise->save();

        return redirect()->route('show-exercise');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Exercise  $exercise
     * @return \Illuminate\Http\Response
     */
    public function destroy($id,Exercise $exercise)
    {
        $exercise=Exercise::find($id);
        $exercise->delete();
        return redirect()->route('show-exercise');
    }
}
