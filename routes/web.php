<?php

Auth::routes();

Route::get('/logout', ['uses'=>'\App\Http\Controllers\Auth\LoginController@logout','as'=>'logout']);

Route::get('dashboard',['uses'=>'MuscleUpApp\GymController@index','as'=>'dashboard']);


//Route::group(['prefix'=>'gym','middleware' => 'usertype'],function () {
//    Route::get('dashboard',['uses'=>'MuscleUpApp\GymController@index','as'=>'dashboard']);
//});
//
//Route::group(['prefix'=>'admin','middleware' => 'usertype'],function () {
//    Route::get('dashboard',['uses'=>'MuscleUpApp\GymController@index','as'=>'dashboard']);
//});
//
//Route::group(['prefix'=>'trainee','middleware' => 'usertype'],function () {
//    Route::get('dashboard',['uses'=>'MuscleUpApp\GymController@index','as'=>'dashboard']);
//});
//
//Route::group(['prefix'=>'employee','middleware' => 'usertype','employee'],function () {
//    Route::get('dashboard',['uses'=>'MuscleUpApp\GymController@index','as'=>'dashboard']);
//});


//Route::get('/admin', 'Auth\AdminController@index');
//Route::get('/home', 'HomeController@index');



Route::get('/', ['as' => 'home-page', 'uses' => 'MuscleUpApp\HomeController@index']);


//contactUs
Route::get('/home/contact', ['as' => 'home.store', 'uses' => 'MuscleUpApp\ContactController@store']);


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

//Route::get('login', ['uses'=>'MuscleUpApp\LoginController@index','as'=>'login']);
//Route::post('check-login', ['uses'=>'MuscleUpApp\LoginController@login','as'=>'check-login']);


Route::get('/gym', ['as'=>'gym', 'uses'=>'MuscleUpApp\GymController@index']);
Route::post('/gym/add', ['as'=>'add-gym', 'uses'=>'MuscleUpApp\GymController@add_gym']);

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


/***
 * Diet Plan
 */
Route::get('/diet/editform',['as'=>'diet','uses'=>'MuscleUpApp\DietProgramController@index']);
Route::get('/diet/list',['as'=>'show','uses'=>'MuscleUpApp\DietProgramController@showPlans']);
Route::post('/diet/add',['as'=>'add-diet','uses'=>'MuscleUpApp\DietProgramController@store']);
Route::get('/diet/edit/{id?}',['as'=>'edit-diet','uses'=>'MuscleUpApp\DietProgramController@edit']);
Route::post('/diet/update',['as'=>'update-diet','uses'=>'MuscleUpApp\DietProgramController@update']);
Route::get('/diet/delete/{id?}',['as'=>'delete-diet','uses'=>'MuscleUpApp\DietProgramController@delete']);


/**
 * Phase
 */
Route::get('/phase',['as'=>'phase','uses'=>'MuscleUpApp\PhaseController@create']);
Route::post('/phase/add',['as'=>'phase_store','uses'=>'MuscleUpApp\PhaseController@store']);
Route::get('/phase/list',['as'=>'show-phase','uses'=>'MuscleUpApp\PhaseController@show']);
Route::get('/phase/edit/{id?}',['as'=>'edit-phase','uses'=>'MuscleUpApp\PhaseController@edit']);
Route::post('/phase/update',['as'=>'update-phase','uses'=>'MuscleUpApp\PhaseController@update']);
Route::get('/phase/delete/{id?}',['as'=>'delete-phase','uses'=>'MuscleUpApp\PhaseController@destroy']);


/***
 * program
 */
Route::get('/program',['as'=>'program','uses'=>'MuscleUpApp\ProgramController@create']);
Route::post('/program/add',['as'=>'program_store','uses'=>'MuscleUpApp\ProgramController@store']);
Route::get('/program/list',['as'=>'show-program','uses'=>'MuscleUpApp\ProgramController@show']);
Route::get('/program/edit/{id?}',['as'=>'edit-program','uses'=>'MuscleUpApp\ProgramController@edit']);
Route::post('/program/update',['as'=>'update-program','uses'=>'MuscleUpApp\ProgramController@update']);
Route::get('/program/delete/{id?}',['as'=>'delete-program','uses'=>'MuscleUpApp\ProgramController@destroy']);



/*
 Exercise
 *  */
Route::get('/exercise',['as'=>'exercise','uses'=>'MuscleUpApp\ExerciseController@exercise_list']);




/****
 * Employee
 **/

Route::get('instructor/add',['as'=>'instructor-add','uses'=>'MuscleUpApp\EmployeeController@create']);
Route::post('instructor/store',['as'=>'instructor-store','uses'=>'MuscleUpApp\EmployeeController@store']);
Route::get('instructor/list',['as'=>'instructor-show','uses'=>'MuscleUpApp\EmployeeController@show']);
Route::get('instructor/edit/{id}',['as'=>'instructor-edit','uses'=>'MuscleUpApp\EmployeeController@edit']);
Route::post('instructor/update/{id}',['as'=>'instructor-update','uses'=>'MuscleUpApp\EmployeeController@update']);
Route::get('instructor/delete/{id}',['as'=>'instructor-delete','uses'=>'MuscleUpApp\EmployeeController@destroy']);




Route::get('/instructor/dashboard', ['as'=>'instructor-dashboard', 'uses'=> 'MuscleUpApp\EmployeeController@index' ]);
Route::get('profile', ['as'=>'profile', 'uses'=> 'MuscleUpApp\EmployeeController@profile' ]);
Route::get('profileshow/{id}', ['as'=>'profile', 'uses'=> 'MuscleUpApp\EmployeeController@profileshow' ]);
Route::get('/gym/panl', ['as'=>'gym-panl', 'uses'=> 'MuscleUpApp\EmployeeController@panl' ]);
Route::get('/gym/dashboard', ['as'=>'gym-dashboard', 'uses'=> 'MuscleUpApp\EmployeeController@dashboard' ]);
Route::get('/instructor/panal', ['as'=>'instructor-panal', 'uses'=> 'MuscleUpApp\EmployeeController@panal' ]);
Route::get('show-instructor/detail/{id}',['as'=>'instructor-detail','uses'=>'MuscleUpApp\EmployeeController@instructor_detail']);

//Workout
Route::get('/workout',['as'=>'workout-store','uses'=>'MuscleUpApp\WorkoutPlanController@workout']);
Route::get('/create/workout',['as'=>'create-workout','uses'=>'MuscleUpApp\WorkoutPlanController@create']);


//Exercise
Route::get('show-exercise',['as'=>'show-exercise','uses'=>'MuscleUpApp\ExerciseController@show']);
Route::get('update-exercise/{id}',['as'=>'update-exercise','uses'=>'MuscleUpApp\ExerciseController@edit']);
Route::post('update-exercise/{id}',['as'=>'update-exercise','uses'=>'MuscleUpApp\ExerciseController@update']);
Route::get('delete-exercise/{id}',['as'=>'delete-exercise','uses'=>'MuscleUpApp\ExerciseController@destroy']);

//Contact us
Route::get('contact', ['as'=>'contact', 'uses'=> 'MuscleUpApp\ContactController@contact' ]);
Route::post('contact/store',['as'=>'contact-store','uses'=>'MuscleUpApp\ContactController@store']);




Route::post('postcontact',['as'=>'postContact','uses'=>'MuscleUpApp\ContactController@postContact']);



//Day
//Route::get('day',['as'=>'day','uses'=>'MuscleUpApp\DayController@day']);
//Route::post('day/store',['as'=>'day-store','uses'=>'MuscleUpApp\DayController@store']);
//Route::get('/create/day',['as'=>'create-day','uses'=>'MuscleUpApp\DayController@create']);
//Route::get('show-day',['as'=>'show-day','uses'=>'MuscleUpApp\DayController@show']);
//Route::get('update-day/{id}',['as'=>'update-day','uses'=>'MuscleUpApp\DayController@edit']);
//Route::post('update-day/{id}',['as'=>'update-day','uses'=>'MuscleUpApp\DayController@update']);
//Route::get('delete-day/{id}',['as'=>'delete-day','uses'=>'MuscleUpApp\DayController@destroy']);

//BRANCH
Route::get('branch', ['as'=>'branch', 'uses'=> 'MuscleUpApp\BranchController@branch' ]);
Route::get('branch',['as'=>'branch','uses'=>'MuscleUpApp\BranchController@create']);
Route::post('branch/store', ['as' => 'branch-store', 'uses' => 'MuscleUpApp\BranchController@store']);
Route::get('show-branch',['as'=>'show-branch','uses'=>'MuscleUpApp\BranchController@show']);
Route::get('delete-branch/{id}',['as'=>'delete-branch','uses'=>'MuscleUpApp\BranchController@destroy']);
Route::get('update-branch/{id}',['as'=>'update-branch','uses'=>'MuscleUpApp\BranchController@edit']);
Route::post('update-branch/{id}',['as'=>'update-branch','uses'=>'MuscleUpApp\BranchController@update']);
Route::get('show-branch/detail/{id}',['as'=>'branch-detail','uses'=>'MuscleUpApp\BranchController@branch_detail']);




Route::get('show/trainee/list/{id}',['as'=>'show-trainee-list','uses'=>'MuscleUpuApp\TraineeListController@show']);


/***
 * WBS
 */
Route::get('/wbs/list',['uses'=>'MuscleUpApp\WbsController@index','as'=>'wbs-list']);
Route::get('/wbs/add',['uses'=>'MuscleUpApp\WbsController@create','as'=>'wbs-add']);
Route::post('/wbs/store',['uses'=>'MuscleUpApp\WbsController@store','as'=>'wbs-store']);
Route::get('/wbs/edit/{wbs}',['uses'=>'MuscleUpApp\WbsController@edit','as'=>'wbs-edit']);
Route::post('/wbs/update/',['uses'=>'MuscleUpApp\WbsController@update','as'=>'wbs-update']);
Route::get('/wbs/delete/{wbs}',['uses'=>'MuscleUpApp\WbsController@destroy','as'=>'wbs-delete']);
