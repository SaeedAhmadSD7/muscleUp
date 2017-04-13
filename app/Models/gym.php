<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class gym extends Model
{

    function branches(){
        return $this-> hasMany(branches :: class);

    }

    function bootCamp(){
        return $this->hasMany(bootCamp :: class);

    }

    function batches(){
        return $this-> hasMany(batches :: class);

    }

    function deals(){
        return $this-> hasMany(deals :: class);

    }

    function trainee(){
        return $this-> hasMany(trainee :: class);

    }

    function feeInvoice(){
        return $this-> hasMany(feeInvoice :: class);

    }

    function workoutPlan(){
        return $this->hasMany(workoutPlan :: class);

    }

    function services(){
        return $this-> hasMany(services :: class);

    }

    function userType()
    {
        return $this->hasMany(userType :: class);
    }

}
