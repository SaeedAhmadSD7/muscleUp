<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $fillable = ['name','unit','unit_value','calories','deleted_at','created_at','updated_at'];

    public function dietPlanDetail(){
        return $this->belongsThasManyo(DietPlanDetail::class);
    }

    public static function showAll()
    {
        $foods = Food::all();
        return $foods;
    }
}
