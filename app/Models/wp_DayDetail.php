<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class wp_DayDetail extends Model
{
    function employee(){
        return $this-> belongsto(employee :: class);

    }
}
