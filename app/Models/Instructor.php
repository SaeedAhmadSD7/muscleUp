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

    protected $table = 'instructors';
    protected $primaryKey = 'id';
    protected $fillable = ["user_id","employee_id","branch_id"];



    public function trainees()
    {
        return $this->belongsToMany(Trainee::class, 'instructor_trainee')->withPivot('type')->withTimestamps();
    }

    public function notMyTrainees()
    {
//        $trainees =  $this->belongsToMany(Trainee::class, 'instructor_trainee')->withPivot('type')->withTimestamps();
//        return Trainee::whereNotIn('instructor_id', $trainees->pivot->instructor_id)->whereNotIn('trainee_id', $trainees->pivot->trainee_id) ->get(); // exclude already followed
//        return Trainee::all();


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
