<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trainee extends Model
{
    function gym(){
        return $this-> belongsToMany( Gym:: class);
    }

    function employee(){
        return $this->belongsTo(Employee:: class);
    }

    function feeInvoice()
    {
        return $this->hasMany(FeeInvoice:: class);
    }

    function deals()
    {
        return $this->hasMany(Deal:: class);
    }

    function services()
    {
        return $this->hasMany(Servic:: class);
    }

    function userType()
    {
        return $this->belongsTo(UserType:: class);
    }

    function wpAssign()
    {
        return $this->hasOne(WpAssign:: class);
    }

    function wpDayDetail()
    {
        return $this->hasMany(WpDayDetail:: class);
    }

    function batches()
    {
        return $this->belongsToMany(Batch:: class);
    }

    function bootCamp()
    {
        return $this->belongsToMany(BootCamp:: class);
    }

    function measurements()
    {
        return $this->hasOne(Measurement:: class);
    }
}
