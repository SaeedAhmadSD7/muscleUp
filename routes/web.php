<?php


Route::get('test', function (){
    $params = ['first_name' => 'Abc'];
    \App\User::saveUser($params);
});

Auth::routes();



Route::get('/home', 'HomeController@index');

//contactUs
Route::get('/home/store', ['as' => 'home.store', 'uses' => 'MuscleUpApp\ContactController@store']);


Route::get('/', ['as' => 'home-page', 'uses' => 'MuscleUpApp\HomeController@index']);

//deals
Route::get('home/deal',['as'=>'deal','uses'=>'MuscleUpApp\DealController@store']);



