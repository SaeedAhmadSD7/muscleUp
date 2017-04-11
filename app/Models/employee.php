<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class employee extends Model
{
    function gym(){
        return $this-> belongsTo(gym :: class);

    }

}
