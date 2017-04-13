<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class userType extends Model
{

    function gym()
    {
        return $this->belongsTo(gym:: class);
    }

    function employee(){
        return $this-> belongsto(employee :: class);

    }

    function trainee()
    {
        return $this->belongsTo(trainee:: class);
    }

}
