<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\DietPlan;
use App\Models\DietPlanDetail;
use App\Models\DietProgram;
use App\Models\Diet;
use App\Models\DietDetail;
use App\Models\Food;
use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class DietProgramController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $foods=Food::showAll();
        $meals=Meal::showAll();
        return view('muscle-up-app.diet.diet-program',compact('foods','meals'));
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
        $dietPlan=new DietPlan();
        $dietPlan->name=$request->name;
        $dietPlan->status=$request->status;
        $dietPlan->description=$request->description;
        $dietPlan->save();
        $dietPlanId=$dietPlan->id;
        $list=array();
        $meal=array();
        $food=array();
        $quantity=array();
        $calories=array();
        $duration=array();
        $count=0;
        foreach($request->input('meal_id') as $data_meal_id){
            $meal[]=$data_meal_id;
            $count++;
        }
        $list['meal']=$meal;
        foreach($request->input('food_id') as $data_food_id){
            $food[]=$data_food_id;
        }
        $list['food_id']=$food;
        foreach($request->input('quantity') as $data_quantity){
            $quantity[]=$data_quantity;
        }
        $list['quantity']=$quantity;
        foreach($request->input('calories') as $data_calories){
            $calories[]=$data_calories;
        }
        $list['calories']=$calories;
        foreach($request->input('duration') as $data_duration){
            $duration[]=$data_duration;
        }
        $list['duration']=$duration;
         for($i=0;$i<$count;$i++){
             $dietPlanDetail=new DietPlanDetail();
             $dietPlanDetail->diet_plan_id=$dietPlanId;
             $dietPlanDetail->meal_id=$list['meal'][$i];
             $dietPlanDetail->food_id=$list['food_id'][$i];
             $dietPlanDetail->quantity=$list['quantity'][$i];
             $dietPlanDetail->calories=$list['calories'][$i];
             $dietPlanDetail->duration=$list['duration'][$i];
             $dietPlanDetail->save();
         }
    }


    public function edit($id){

        $dietPlan = DietPlan::find($id);
        $dietPlanDetails = DietPlanDetail::where('diet_plan_id', '=', $id)->get();
        $foods=Food::showAll();
        $meals=Meal::showAll();
        return view('muscle-up-app\diet\edit-diet-program',compact('dietPlan','dietPlanDetails','foods','meals'));
    }



    public function update(Request $request){
        $dietPlan=DietPlan::find($request->id);
        $dietPlan->name=$request->name;
        $dietPlan->status=$request->status;
        $dietPlan->description=$request->description;
        $dietPlan->update();
        $dietPlanId=$dietPlan->id;
        $list=array();
        $meal=array();
        $food=array();
        $quantity=array();
        $calories=array();
        $duration=array();
        $count=0;
        foreach($request->input('meal_id') as $data_meal_id){
            $meal[]=$data_meal_id;
            $count++;
        }
        $list['meal']=$meal;
        foreach($request->input('food_id') as $data_food_id){
            $food[]=$data_food_id;
        }
        $list['food_id']=$food;
        foreach($request->input('quantity') as $data_quantity){
            $quantity[]=$data_quantity;
        }
        $list['quantity']=$quantity;
        foreach($request->input('calories') as $data_calories){
            $calories[]=$data_calories;
        }
        $list['calories']=$calories;
        foreach($request->input('duration') as $data_duration){
            $duration[]=$data_duration;
        }
        $list['duration']=$duration;
        for($i=0;$i<$count;$i++){
            $dietPlanDetail = DietPlanDetail::where('diet_plan_id', '=', $request->id);
            foreach($dietPlanDetail as $dietPlanDetails){
                $dietPlanDetails->diet_plan_id=$dietPlanId;
                $dietPlanDetails->meal_id=$list['meal'][$i];
                $dietPlanDetails->food_id=$list['food_id'][$i];
                $dietPlanDetails->quantity=$list['quantity'][$i];
                $dietPlanDetails->calories=$list['calories'][$i];
                $dietPlanDetails->duration=$list['duration'][$i];
                $dietPlanDetails->sync();
            }
        }
    }

    public  function delete($id){
        $dietPlan = DietPlan::find($id);
        $dietPlan->delete();
        $dietPlanDetails = DietPlanDetail::where('diet_plan_id', '=', $id);
            $dietPlanDetails->delete();
        redirect(route('diet'));
    }
//    public function store(Request $request)
//    {
//            dd($request);
//        $dietprogram = new DietProgram();
//        $diet = new Diet();
//        $diet_detail = new DietDetail();
//        $dietprogram->name = $request->name;
//        $dietprogram->program_id =1;
//        $dietprogram->save();
////        $meals = [];
//        foreach($request->input('Meal_number.*') as $meal_number){
////            $meals[]=['number'=>$meal_number];
//            $diet->diet_programs_id=$dietprogram->id;
//            $diet->number=$meal_number;
//            $diet->save();
////            dd($request->input('number.*'));
//                foreach($request->input('number.*') as $meal_detail){
//                    foreach($meal_detail as $deep){
////                        dd($data);
//                        for($i=0;$i<3;$i++){
//                                $diet_detail->diet_id=$diet->id;
//                                    if(isset($deep['meal_name'])){
//                                $diet_detail->content=$deep['meal_name'];
//                                  }
//                                if(isset($deep['calories'])) {
//                                $diet_detail->calories=$deep['calories'];
//                                  }
//                              if(isset($deep['taketime'])){
//                                $diet_detail->taketime=$deep['taketime'];
//                                }
//                        }
//                        $diet_detail->save();
//                    }
//
//                }
//
//        }
//
////        foreach($request->input('number.*') as $meal_number){
////            $meals[] = ['number'=>$meal_number];
////            foreach ($request->input() as $meal_details){
//////                $dietprogram->diets->dietdetail()->save($meal_details);
////            }
////            dd($meal_details);
////        }
////        dd($request->input('number.*'));
////        $dietprogram->diet()->create($meals);
//        return null;
//    }

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
//    public function edit(DietProgram $dietProgram)
//    {
//        //
//    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\DietProgram  $dietProgram
     * @return \Illuminate\Http\Response
     */
//    public function update(Request $request, DietProgram $dietProgram)
//    {
//        //
//    }

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
