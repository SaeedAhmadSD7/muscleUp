<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class gym extends Model
{
    function branches(){
        return $this-> hasMany(branches :: class);

    }
    function employee(){
        return $this-> hasMany(employee :: class);

    }
    function bootCamp(){
        return $this-> hasMany(bootcmap :: class);

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
        return $this-> hasMany(workoutplan :: class);

    }
    function services(){
        return $this-> hasMany(services :: class);

    }

}
