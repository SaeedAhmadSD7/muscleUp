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
