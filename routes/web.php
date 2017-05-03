<?php


Route::get('/', 'MuscleUpApp\HomeController@index');

Route::get('test', function (){
    $params = ['first_name' => 'Abc'];
    \App\User::saveUser($params);
});



Auth::routes();



Route::get('/home', 'HomeController@index');


