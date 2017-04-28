<?php


Route::get('/', 'MuscleUpApp\HomeController@index');


Route::get('test', function (){
    $params = ['first_name' => 'Abc'];
    \App\User::saveUser($params);
});


//Route::get('register', 'Auth\RegisterController@__construct');
//Route::get('login', 'Auth\LoginController@__construct');
//Route::get('logout', 'Auth\LoginController@__construct');

Auth::routes();

Route::get('/home', 'HomeController@index');


