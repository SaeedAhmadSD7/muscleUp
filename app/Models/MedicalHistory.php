<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MedicalHistory extends Model
{
    protected $fillable=[
      'asthma' ,'diabetes','blood_pressure','cholesterol','heart_murmur','knee_problems','arthritis','dizziness',
        'back_pain','neck_pain','kidney_condition','liver_condition','heart_palpitation','glandular_fever','smoke','drink'
    ];
}
