<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trainee extends Model
{
    protected $table = 'trainees';
    protected $primaryKey = 'id';
    protected $fillable = ["branch_id","instructor_id" ,"user_id","weight","height","bmi","bfp"];

    public function user(){
        return $this->belongsTo(user::class);
    }


    public function gym(){
        return $this-> belongsTo( Gym:: class);
    }

    public function employee(){
        return $this->belongsTo(Employee:: class);
    }

    public function feeInvoice()
    {
        return $this->hasMany(FeeInvoice:: class);
    }

    public function medicalhistory(){
        return $this->hasOne(MedicalHistory::class);
    }
    public function workout(){
        return $this->hasOne(Workout::class);

    }
    public function allocation()
    {
        return $this->hasOne(Allocation::class);
    }

    public function traineeActivity(){
        return $this->hasOne(TraineeActivity::class);
    }
}
