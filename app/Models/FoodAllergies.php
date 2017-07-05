<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FoodAllergies extends Model
{
    protected $fillable =[
        'egg_allergies','fish_allergies','peanut_allergies','treenut_allergies','shellfish_allergies','wheat_allergies',
        'soy_allergies','meat_allergies','seed_allergies'
    ];
}
