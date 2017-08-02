<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\Program;
use App\Models\Phase;
use App\Models\Exercise;
use App\Models\PhaseDetail;
use App\Models\Wbs;
use App\Models\WbsDetail;

class ProgramController extends Controller
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
        $exercise = Exercise::all();
        return view('muscle-up-app.workout.workout-program')->with('exercises',$exercise);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $program = new Program();
        $program->title = $request->title;
        $program->save();


//
//        $plans = $request->name;
//        $newPlansArray = [];
//        foreach ($plans as $plan)
//        {
//            $newPlansArray[] = ['name' => $plan];
//        }
//        $newPlans=Plan::insert($newPlansArray);
//
////        dd($plans);
////        $plan->name = $request->name;
//        dd($newPlans);
////        $plan->save();


        $plan= new Plan();
        $plan->name=$request->name;
        $program->plan()->save($plan);

        $plan_detail = new PlanDetail();
        $plan_detail->day=$request->day;
        $plan_detail->save();
        $plan->plan_detail()->save($plan_detail);

        $wbs =new Wbs();
        $wbs->exercise=$request->exercise;
        $wbs->save();
        $plan_detail->wbs()->save($wbs);

        $wbs_detail = new WbsDetail();
        $wbs_detail->set=$request->set;
        $wbs_detail->rep=$request->rep;
        $wbs_detail->rest=$request->rest;
        $wbs_detail->save();
        $wbs->wbs_detail()->save($wbs_detail);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Program  $program
     * @return \Illuminate\Http\Response
     */
    public function show(Program $program)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Program  $program
     * @return \Illuminate\Http\Response
     */
    public function edit(Program $program)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Program  $program
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Program $program)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Program  $program
     * @return \Illuminate\Http\Response
     */
    public function destroy(Program $program)
    {
        //
    }
}
