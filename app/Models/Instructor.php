<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    public function gym(){
        return $this->belongsTo(gym::class);
    }

    public function trainees()
    {
        return $this->hasMany('App\Models\Trainee');
    }

    Public function workoutplan()
    {
        return $this->hasMany('workoutplan');
    }
}
