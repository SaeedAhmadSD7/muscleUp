<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class wp_PlanAssign extends Model
{
    function employee(){
        return $this-> belongsto(employee :: class);

    }
}
