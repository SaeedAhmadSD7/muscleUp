<?php
/**
 * Created by PhpStorm.
 * User: soft
 * Date: 4/25/2017
 * Time: 3:34 PM
 */
use \App\Utils\Globals\AppConstant;

function my_auth(){
    return auth();
}

/**
 * @return bool
 */
function auth_check(){
    if(my_auth()->check())
        return true;
    else
        return false;
}

/**
 * @return \Illuminate\Contracts\Auth\Authenticatable|null
 */
function get_auth_user():\App\Models\User{
    return my_auth()->user();
}

/**
 * @return string
 */
function get_auth_user_type():string{
    if(auth_check())
        return get_auth_user()->type;
    else
        return null;
}

/**
 * @return string
 */
function get_auth_user_fname():string{
    if(auth_check())
        return get_auth_user()->first_name;
    else
        return null;
}

/**
 * @return string
 */
function get_auth_user_lname():string{
    if(auth_check())
        return get_auth_user()->last_name;
    else
        return null;
}

/**
 * @return string
 */
function get_auth_user_full_name():string{
    if(auth_check())
        return get_auth_user()->first_name.' '.get_auth_user()->last_name;
    else
        return null;
}

/**
 * @return string
 */
function get_auth_user_email():string{
    if(auth_check())
        return get_auth_user()->email;
    else
        return null;
}

/**
 * @param \App\Models\Trainee $t
 * @return string
 */
function get_trainee_full_name(\App\Models\Trainee $t):string {
    return $t->first_name .' '.$t->last_name;
}

/**
 * @param \App\Models\User $u
 * @return string
 */
function get_full_name(\App\Models\User $u):string {
    return $u->first_name .' '.$u->last_name;
}

function get_profile_pic_url($picName){
    if($picName === 'default.jpg'){
        return url('resources/app/images/'.$picName);
    }
    return url('resources/app/images/'.AppConstant::PROFILE_PHOTO_DIR.'/'.$picName);
}