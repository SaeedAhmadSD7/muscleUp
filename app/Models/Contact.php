<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    public function gym()
    {
        return $this->hasMany(gym :: class);
    }

}
