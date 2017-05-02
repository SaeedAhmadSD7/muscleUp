<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FeeInvoice extends Model
{
    function gym(){
        return $this-> belongsTo(Gym :: class);

    }

    function trainee()
    {
        return $this->belongsTo(Employee :: class);

    }
}
