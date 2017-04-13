<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class trainee extends Model
{

    function gym(){
        return $this-> belongsToMany( gym:: class);
    }

    function employee(){
        return $this->belongsTo(employee:: class);
    }

    function feeInvoice()
    {
        return $this->hasMany(feeInvoice:: class);
    }

    function deals()
    {
        return $this->hasMany(deals:: class);
    }

    function services()
    {
        return $this->hasMany(services:: class);
    }

    function userType()
    {
        return $this->belongsTo(userType:: class);
    }

    function wpAssign()
    {
        return $this->hasOne(wpAssign:: class);
    }

    function wpDayDetail()
    {
        return $this->hasMany(wpDayDetail:: class);
    }

    function batches()
    {
        return $this->belongsToMany(batches:: class);
    }

    function bootCamp()
    {
        return $this->belongsToMany(bootCamp:: class);
    }

    function measurements()
    {
        return $this->hasOne(measurements:: class);
    }
}
