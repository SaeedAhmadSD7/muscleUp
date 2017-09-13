<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{

    protected $table= 'employees';
    protected $primaryKey = 'id';
    protected $fillable = ['user_id','joining_date','quit_date','previous_salary','joining_salary','exp_years','exp_description'];

    public function gym(){
        return $this->belongsTo(gym::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }

    public static function showAll()
    {
        $employee = Employee::all();
        return $employee;
    }




}
