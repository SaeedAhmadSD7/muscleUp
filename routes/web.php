<?php

Route::get('/', 'MuscleUpApp\HomeController@index');
Route::get('login', 'MuscleUpApp\LoginController@login');


Route::get('test', function (){
    $params = ['first_name' => 'Abc'];
    \App\User::saveUser($params);
});

