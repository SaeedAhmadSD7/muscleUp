<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    function gym(){
        return $this->belongsTo(gym::class);
    }
}
