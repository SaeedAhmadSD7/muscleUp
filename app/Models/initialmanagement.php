<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class initialmanagement extends Model
{
    function employee(){
        return $this-> belongsto(employee :: class);

    }
}
