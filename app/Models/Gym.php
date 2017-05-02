<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gym extends Model
{
    function branches(){
        return $this-> hasMany(Branch :: class);

    }

    function bootCamp(){
        return $this->hasMany(BootCamp :: class);

    }

    function batches(){
        return $this-> hasMany(Batch :: class);

    }

    function deals(){
        return $this-> hasMany(Deal :: class);

    }

    function trainee(){
        return $this-> hasMany(Trainee :: class);

    }

    function feeInvoice(){
        return $this-> hasMany(FeeInvoice :: class);

    }

    function workoutPlan(){
        return $this->hasMany(WorkoutPlan :: class);

    }

    function services(){
        return $this-> hasMany(Service :: class);

    }

    function userType()
    {
        return $this->hasMany(userType :: class);
    }
}
