<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $table = 'foods';
    protected $primaryKey = 'id';
    protected $fillable = ['name','unit','unit_value','calories'];

    public function meal() {
        return $this->belongsToMany(Meal::class,'food_meal','food_id','meal_id')->withPivot('diet_program_id','quantity','calories','taketime')->withTimestamps();
    }


    public static function showAll()
    {
        $foods = Food::all();
        return $foods;
    }
}
