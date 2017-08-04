<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\Day;
use App\Models\PhaseDayDetail;
use App\Models\ProgramDetail;
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
         $value = array(
             'value' =>'beast mood',
             'value2' =>'10 day program',
             'value3' => 'phase 1',
             'value4' => 'Day 1',
             'value5' => 'cuts day',
             'value6' =>  'work breakdown structure'
         );


        $program = new Program();
        $program->value = $value['value'];
        $program->save();

        $program_detail = new ProgramDetail();
        $program_detail->value2=$value['value2'];
        $program_detail->save();
        $program->program_detail()->save($program_detail);

        $phase = new Phase();
        $phase->value3=$value['value3'];
        $phase->save();
        $program_detail->phase()->sync($phase);

        $day = new Day();
        $day->value4= $value['value4'];
        $day->save();
        $phase->day()->sync($day);

        $phase_day_detail = new PhaseDayDetail();
        $phase_day_detail->value5 = $value['value5'];
        $phase_day_detail->save();


        $wbs = new Wbs();
        $wbs->value6 = $value['value6'];
        $wbs->save();
        $phase_day_detail->wbs()->save($wbs);

        dd($wbs);




//        dd($program->plan());
//        $plans = $request->name;
//        foreach ($request->name as $plan) {
//            $PlansName[] = ['program_id'=>$program->id] ;
//            $PlansName1[] = ['name' => $plan];
//        }
////        $program->plan()->insert(['id'=>$PlansName,'name'=>$PlansName1]);
//
//        $result = $PlansName + $PlansName1;
//        dd($result);
//        $program->plan()->insert($PlansName1);
//        $plan->name = $request->name;
//        dd($newPlans);
//        $plan->save();

//
//        $plan= new Plan();
//        $plan->name=$request->name;
//        $program->plan()->save($plan);
//
//        $plan_detail = new PlanDetail();
//        $plan_detail->day=$request->day;
//        $plan_detail->save();
//        $plan->plan_detail()->save($plan_detail);
//
//        $wbs =new Wbs();
//        $wbs->exercise=$request->exercise;
//        $wbs->save();
//        $plan_detail->wbs()->save($wbs);
//
//        $wbs_detail = new WbsDetail();
//        $wbs_detail->set=$request->set;
//        $wbs_detail->rep=$request->rep;
//        $wbs_detail->rest=$request->rest;
//        $wbs_detail->save();
//        $wbs->wbs_detail()->save($wbs_detail);

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
