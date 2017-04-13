<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class workoutPlan extends Model
{

    function gym(){
        return $this-> belongsTo(gym :: class);

    }
    function employee(){
        return $this-> belongsto(employee :: class);

    }

    function wpAssign()
    {
        return $this->belongsTo(wpAssign:: class);
    }
}
