<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MedicalHistory extends Model
{
    protected $table = 'medical_histories';
    protected $fillable=[
      'gym_id' ,'branch_id','trainee_id','health_question_id','status'
    ];

    public function trainee(){
        return $this->belongsTo(Trainee::class);
    }
}
