<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class feeInvoice extends Model
{
    function gym(){
        return $this-> belongsTo(gym :: class);

    }
}
