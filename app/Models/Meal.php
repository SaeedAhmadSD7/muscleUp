<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Meal extends Model {
    protected $table = 'meals';
    protected $primaryKey = 'id';
    protected $fillable = ['title'];

    public function dietProgram() {
        return $this->belongsToMany(DietProgram::class,'diet_meal','meal_id','diet_program_id')->withPivot('food_id','quantity','calories','taketime')->withTimestamps();
    }

    public function food(){
        return $this->belongsToMany(Food::class,'diet_food','meal_id','food_id')->withPivot('diet_program_id','quantity','calories','taketime')->withTimestamps();
    }




    public static function showAll()
    {
        $meals = Meal::all();
        return $meals;
    }
}
