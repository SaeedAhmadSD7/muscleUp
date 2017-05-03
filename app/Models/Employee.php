<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{

    function branches()
    {
        return $this->belongsToMany(Branch:: class);

    }

    function trainee(){
        return $this-> hasMany( Trainee:: class);

    }

    function batches(){
        return $this->belongsToMany(Batch:: class);

    }


    function bootCamp()
    {
        return $this->belongsToMany(BootCamp:: class);

    }

    function services(){
        return $this->belongsToMany(Service :: class);

    }

    function userType()
    {
        return $this->belongsTo(UserType :: class);

    }

    function workoutPlan()
    {
        return $this->hasMany(WorkoutPlan :: class);

    }

    function wpDayDetail()
    {
        return $this->hasMany(WpDayDetail :: class);

    }

    function wpAssign()
    {
        return $this->hasMany(WpAssign :: class);

    }

    function measurements()
    {
        return $this->hasOne(Measurement:: class);
    }
}
