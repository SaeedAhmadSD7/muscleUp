<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    function gym(){
        return $this-> belongsTo(Gym :: class);

    }

    function employee(){
        return $this->hasMany(Employee:: class);
    }
}
