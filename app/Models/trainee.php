<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class trainee extends Model
{
    function gym(){
        return $this-> belongsToMany( gym:: class);

    }
    function employee(){
        return $this-> belongsTo( emoployee:: class);

    }
}
