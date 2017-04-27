<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public static function saveUser($params){

        $isValid = true;
        $response = null;
        $user = null;
        if($params['first_name'] != ''){
            $isValid = false;
            $response = ['success'=>false,'error'=>true, 'message' => ''];
        }
        if($isValid){
            $user = self::save($params);
            $response = ['success'=>false,'error'=>true, 'message' => '', 'Model' => $user];
        }
        return $response;
    }
}
