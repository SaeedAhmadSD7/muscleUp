<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserType extends Model
{
    function gym()
    {
        return $this->belongsTo(Gym:: class);
    }

    function employee()
    {
        return $this->belongsto(Employee :: class);

    }

    function trainee()
    {
        return $this->belongsTo(trainee:: class);
    }
}
