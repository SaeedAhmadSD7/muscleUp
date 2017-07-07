<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MedicalHistory extends Model
{
    protected $fillable=[
      'asthma' ,'diabetes','blood_pressure','cholesterol','heart_murmur','knee_problems','arthritis','dizziness',
        'back_pain','neck_pain','kidney_condition','liver_condition','heart_palpitation','glandular_fever','smoke','drink' ,'egg_allergies'
        ,'fish_allergies','peanut_allergies','treenut_allergies','shellfish_allergies','wheat_allergies',
        'soy_allergies','meat_allergies','seed_allergies'


    ];
}
