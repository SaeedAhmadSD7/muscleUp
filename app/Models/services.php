<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class services extends Model
{
    function gym(){
        return $this-> belongsTo(gym :: class);

    }
}
