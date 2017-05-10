<?php


Route::get('test', function (){
    $params = ['first_name' => 'Abc'];
    \App\User::saveUser($params);
});

Auth::routes();

Route::get('/admin', 'Auth\AdminController@index');


Route::get('/home', 'HomeController@index');

Route::get('/', ['as' => 'home-page', 'uses' => 'MuscleUpApp\HomeController@index']);


//contactUs
Route::get('/home/contact', ['as' => 'home.store', 'uses' => 'MuscleUpApp\ContactController@store']);



//deals
Route::get('home/deal',['as'=>'deal' , 'uses' =>'MuscleUpApp\DealController@index']);
Route::get('/deal',['as'=>'SaveDeal','uses'=>'MuscleUpApp\DealController@store']);


//Event
Route::get('/create-event',['as'=>'EnterEvent','uses'=>'MuscleUpApp\EventController@create']);


//service
Route::get('home/service',['as'=>'service','uses'=>'MuscleUpApp\ServiceController@store']);

Route::get('/gregister',function () {

    return view('muscle-up-app.gym-registration-request.gym-registration-request');
});

Route::get('/tregister',function () {

    return view('muscle-up-app.gym-registration-request.gym-registration-request');
});

