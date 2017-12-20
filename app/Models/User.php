<?php

namespace App\Models;

use Faker\Provider\bn_BD\Utils;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    protected $table = 'users';
    protected $primaryKey = 'id';
    protected $fillable = ["gym_id","branch_id","email", "password","first_name","last_name" ,"address","dial_code","phone_number","dob","gender"];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    use Notifiable;

    public static function showAll()
    {
        $users = User::all();
        return $users;
    }

    function gym(){
        return $this->belongsTo(Gym::class);
    }

    function trainee(){
        return $this->hasOne(Trainee::class);
    }

    function employee(){
        return $this->hasOne(Employee::class);
    }


}
