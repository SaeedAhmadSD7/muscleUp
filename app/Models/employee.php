<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class employee extends Model
{

    function branches()
    {
        return $this->belongsToMany(branches:: class);

    }

    function trainee(){
        return $this-> hasMany( trainee:: class);

    }

    function batches(){
        return $this->belongsToMany(batches:: class);

    }


    function bootCamp()
    {
        return $this->belongsToMany(bootCamp:: class);

    }

    function services(){
        return $this->belongsToMany(services :: class);

    }

    function userType()
    {
        return $this->belongsTo(userType :: class);

    }

    function workoutPlan()
    {
        return $this->hasMany(workoutPlan :: class);

    }

    function wpDayDetail()
    {
        return $this->hasMany(wpDayDetail :: class);

    }

    function wpAssign()
    {
        return $this->hasMany(wpAssign :: class);

    }

    function measurements()
    {
        return $this->hasOne(measurements:: class);
    }

}
