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
Route::get('/deal',['as'=>'deal' , 'uses' =>'MuscleUpApp\DealController@index']);
Route::get('/create/deal',['as'=>'create-deal' , 'uses' =>'MuscleUpApp\DealController@create']);
Route::post('/save/deal',['as'=>'save-deal','uses'=>'MuscleUpApp\DealController@store']);
Route::get('/show/deal/{id}',['as'=>'show-deal','uses'=>'MuscleUpApp\DealController@show']);
Route::delete('/deal/delete/{id}',['as'=>'delete' , 'uses' =>'MuscleUpApp\DealController@destroy']);
Route::resource('deals','MuscleUpApp\DealController');


//package

Route::get('/package',['as'=>'traineepackage' , 'uses' =>'MuscleUpApp\PackageController@index']);

Route::get('/gym/package',['as'=>'gym-package' , 'uses' =>'MuscleUpApp\PackageController@gymPackage']);
Route::get('/package',['as'=>'packages' , 'uses' =>'MuscleUpApp\PackageController@index']);

Route::get('/create/package',['as'=>'create-package' , 'uses' =>'MuscleUpApp\PackageController@create']);
Route::get('/show/package/{id}',['as'=>'show-package','uses'=>'MuscleUpApp\PackageController@show']);
//Route::delete('/package/delete/{id}',['as'=>'delete' , 'uses' =>'MuscleUpApp\packageController@destroy']);
Route::resource('package','MuscleUpApp\PackageController');


//service
Route::get('services', ['as'=>'service-store','uses'=>'MuscleUpApp\ServiceController@index']);
Route::get('/service',['as'=>'service','uses'=>'MuscleUpApp\ServiceController@create']);
Route::post('/service',['as'=>'Save-service','uses'=>'MuscleUpApp\ServiceController@store']);
Route::get('update/{service_id}',['as'=>'Update-service','uses'=>'MuscleUpApp\ServiceController@edit']);
Route::put('update/{id}',['as'=>'Update.service','uses'=>'MuscleUpApp\ServiceController@update']);
Route::delete('delete/{id}',['as'=>'delete','uses'=>'MuscleUpApp\ServiceController@destroy']);
Route::get('show/{id}','MuscleUpApp\ServiceController@show')->name('services.show');

//Route::get('delete',['as'=>'delete','uses'=>'MuscleUpApp\ServiceController@destroy']);
//Route::put('update/{id}',['as'=>'Update-service','uses'=>'MuscleUpApp\ServiceController@update']);


/**
 * Events Routes
 */

Route::get('create-event',['as'=>'create-event','uses' => 'MuscleUpApp\EventController@create']);
Route::post('save-event/',['as'=>'save-event','uses'=>'MuscleUpApp\EventController@save']);
Route::get('show-event/{event}',['as'=>'show-event','uses'=>'MuscleUpApp\EventController@retrieve']);
Route::get('edit-event/{event}',['as'=>'edit-event','uses'=>'MuscleUpApp\EventController@edit']);
Route::post('update-event/{event}',['as'=>'update-event','uses'=>'MuscleUpApp\EventController@update']);
Route::get('delete-event/{event}',['as'=>'delete','uses'=>'MuscleUpApp\EventController@destroy']);
Route::resource('events','MuscleUpApp\EventController');


/**
 * Register Gym
 */


Route::get('request/gym', ['uses'=>'MuscleUpApp\GymController@request', 'as'=>'request-gym']);
Route::post('save-gym',['uses'=>'MuscleUpApp\GymController@store', 'as'=> 'save-gym']);
//Route::post('save-gym',['uses'=>'MuscleUpApp\GymController@save', 'as'=> 'save-gym']);
/*
login form
 */

//Route::get('login-form', function () {
//    return view('muscle-up-app.login_form.login');
//});



Route::get('login', ['uses'=>'MuscleUpApp\LoginController@index','as'=>'login']);


Route::post('check-login', ['uses'=>'MuscleUpApp\LoginController@login','as'=>'check-login']);

Route::get('/trainee', ['as'=>'trainee',function () {
    return ('trainee');}
    ]);

Route::get('/gym', ['as'=>'gym',function () {
    return ('gym');}
    ]);

Route::get('/admin', ['as'=>'admin',function () {
    return ('admin');}
    ]);

//TraineePackage

//Route::get('traineepackage', ['as'=>'traineepackage','uses'=>'MuscleUpApp\TraineePackageController@traineepackage']);
Route::get('/create/tpackage',['as'=>'create-tpackage','uses'=>'MuscleUpApp\TraineePackageController@create']);
Route::post('/train/package',['as'=>'Save-tpackage','uses'=>'MuscleUpApp\TraineePackageController@store']);
Route::get('show/trnpackage/{id}',['as'=>'show-trnpackage','uses'=>'MuscleUpApp\TraineePackageController@show']);
Route::get('update-trpackage/{id}',['as'=>'update-trpackage','uses'=>'MuscleUpApp\TraineePackageController@edit']);
Route::post('update-trpackage/{id}',['as'=>'update-trpackage','uses'=>'MuscleUpApp\TraineePackageController@update']);
Route::get('delete-trnpackage/{id}',['as'=>'delete.package','uses'=>'MuscleUpApp\TraineePackageController@destroy']);

/*
Trainee Registration
 */

Route::get('register-trainee',['as'=>'register-trainee','uses'=>'MuscleUpApp\TraineeController@create']);
Route::post('store-trainee', ['as' => 'store-trainee', 'uses' => 'MuscleUpApp\TraineeController@store']);

/*
 Admin-panel
*/
Route::get('/Admin/Dashboard',['as'=>'Admin-Dashboard','uses'=>'MuscleUpApp\AdminController@index']);
Route::get('/Admin/Inbox',['as'=>'Admin-Inbox','uses'=>'MuscleUpApp\AdminController@inbox']);
