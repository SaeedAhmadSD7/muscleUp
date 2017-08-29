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
    public function showPlans()
    {
        $plans=DietPlan::showAll();
        return view('muscle-up-app.diet.list-diet-program',compact('plans'));
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
        $create= DietPlan::createPlan($request);
        return redirect()->route('show');


    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit($id){

        $dietPlan = DietPlan::find($id);
        $dietPlanDetails = DietPlanDetail::where('diet_plan_id', '=', $id)->get();
        $foods=Food::showAll();
        $meals=Meal::showAll();
         return view('muscle-up-app\diet\edit-diet-program',compact('dietPlan','dietPlanDetails','foods','meals'));
    }


    /**
     * @param Request $request
     */
    public function update(Request $request){

        $dietplan=DietPlan::updatePlan($request);
        return redirect()->route('show');

    }

    /**
     * @param $id
     */
    public  function delete($id){
        $deleteData=DietPlan::deletePlan($id);
        return redirect()->route('show');
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

}
