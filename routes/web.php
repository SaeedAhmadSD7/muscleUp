<?php


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
Route::get('show/{id}','MuscleUpApp\ServiceController@show')->name('services.show');
Route::delete('delete/{id}',['as'=>'delete','uses'=>'MuscleUpApp\ServiceController@destroy']);
Route::get('update/{service_id}',['as'=>'Update-service','uses'=>'MuscleUpApp\ServiceController@edit']);
Route::put('update/{id}',['as'=>'Update.service','uses'=>'MuscleUpApp\ServiceController@update']);

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
 * Gym Request
 */

Route::get('gym/request/join', ['uses'=>'MuscleUpApp\GymController@request', 'as'=>'gym-request']);
Route::post('gym/request/save',['uses'=>'MuscleUpApp\GymController@request_save', 'as'=> 'save-request']);
Route::get('gym/request/process/{id}',['uses'=>'MuscleUpApp\GymController@request_process', 'as'=> 'process-request']);
//Route::post('save-gym',['uses'=>'MuscleUpApp\GymController@save', 'as'=> 'save-gym']);
/*
login form
 */

//Route::get('login-form', function () {
//    return view('muscle-up-app.login_form.login');
//});



Route::get('login', ['uses'=>'MuscleUpApp\LoginController@index','as'=>'login']);


Route::post('check-login', ['uses'=>'MuscleUpApp\LoginController@login','as'=>'check-login']);


Route::get('/gym', ['as'=>'gym', 'uses'=>'MuscleUpApp\GymController@index']);
Route::post('/gym/add', ['as'=>'add-gym', 'uses'=>'MuscleUpApp\GymController@add_gym']);

//TraineePackage

Route::get('traineepackage', ['as'=>'traineepackage','uses'=>'MuscleUpApp\TraineePackageController@traineepackage']);
Route::get('/create/tpackage',['as'=>'create-tpackage','uses'=>'MuscleUpApp\TraineePackageController@create']);
Route::post('/train/package',['as'=>'Save-tpackage','uses'=>'MuscleUpApp\TraineePackageController@store']);
Route::get('show/trnpackage/{id}',['as'=>'show-trnpackage','uses'=>'MuscleUpApp\TraineePackageController@show']);
Route::get('update-trpackage/{id}',['as'=>'update-trpackage','uses'=>'MuscleUpApp\TraineePackageController@edit']);
Route::post('update-trpackage/{id}',['as'=>'update-trpackage','uses'=>'MuscleUpApp\TraineePackageController@update']);
Route::get('delete-trnpackage/{id}',['as'=>'delete.package','uses'=>'MuscleUpApp\TraineePackageController@destroy']);

/*
Trainee
 */
//Route::get('trainee',['as'=>'trainee','uses'=>'MuscleUpApp\TraineeController@create_trainee']);

Route::get('/trainee/dashboard', ['as'=>'trainee-dashboard', 'uses'=> 'MuscleUpApp\TraineeController@index' ]);
Route::get('trainee/add',['as'=>'trainee-add','uses'=>'MuscleUpApp\TraineeController@create']);
Route::post('trainee/store', ['as' => 'trainee-store', 'uses' => 'MuscleUpApp\TraineeController@store']);

Route::get('/trainee/list',['as'=>'trainee-list','uses'=>'MuscleUpApp\TraineeController@inbox']);
Route::get('/trainee/list/detail/{id}',['as'=>'trainee-list-detail','uses'=>'MuscleUpApp\TraineeController@trainee_detail']);
Route::delete('/trainee/list/delete/{id}',['as'=>'trainee-list-delete','uses'=>'MuscleUpApp\TraineeController@destroy']);
Route::get('trainee/profile/',['as'=>'trainee-profile','uses'=>'MuscleUpApp\TraineeController@view_profile']);
Route::get('/trainee/personal/detail/{id}',['as'=>'trainee-personal-detail','uses'=>'MuscleUpApp\TraineeController@show']);
Route::get('/trainee/personal/detail/edit/{id}',['as'=>'trainee-personal-detail-edit','uses'=>'MuscleUpApp\TraineeController@edit']);
Route::post('/trainee/personal/detail/update/{id}',['as'=>'trainee-detail-update','uses'=>'MuscleUpApp\TraineeController@update']);

Route::post('trainee/profile/image',['as'=>'trainee-image','uses'=>'MuscleUpApp\TraineeController@upload_profile']);



/*
 Trainee Medical History
 */
Route::get('trainee/medical',['as'=>'trainee-medical','uses'=>'MuscleUpApp\TraineeController@medical']);
Route::post('trainee/medical/save',['as'=>'save-medical','uses'=>'MuscleUpApp\TraineeController@medial_history']);
Route::get('trainee/view/medical/{id}',['as'=>'trainee-view-medical','uses'=>'MuscleUpApp\TraineeController@view_medical_history']);
Route::get('trainee/medical/edit/{id}',['as'=>'edit-trainee-medical','uses'=>'MuscleUpApp\TraineeController@edit_medical_history']);
Route::post('trainee/medical/update/{id}',['as'=>'trainee-medical-update','uses'=>'MuscleUpApp\TraineeController@medical_history_update']);


/*
 Admin-panel
*/
Route::get('/admin/dashboard',['as'=>'admin-dashboard','uses'=>'MuscleUpApp\AdminController@index']);
Route::get('/Admin/Inbox',['as'=>'Admin-Inbox','uses'=>'MuscleUpApp\AdminController@inbox']);
Route::get('/Admin/Inbox/Message/Detail/{id}',['as'=>'Admin-Message-Detail','uses'=>'MuscleUpApp\AdminController@message_detail']);
Route::get('/Admin/Inbox/Message/Accept/{id}',['as'=>'Admin-Message-Accept','uses'=>'MuscleUpApp\AdminController@request_accept']);


//Workout program
Route::get('/program',['as'=>'program','uses'=>'MuscleUpApp\ProgramController@create']);
Route::post('/program/store', ['as' => 'program-store', 'uses' => 'MuscleUpApp\ProgramController@store']);

/***
 * Diet Plan
 */
Route::get('/diet',['as'=>'diet','uses'=>'MuscleUpApp\DietProgramController@index']);
Route::post('/diet/add',['as'=>'add-diet','uses'=>'MuscleUpApp\DietProgramController@store']);



/*
 Exercise
 *  */
Route::get('/exercise',['as'=>'exercise','uses'=>'MuscleUpApp\ExerciseController@exercise_list']);




//Instructor

Route::get('show-instructor',['as'=>'show-instructor','uses'=>'MuscleUpApp\InstructorController@show']);
Route::get('instructor/add',['as'=>'instructor-add','uses'=>'MuscleUpApp\InstructorController@add']);
Route::get('update-instructor/{id}',['as'=>'update-instructor','uses'=>'MuscleUpApp\InstructorController@edit']);
Route::post('update-instructor/{id}',['as'=>'update-instructor','uses'=>'MuscleUpApp\InstructorController@update']);
Route::post('instructor/store',['as'=>'instructor-store','uses'=>'MuscleUpApp\InstructorController@store']);
Route::get('delete-instructor/{id}',['as'=>'delete-instructor','uses'=>'MuscleUpApp\InstructorController@destroy']);
Route::get('show-instructor/detail/{id}',['as'=>'instructor-detail','uses'=>'MuscleUpApp\InstructorController@instructor_detail']);



//Workout
Route::get('/workout',['as'=>'workout-store','uses'=>'MuscleUpApp\WorkoutPlanController@workout']);
Route::get('/create/workout',['as'=>'create-workout','uses'=>'MuscleUpApp\WorkoutPlanController@create']);


//Exercise
Route::get('show-exercise',['as'=>'show-exercise','uses'=>'MuscleUpApp\ExerciseController@show']);
Route::get('update-exercise/{id}',['as'=>'update-exercise','uses'=>'MuscleUpApp\ExerciseController@edit']);
Route::post('update-exercise/{id}',['as'=>'update-exercise','uses'=>'MuscleUpApp\ExerciseController@update']);
Route::get('delete-exercise/{id}',['as'=>'delete-exercise','uses'=>'MuscleUpApp\ExerciseController@destroy']);


//Day
//Route::get('day',['as'=>'day','uses'=>'MuscleUpApp\DayController@day']);
//Route::post('day/store',['as'=>'day-store','uses'=>'MuscleUpApp\DayController@store']);
//Route::get('/create/day',['as'=>'create-day','uses'=>'MuscleUpApp\DayController@create']);
//Route::get('show-day',['as'=>'show-day','uses'=>'MuscleUpApp\DayController@show']);
//Route::get('update-day/{id}',['as'=>'update-day','uses'=>'MuscleUpApp\DayController@edit']);
//Route::post('update-day/{id}',['as'=>'update-day','uses'=>'MuscleUpApp\DayController@update']);
//Route::get('delete-day/{id}',['as'=>'delete-day','uses'=>'MuscleUpApp\DayController@destroy']);





Route::get('show/trainee/list/{id}',['as'=>'show-trainee-list','uses'=>'MuscleUpuApp\TraineeListController@show']);