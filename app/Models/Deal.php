<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Deal extends Model
{
    function gym(){
        return $this->belongsTo(Gym :: class);

    }

    function trainee()
    {
        return $this->belongsToMany(Trainee:: class);

    }
}
