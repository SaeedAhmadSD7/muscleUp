<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class deals extends Model
{
    function gym(){
        return $this-> hasOne(gym :: class);

    }
}
