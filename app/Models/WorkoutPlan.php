<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WorkoutPlan extends Model
{

    function gym(){
        return $this-> belongsTo(Gym :: class);

    }
    function employee(){
        return $this-> belongsto(Employee :: class);

    }

    function wpAssign()
    {
        return $this->belongsTo(WpAssign:: class);
    }
}
