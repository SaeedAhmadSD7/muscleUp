<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trainee extends Model
{
    function gym(){
        return $this-> belongsTo( Gym:: class);
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
        return $this->hasOne(Deal:: class);
    }

    function services()
    {
        return $this->hasMany(Service:: class);
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
