<?php
/**
 * Created by PhpStorm.
 * User: soft
 * Date: 4/25/2017
 * Time: 3:34 PM
 */

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
 * @return mixed
 */
function get_auth_user_type(){
    if(auth_check())
        return get_auth_user()->type;
    else
        return null;
}

/**
 * @return null
 */
function get_auth_user_fname(){
    if(auth_check())
        return get_auth_user()->first_name;
    else
        return null;
}

/**
 * @return null
 */
function get_auth_user_lname(){
    if(auth_check())
        return get_auth_user()->last_name;
    else
        return null;
}

/**
 * @return null
 */
function get_auth_user_full_name(){
    if(auth_check())
        return get_auth_user()->last_name.' '.get_auth_user()->last_name;
    else
        return null;
}