<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User_Type extends Model
{
    function employee(){
        return $this-> belongsto(employee :: class);

    }
}
