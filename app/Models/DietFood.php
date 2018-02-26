<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DietFood extends Model
{
    protected $table='diet_food';
    protected $primaryKey = 'id';
    protected $fillable = ['diet_program_id' , 'food_id' , 'meal_id' , 'quantity' , 'calories' , 'taketime'];
}
