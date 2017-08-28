<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Meal extends Model
{
    protected $fillable = ['name','created_at','updated_at'];

    public function dietPlanDetail(){
        return $this->hasMany(DietPlanDetail::class);
    }

    public static function showAll()
    {
        $meals = Meal::all();
        return $meals;
    }
}
