<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class measurements extends Model
{

    function employee(){
        return $this-> belongsTo(employee :: class);

    }

    function trainee()
    {
        return $this->belongsTo(trainee:: class);
    }
}
