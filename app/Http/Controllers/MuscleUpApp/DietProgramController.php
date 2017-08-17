<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\DietProgram;
use App\Models\Diet;
use App\Models\DietDetail;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class DietProgramController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('muscle-up-app.diet.diet-program');
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
        $dietprogram = new DietProgram();
        $diet = new Diet();
        $diet_detail = new DietDetail();
        $dietprogram->name = $request->name;
        $dietprogram->program_id =1;
        $dietprogram->save();
//        $meals = [];
        foreach($request->input('Meal_number.*') as $meal_number){
//            $meals[]=['number'=>$meal_number];
            $diet->diet_programs_id=$dietprogram->id;
            $diet->number=$meal_number;
            $diet->save();
//            dd($request->input('number.*'));
                foreach($request->input('number.*') as $meal_detail){
                    foreach($meal_detail as $deep){
//                        dd($data);
                        $diet_detail->diet_id=$diet->id;
                            if(isset($deep['meal_name'])){
                        $diet_detail->content=$deep['meal_name'];
                          }
                        if(isset($deep['calories'])) {
                        $diet_detail->calories=$deep['calories'];
                          }
                      if(isset($deep['taketime'])){
                        $diet_detail->taketime=2;
                        }
                    }

                }
            $diet_detail->save();
        }

//        foreach($request->input('number.*') as $meal_number){
//            $meals[] = ['number'=>$meal_number];
//            foreach ($request->input() as $meal_details){
////                $dietprogram->diets->dietdetail()->save($meal_details);
//            }
//            dd($meal_details);
//        }
//        dd($request->input('number.*'));
//        $dietprogram->diet()->create($meals);
        return null;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\DietProgram  $dietProgram
     * @return \Illuminate\Http\Response
     */
    public function show(DietProgram $dietProgram)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\DietProgram  $dietProgram
     * @return \Illuminate\Http\Response
     */
    public function edit(DietProgram $dietProgram)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DietProgram  $dietProgram
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DietProgram $dietProgram)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\DietProgram  $dietProgram
     * @return \Illuminate\Http\Response
     */
    public function destroy(DietProgram $dietProgram)
    {
        //
    }
}
