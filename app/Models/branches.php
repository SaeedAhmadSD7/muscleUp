<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class branches extends Model
{
    function gym(){
        return $this-> belongsTo(gym :: class);

    }
    function employee(){
        return $this-> belongsto( employee:: class);

    }


}
