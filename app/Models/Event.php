<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Gym;
use App\Trainee;
class Event extends Model
{

    function gym(){
        return $this->belongsTo(Gym :: class);

    }

    function trainee()
    {
        return $this->belongsToMany(Trainee:: class);

    }
}
