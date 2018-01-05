<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Instructor
 *
 * @mixin \Eloquent
 */
class Instructor extends Model
{

    public function trainees()
    {
        return $this->hasMany(Trainee::class);
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
