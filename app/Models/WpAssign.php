<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WpAssign extends Model
{
    function employee(){
        return $this-> belongsto(Employee :: class);

    }

    function trainee()
    {
        return $this->belongsTo(Trainee:: class);
    }
}
