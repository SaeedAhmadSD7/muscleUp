<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Workout_Plan extends Model
{
    function gym(){
        return $this-> belongsTo(gym :: class);

    }
}
