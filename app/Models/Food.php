<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $table = 'foods';
    protected $primaryKey = 'id';
    protected $fillable = ['name','unit','unit_value','calories'];

    public function meal(){
        return $this->belongsToMany(Meal::class,'food_meal','food_id','meal_id')->withPivot('quantity','calories','taketime')->withTimestamps();
    }

    public function food(){
        return $this->belongsToMany(DietProgram::class,'diet_food','food_id','diet_program_id')->withPivot('meal_id','quantity','calories','taketime')->withTimestamps();
    }


    public static function showAll()
    {
        $foods = Food::all();
        return $foods;
    }
}
