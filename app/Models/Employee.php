<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Employee
 *
 * @property int $id
 * @property int|null $branch_id
 * @property int|null $user_id
 * @property string $joining_date
 * @property string|null $quit_date
 * @property float|null $previous_salary
 * @property int|null $joining_salary
 * @property int|null $exp_years
 * @property string $exp_description
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \App\Models\Gym $gym
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Trainee[] $trainee
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Employee whereBranchId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Employee whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Employee whereExpDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Employee whereExpYears($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Employee whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Employee whereJoiningDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Employee whereJoiningSalary($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Employee wherePreviousSalary($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Employee whereQuitDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Employee whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Employee whereUserId($value)
 * @mixin \Eloquent
 */
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
    public function trainee()
    {
        return $this->hasMany(Trainee::class);
    }

    public static function showAll()
    {
        $employee = Employee::all();
        return $employee;
    }




}
