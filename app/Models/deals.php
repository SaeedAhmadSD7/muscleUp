<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class deals extends Model
{
    function gym(){
        return $this-> hasOne(gym :: class);

    }
    function employee(){
        return $this-> belongsTo( emplotyee:: class);

    }
}
