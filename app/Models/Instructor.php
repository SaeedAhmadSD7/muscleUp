<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    protected $table= 'instructors';
    protected $primaryKey = 'id';
    protected $fillable = ['user_id','first_name','last_name','email','birth_date','dial_code','phone_number','gender','exp_years','exp_desc','address'];

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
