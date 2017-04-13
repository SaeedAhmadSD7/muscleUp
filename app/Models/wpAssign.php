<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class wpAssign extends Model
{

    function employee(){
        return $this-> belongsto(employee :: class);

    }

    function trainee()
    {
        return $this->belongsTo(trainee:: class);
    }

}

