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
    protected $fillable = ["email", "password","first_name","last_name","dial_code","phone_number","dob","gender"];

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


    public static function saveUser($params){

        $isValid = true;
        $response = null;
        $user = null;
        if($isValid){
            $user = self::save($params);
            $response = ['success'=>false,'error'=>true, 'message' => '', 'Model' => $user];
        }
        return $response;
    }

    function Gym(){
        return $this->belongsTo(Gym::class);
    }
    function trainee(){
        return $this->hasOne(trainee::class);
    }
    function employee(){
        return $this->hasMany(Employee::class);
    }
}
