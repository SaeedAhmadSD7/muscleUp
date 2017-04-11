<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class batches extends Model
{
    function gym(){
        return $this-> hasOne(gym :: class);

    }
    function employee(){
        return $this-> belongsToMany( emplotyee:: class);

    }
}
