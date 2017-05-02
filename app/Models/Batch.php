<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
    function gym(){
        return $this->belongsTo(Gym :: class);
    }

    function employee(){
        return $this->hasMany(Employee:: class);
    }

    function trainee()
    {
        return $this->hasMany(Trainee:: class);
    }
}
