<?php
use \App\Http\Controllers\MuscleUpApp\GymController;

Auth::routes();

Route::get('/', ['as' => 'home-page', 'uses' => 'MuscleUpApp\HomeController@index']);
Route::get('/logout', ['uses'=>'\App\Http\Controllers\Auth\LoginController@logout','as'=>'logout']);

/***
 * Permission Denied
 */
Route::get('/denied', function (){return view('muscle-up-app.errors.permission-denied');})->name('denied');


/***
 * Join Request
 */
Route::get('gym/request/join', ['uses'=>'MuscleUpApp\GymController@joinRequest', 'as'=>'gym-request']);
Route::post('gym/request/save',['uses'=>'MuscleUpApp\GymController@requestSubmit', 'as'=> 'save-request']);



/***
 * Admin Routes
 */
Route::group(['prefix'=>'admin','middleware' => ['usertype:admin']],function () {

    /***
     * Dashboard
     */
    Route::get('dashboard',['uses'=>'MuscleUpApp\AdminController@index','as'=>'admin-dashboard']);

    /***
     * Requests
     */
    Route::get('inbox',['as'=>'Admin-Inbox','uses'=>'MuscleUpApp\AdminController@inbox']);
    Route::get('inbox/message/detail/{id}',['uses'=>'MuscleUpApp\AdminController@messageDetail','as'=>'message-detail']);
    Route::get('/request/process/{id}',['uses'=>'MuscleUpApp\AdminController@requestProcess', 'as'=> 'process-request']);
    Route::post('/add/gym',['uses'=>'MuscleUpApp\AdminController@addGym', 'as'=> 'add-gym']);
//    Route::get('gym/list',['as'=>'gym-list','uses'=>'MuscleUpApp\AdminController@gymList']);
//    Route::get('gym/list/delete/{id}',['as'=>'gym-list-delete','uses'=>'MuscleUpApp\AdminController@destroy']);

    Route::resource('company',"MuscleUpApp\GymController");

});




/***
 * Gym Routes
 */

Route::group(['prefix'=>'gym','middleware' => ['auth','usertype:gym']],function () {

    /***
     * Dashboard
     */
    Route::get('dashboard',['uses'=>'MuscleUpApp\GymController@dashboard','as'=>'gym-dashboard']);



    /***
     * Trainee
     */
    Route::get('trainee/add',['as'=>'trainee-add','uses'=>'MuscleUpApp\TraineeController@create']);
    Route::post('trainee/store/',['uses'=>'MuscleUpApp\TraineeController@store','as'=>'trainee-store']);
    Route::get('trainee/list',['as'=>'trainee-list','uses'=>'MuscleUpApp\TraineeController@inbox']);
    Route::get('trainee/list/detail/{id}',['as'=>'trainee-list-detail','uses'=>'MuscleUpApp\TraineeController@trainee_detail']);
    Route::get('trainee/list/delete/{id}',['as'=>'trainee-list-delete','uses'=>'MuscleUpApp\TraineeController@destroy']);



    /***
     * Employee
     */
    Route::get('instructor/add',['as'=>'instructor-add','uses'=>'MuscleUpApp\EmployeeController@create']);
    Route::post('instructor/store',['as'=>'instructor-store','uses'=>'MuscleUpApp\EmployeeController@store']);
    Route::get('instructor/list',['as'=>'instructor-show','uses'=>'MuscleUpApp\EmployeeController@show']);
    Route::get('instructor/edit/{id}',['as'=>'instructor-edit','uses'=>'MuscleUpApp\EmployeeController@edit']);
    Route::post('instructor/update/{id}',['as'=>'instructor-update','uses'=>'MuscleUpApp\EmployeeController@update']);
    Route::get('instructor/delete/{id}',['as'=>'instructor-delete','uses'=>'MuscleUpApp\EmployeeController@destroy']);


    /***
     * Employee/Instructor Allocation
     */
    Route::get('trainee/allocation',['as'=>'trainee-allocation','uses'=>'MuscleUpApp\TraineeController@create_allocation']);
    Route::post('trainee/allocation/store',['as'=>'trainee_allocation_store','uses'=>'MuscleUpApp\TraineeController@store_allocation']);
    Route::get('trainee/allocation/list',['as'=>'show-trainee-allocation','uses'=>'MuscleUpApp\TraineeController@show_allocation']);
    Route::get('trainee/allocation/edit/{id}',['as'=>'edit-trainee-allocation','uses'=>'MuscleUpApp\TraineeController@edit_allocation']);
    Route::post('trainee/allocation/update/{id}',['as'=>'update-trainee-allocation','uses'=>'MuscleUpApp\TraineeController@update_allocation']);
    Route::get('trainee/allocation/delete/{id}',['as'=>'delete-trainee-allocation','uses'=>'MuscleUpApp\TraineeController@destroy_allocation']);


    /*****
    Branch
     ***/
    Route::resource('branch',"MuscleUpApp\BranchController");

//    Route::get('/branch',['as'=>'branch','uses'=>'MuscleUpApp\GymController@create_branch']);
    Route::get('/branch/user',['as'=>'branch-user','uses'=>'MuscleUpApp\GymController@create_branch_user']);



});




/***
 * Employee Routes
 */
Route::group(['prefix'=>'employee','middleware' => ['auth','usertype:employee']],function () {

    /***
     * Dashboard
     */
    Route::get('dashboard',['uses'=>'MuscleUpApp\EmployeeController@index','as'=>'employee-dashboard']);



    /***
     * Diet Plan
     */
    Route::get('/diet/create',['as'=>'diet-create','uses'=>'MuscleUpApp\DietProgramController@create']);
    Route::post('/diet/add',['as'=>'add-diet','uses'=>'MuscleUpApp\DietProgramController@store']);
    Route::get('/diet/list',['as'=>'diet-list','uses'=>'MuscleUpApp\DietProgramController@index']);
    Route::get('/diet/edit/{id}',['as'=>'edit-diet','uses'=>'MuscleUpApp\DietProgramController@edit']);
    Route::post('/diet/update',['as'=>'update-diet','uses'=>'MuscleUpApp\DietProgramController@update']);
    Route::get('/diet/delete/{id}',['as'=>'delete-diet','uses'=>'MuscleUpApp\DietProgramController@delete']);



    /***
     * WBS
     */
    Route::get('/wbs/list',['uses'=>'MuscleUpApp\WbsController@index','as'=>'wbs-list']);
    Route::get('/wbs/add',['uses'=>'MuscleUpApp\WbsController@create','as'=>'wbs-add']);
    Route::post('/wbs/store',['uses'=>'MuscleUpApp\WbsController@store','as'=>'wbs-store']);
    Route::get('/wbs/edit/{wbs}',['uses'=>'MuscleUpApp\WbsController@edit','as'=>'wbs-edit']);
    Route::post('/wbs/update/',['uses'=>'MuscleUpApp\WbsController@update','as'=>'wbs-update']);
    Route::get('/wbs/delete/{wbs}',['uses'=>'MuscleUpApp\WbsController@destroy','as'=>'wbs-delete']);




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



    /****
    Allocation of workout program to trainee
     *
     */

    Route::get('allocation/',['as'=>'allocation','uses'=>'MuscleUpApp\AllocationController@create']);
    Route::post('allocation/store',['as'=>'allocation_store','uses'=>'MuscleUpApp\AllocationController@store']);
    Route::get('/allocation/list/',['as'=>'show-allocation','uses'=>'MuscleUpApp\AllocationController@show']);
    Route::get('/allocation/edit/{id}',['as'=>'edit-allocation','uses'=>'MuscleUpApp\AllocationController@edit']);
    Route::post('/allocation/update/{id}',['as'=>'update-allocation','uses'=>'MuscleUpApp\AllocationController@update']);
    Route::get('/allocation/delete/{id}',['as'=>'delete-allocation','uses'=>'MuscleUpApp\AllocationController@destroy']);


});




/***
 * Trainee Routes
 */
Route::group(['prefix'=>'trainee','middleware' => ['auth','usertype:trainee']],function () {

    /***
     * Dashboard
     */
    Route::get('dashboard',['uses'=>'MuscleUpApp\TraineeController@index','as'=>'trainee-dashboard']);



    /***
     * Medical History
     */
    Route::get('trainee/medical',['as'=>'trainee-medical','uses'=>'MuscleUpApp\TraineeController@medical']);
    Route::post('trainee/medical/save',['as'=>'save-medical','uses'=>'MuscleUpApp\TraineeController@medial_history']);
    Route::get('trainee/view/medical/{id}',['as'=>'trainee-view-medical','uses'=>'MuscleUpApp\TraineeController@view_medical_history']);
    Route::get('trainee/medical/edit/{id}',['as'=>'edit-trainee-medical','uses'=>'MuscleUpApp\TraineeController@edit_medical_history']);
    Route::post('trainee/medical/update/{id}',['as'=>'trainee-medical-update','uses'=>'MuscleUpApp\TraineeController@medical_history_update']);


    /***
     * Diet Program View
     */
    Route::get('dietProgram',['as'=>'dietprogram-view','uses'=>'MuscleUpApp\TraineeController@dietProgram']);


    /***
     * Workout Program View
     */
    Route::get('workoutProgram',['as'=>'workoutprogram-view','uses'=>'MuscleUpApp\TraineeController@workoutProgram']);



    /***
     * Progress
     */
    Route::get('activity',['uses'=>'MuscleUpApp\TraineeController@activity','as'=>'trainee-activity']);




    /***
     * Ajax Requests
     */
    Route::get('activity/phase/{phase}','MuscleUpApp\PhaseController@getPhaseDetails');
    Route::get('activity/phase/{phase}/day/{day}','MuscleUpApp\PhaseController@getDayDetails');
    Route::get('activity/phase/{phase}/day/{day}/wbs/{wbs}','MuscleUpApp\PhaseController@getWbsDetails');
    Route::get('activity/dietProgram/{dietProgram}/meal/{meal}','MuscleUpApp\DietProgramController@foodList');


});


















//contactUs
Route::get('/home/contact', ['as' => 'home.store', 'uses' => 'MuscleUpApp\ContactController@store']);






/***
Trainee
 ****/


Route::get('trainee/profile/',['as'=>'trainee-profile','uses'=>'MuscleUpApp\TraineeController@view_profile']);
Route::get('/trainee/personal/detail/{id}',['as'=>'trainee-personal-detail','uses'=>'MuscleUpApp\TraineeController@show']);
Route::get('/trainee/personal/detail/edit/{id}',['as'=>'trainee-personal-detail-edit','uses'=>'MuscleUpApp\TraineeController@edit']);
Route::post('/trainee/personal/detail/update/{id}',['as'=>'trainee-detail-update','uses'=>'MuscleUpApp\TraineeController@update']);

Route::post('trainee/profile/image',['as'=>'trainee-image','uses'=>'MuscleUpApp\TraineeController@upload_profile']);



//Contact us
Route::get('contact', ['as'=>'contact', 'uses'=> 'MuscleUpApp\ContactController@contact' ]);
Route::post('contact/store',['as'=>'contact-store','uses'=>'MuscleUpApp\ContactController@store']);
Route::post('postcontact',['as'=>'postContact','uses'=>'MuscleUpApp\ContactController@postContact']);




//Route::get('/admin', 'Auth\AdminController@index');
//Route::get('/home', 'HomeController@index');



///***
// * Branch
// */
//Route::get('branch', ['as'=>'branch', 'uses'=> 'MuscleUpApp\BranchController@branch' ]);
//Route::get('branch',['as'=>'branch','uses'=>'MuscleUpApp\BranchController@create']);
//Route::post('branch/store', ['as' => 'branch-store', 'uses' => 'MuscleUpApp\BranchController@store']);
//Route::get('show-branch',['as'=>'show-branch','uses'=>'MuscleUpApp\BranchController@show']);
//Route::get('delete-branch/{id}',['as'=>'delete-branch','uses'=>'MuscleUpApp\BranchController@destroy']);
//Route::get('update-branch/{id}',['as'=>'update-branch','uses'=>'MuscleUpApp\BranchController@edit']);
//Route::post('update-branch/{id}',['as'=>'update-branch','uses'=>'MuscleUpApp\BranchController@update']);
//Route::get('show-branch/detail/{id}',['as'=>'branch-detail','uses'=>'MuscleUpApp\BranchController@branch_detail']);


//Route::get('dashboard',['uses'=>'MuscleUpApp\GymController@index','as'=>'dashboard']);
//
//Route::get('/trainee/dashboard', ['as'=>'trainee-dashboard', 'uses'=> 'MuscleUpApp\TraineeController@index' ]);
//
//Route::get('/instructor/dashboard', ['as'=>'instructor-dashboard', 'uses'=> 'MuscleUpApp\EmployeeController@index' ]);
