<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DietPlan extends Model
{
    protected $fillable = ['name','status','description'];

    public function DietPlanDetail(){
        return $this->hasMany(DietPlanDetail::class);
    }

    public static function showAll()
    {
        $plans = DietPlan::all();
        return $plans;
    }


    public static function createPlan($request){
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

    public static function updatePlan($request)
    {
        $dietPlan = self::find($request->id);
        $dietPlan->name = $request->name;
        $dietPlan->status = $request->status;
        $dietPlan->description = $request->description;
        $dietPlan->update();
        $dietPlanId = $dietPlan->id;
        $list = array();
        $meal = array();
        $food = array();
        $quantity = array();
        $calories = array();
        $duration = array();
        $count = 0;
        foreach ($request->input('meal_id') as $data_meal_id) {
            $meal[] = $data_meal_id;
            $count++;
        }
        $list['meal'] = $meal;
        foreach ($request->input('food_id') as $data_food_id) {
            $food[] = $data_food_id;
        }
        $list['food_id'] = $food;
        foreach ($request->input('quantity') as $data_quantity) {
            $quantity[] = $data_quantity;
        }
        $list['quantity'] = $quantity;
        foreach ($request->input('calories') as $data_calories) {
            $calories[] = $data_calories;
        }
        $list['calories'] = $calories;
        foreach ($request->input('duration') as $data_duration) {
            $duration[] = $data_duration;
        }
        $list['duration'] = $duration;
        for ($i = 0; $i < $count; $i++) {
            $dietPlanDetail = DietPlanDetail::where('diet_plan_id', '=', $request->id);
            foreach ($dietPlanDetail as $dietPlanDetails) {
                $dietPlanDetails->diet_plan_id = $dietPlanId;
                $dietPlanDetails->meal_id = $list['meal'][$i];
                $dietPlanDetails->food_id = $list['food_id'][$i];
                $dietPlanDetails->quantity = $list['quantity'][$i];
                $dietPlanDetails->calories = $list['calories'][$i];
                $dietPlanDetails->duration = $list['duration'][$i];
                $dietPlanDetails->sync();
            }
        }
    }

    public static function deletePlan($id){
        $dietPlan = self::find($id);
        $dietPlan->delete();
        $dietPlanDetails = DietPlanDetail::where('diet_plan_id', '=', $id);
        $dietPlanDetails->delete();
    }
}
