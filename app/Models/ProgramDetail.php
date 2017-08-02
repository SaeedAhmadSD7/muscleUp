<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgramDetail extends Model
{
    public function phase(){
        return $this->hasMany(Phase::class);
    }
}
