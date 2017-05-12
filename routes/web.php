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
Route::get('/create/deal',['as'=>'create-deal' , 'uses' =>'MuscleUpApp\DealController@create']);
Route::get('/deal',['as'=>'deal' , 'uses' =>'MuscleUpApp\DealController@index']);
Route::post('/save/deal',['as'=>'save-deal','uses'=>'MuscleUpApp\DealController@store']);
Route::get('/show/deal/{id}',['as'=>'show-deal','uses'=>'MuscleUpApp\DealController@show']);
Route::delete('/deal/delete/{id}',['as'=>'delete' , 'uses' =>'MuscleUpApp\DealController@delete']);
Route::resource('deals','MuscleUpApp\DealController');


//service
Route::get('home/service',['as'=>'service','uses'=>'MuscleUpApp\ServiceController@store']);


/**
 * Events Routes
 */

Route::get('create-event',['as'=>'create-event','uses' => 'MuscleUpApp\EventController@create']);
Route::post('save-event/',['as'=>'save-event','uses'=>'MuscleUpApp\EventController@save']);
Route::get('show-event/{event}',['as'=>'show-event','uses'=>'MuscleUpApp\EventController@retrieve']);
Route::get('edit-event/{event}',['as'=>'edit-event','uses'=>'MuscleUpApp\EventController@edit']);
Route::post('update-event/{event}',['as'=>'update-event','uses'=>'MuscleUpApp\EventController@update']);
