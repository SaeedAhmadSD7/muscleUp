<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\PlanDetail;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\Day;
use Illuminate\Support\Facades\DB;

class DayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
//        return view('muscle-up-app.instructor.day');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
//    public function create()
//    {
//        $plans = DB::table('plan_details')->where('name', 'plan_id')->first();
//
////dd($plan)
//        return view('muscle-up-app.instructor.day')->with($plans);
//    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        $day = new Day();
//        $day->number=$request->number;
//
//        $day->save();
//
//        return redirect()->route('show-day');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Day  $day
     * @return \Illuminate\Http\Response
     */
    public function show(Day $day)
    {
//        $day=Day::all();
//
//        return view('muscle-up-app.instructor.dshow')->with('day',$day);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Day  $day
     * @return \Illuminate\Http\Response
     */
    public function edit($id,Day $day)
    {
//        $day=Day::find($id);
//        return view('muscle-up-app.instructor.dupdate')->with('day',$day);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Day  $day
     * @return \Illuminate\Http\Response
     */
    public function update($id,Request $request, Day $day)
    {
//        $day = Day::find($id);
////        dd($request);
//        $day->number=$request->name;
//
//        $day->save();
//
//        return redirect()->route('show-day');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Day  $day
     * @return \Illuminate\Http\Response
     */
    public function destroy($id ,Day $day)
    {
//        $day = Day::find($id);
//        $day->delete();
//        return redirect()->route('show-day');
    }
}
