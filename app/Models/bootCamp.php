<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class bootCamp extends Model
{
    function gym()
    {
        return $this->belongsTo(gym :: class);
    }

    function employee()
    {
        return $this->hasMany(employee :: class);
    }

    function trainee()
    {
        return $this->hasMany(trainee :: class);
    }
}
