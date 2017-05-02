<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Measurment extends Model
{
    function employee(){
        return $this-> belongsTo(Employee :: class);

    }

    function trainee()
    {
        return $this->belongsTo(Trainee:: class);
    }
}
