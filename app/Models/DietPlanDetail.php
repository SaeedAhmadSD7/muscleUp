<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Food;
use App\Models\Meal;
use App\Models\DietPlan;


class DietPlanDetail extends Model
{
    protected $fillable = ['diet_plan_id','meal_id','food_id','quantity','calories','duration'];


    public function food(){
        return $this->belongsto(Food::class);
    }
    public function meal(){
        return $this->belongsto(Meal::class);
    }
    public function dietPlan(){
        return $this->belongsto(DietPlan::class);
    }
}


