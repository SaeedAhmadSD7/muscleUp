<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trainee extends Model
{
    protected $fillable = [];


    public function trainee_activities() {
        return $this->hasOne(TraineeActivity::class);
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

    public function user()
    {
        return $this->belongsTo(User:: class);
    }

    public function measurements()
    {
        return $this->hasOne(Measurement:: class);
    }

    public function medicalhistory(){
        return $this->hasOne(MedicalHistory::class);
    }

    public function workout(){
        return $this->hasOne(Workout::class);

    }
}
