<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class bootcamp extends Model
{
    function gym(){
        return $this-> belongsTo(bootcmap :: class);

    }
}
