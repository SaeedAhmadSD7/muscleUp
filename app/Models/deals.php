<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class deals extends Model
{

    function gym(){
        return $this->belongsTo(gym :: class);

    }

    function trainee()
    {
        return $this->belongsToMany(trainee:: class);

    }


}
