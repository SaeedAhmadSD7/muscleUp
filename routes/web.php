<?php

use \App\Http\Controllers\GymController;
use \App\Utils\Globals\UserType;

Auth::routes();

//***LoginController
Route::get('/logout', ['uses' => '\App\Http\Controllers\Auth\LoginController@logout', 'as' => 'logout']);

Route::group(['Public', 'namespace' => 'MuscleUpApp'], function () {

    //***Public Resources Like Images, Js, Fonts
    Route::group(['PublicResources'], function () {
        /**
         * Images Route
         */
        Route::get('/resources/app/images/{filename}', function ($filename) {
            $path = resource_path('/assets/common/images/' . $filename);
            if (!File::exists($path)) {
                return response()->json(['message' => 'Image not found.'], 404);
            }
            $file = File::get($path);
            $type = File::mimeType($path);
            $response = Response::make($file, 200);
            $response->header("Content-Type", $type);
            return $response;
        });

        /**
         * Images Route
         */
        Route::get('/resources/app/images/{uploadType}/{filename}', function ($uploadType,$filename) {
            $path = resource_path('/assets/uploads/'. $uploadType .'/'. $filename);
            if (!File::exists($path)) {
                return response()->json(['message' => 'Image not found.'], 404);
            }
            $file = File::get($path);
            $type = File::mimeType($path);
            $response = Response::make($file, 200);
            $response->header("Content-Type", $type);
            return $response;
        });

        /**
         * Some Js Files
         */
        Route::get('/resources/app/js/{filename}', function ($filename) {

            //only js files allow
            switch ($filename) {
                case 'html5-shiv.js';
                case 'respond-1.4.2.js';
                    break;
                default :
                    return response()->json(['message' => 'JS File not found.'], 404);
            }


            $path = resource_path('/assets/js/' . $filename);
            if (!File::exists($path)) {
                return response()->json(['message' => 'JS File not found.'], 404);
            }
            $file = File::get($path);

//        $type = File::mimeType($path);
            $type = "application/javascript";
            $response = Response::make($file, 200);
            $response->header("Content-Type", $type);
            return $response;
        });


        /**
         * Some Js Files For Specific Pages Views
         */
        Route::get('/resources/app/pages/js/{filename}', function ($filename) {

            $path = resource_path('/assets/common/js/pages/' . $filename);
            if (!File::exists($path)) {
                return response()->json(['message' => 'JS File not found.'], 404);
            }
            $file = File::get($path);
            $type = "application/javascript";
            $response = Response::make($file, 200);
            $response->header("Content-Type", $type);
            return $response;
        });

        /**
         * Font Files For Backend
         */
        Route::get('/resources/app/fonts/{filename}', function ($filename) {
//    Route::get('/common/fonts/{filename}', function ($filename) {

            $path = resource_path('/assets/common/fonts/' . $filename);
            if (!File::exists($path)) {
                return response()->json(['message' => 'Font File not found.'], 404);
            }
            $file = File::get($path);
            $response = Response::make($file, 200);
            $type = File::mimeType($path);
//        dd($type);
            switch (strtolower($type)) {
                case 'text/plain':
                    $ext = File::extension($path);
                    switch (strtolower($ext)) {
                        case 'svg':
                            $type = "image/svg+xml";
                            break;
                    }
                    break;
            }
            $response->header("Content-Type", $type);
            return $response;
        });
    });

    Route::get('zz', ['as' => 'ta', 'uses' => 'TraineeController@create_allocation']);


    //***HomeController
    Route::group(['Home'], function () {
        Route::get('/', ['as' => 'home-page', 'uses' => 'HomeController@index']);
    });

    //***GymController
    Route::group(['Gym'], function () {
        Route::get('gym/request/join', ['uses' => 'GymController@joinRequest', 'as' => 'gym-request']);
        Route::post('gym/request/save', ['uses' => 'GymController@requestSubmit', 'as' => 'save-request']);
    });


    //***ContactController
    Route::group(['ContactUs'], function () {
        Route::get('contact', ['as' => 'contact', 'uses' => 'ContactController@contact']);
        Route::post('contact/store', ['as' => 'contact-store', 'uses' => 'ContactController@store']);
        Route::post('postcontact', ['as' => 'postContact', 'uses' => 'ContactController@postContact']);
        Route::get('/home/contact', ['as' => 'home.store', 'uses' => 'ContactController@store']);
    });

    //***Permission Denied
    Route::get('/denied', function () {
        return view('muscle-up-app.errors.permission-denied');
    })->name('denied');

});


Route::group(['Private', 'namespace' => 'MuscleUpApp', 'middleware' => 'auth'], function () {

    //***UserType = All authenticated Users

    Route::resource('user', "UserController");


    //***UserType = SuperAdmin = admin
    Route::group(['UserTypeAsTrainee', 'middleware' => 'userType:' . UserType::SUPER_ADMIN], function () {

        //***AdminController
        Route::group(['Admin'], function () {
            Route::get('admin-dashboard', ['uses' => 'AdminController@index', 'as' => 'adminDashboard']);
            Route::get('inbox', ['as' => 'Admin-Inbox', 'uses' => 'AdminController@inbox']);
            Route::get('inbox/message/detail/{id}', ['uses' => 'AdminController@messageDetail', 'as' => 'message-detail']);
            Route::get('request/process/{id}', ['uses' => 'AdminController@requestProcess', 'as' => 'process-request']);
            Route::post('add/gym', ['uses' => 'AdminController@addGym', 'as' => 'add-gym']);
            Route::get('gym/list', ['as' => 'gym-list', 'uses' => 'AdminController@gymList']);
            Route::get('gym/list/delete/{id}', ['as' => 'gym-list-delete', 'uses' => 'AdminController@destroy']);

        });

        //***GymController
        Route::group(['Gym'], function () {
            Route::resource('gym', "GymController");
        });
    });

    //***UserType = Admin = gym
    Route::group(['UserTypeAsGym', 'middleware' => 'userType:' . UserType::ADMIN], function () {

        //***GymController
        Route::group(['Gym'], function () {
            Route::get('gyms/list', ['uses' => 'GymController@index', 'as' => 'gymIndex']);
            Route::get('gym-dashboard', ['uses' => 'GymController@dashboard', 'as' => 'gymDashboard']);
            Route::get('instructor/allocation/{id}', ['as' => 'instructor-allocation', 'uses' => 'EmployeeController@allocation']);
        });

        //***EmployeeController
        Route::group(['Employee'], function () {
            Route::get('instructor/add', ['as' => 'instructor-add', 'uses' => 'EmployeeController@create']);
            Route::post('instructor/store', ['as' => 'instructor-store', 'uses' => 'EmployeeController@store']);
            Route::get('instructor/list', ['as' => 'instructor-show', 'uses' => 'EmployeeController@show']);
            Route::get('/ajax/instructor/list', ['as' => 'ajax-instructor-list', 'uses' => 'EmployeeController@ajaxshow']);
            Route::get('instructor/edit/{id}', ['as' => 'instructor-edit', 'uses' => 'EmployeeController@edit']);
            Route::post('instructor/update/{id}', ['as' => 'instructor-update', 'uses' => 'EmployeeController@update']);
            Route::post('instructor/allocate/{id}', ['as' => 'instructor-allocate', 'uses' => 'EmployeeController@allocate']);
            Route::post('instructor/delete-allocate/{id}', ['as' => 'instructor-delete-allocate', 'uses' => 'EmployeeController@allocateDelete']);
//            Route::post('instructor/allocation/{id}', ['as' => 'instructor-allocation', 'uses' => 'EmployeeController@allocation']);
            Route::get('instructor/delete/{id}', ['as' => 'instructor-delete', 'uses' => 'EmployeeController@destroy']);

        });

        //***BranchController
        Route::group(['Branch'], function () {
            Route::resource('branch', "BranchController");
        });

        //***TraineeController
        Route::group(['Trainee'], function () {
            Route::resource('trainee', "TraineeController");
            Route::get('trainee/create', ['as' => 'trainee-create', 'uses' => 'TraineeController@create']);
            Route::post('trainee/upload-profile-pic', ['as' => 'uploadProfilePic', 'uses' => 'TraineeController@uploadProfilePic']);
            Route::post('trainee/remove-uploaded-profile-pic', ['as' => 'removeUploadedProfilePic', 'uses' => 'TraineeController@removeUploadedProfilePic']);
            Route::post('trainee/store', ['uses' => 'TraineeController@store', 'as' => 'trainee-store']);
            Route::get('trainee/list/{id?}', ['as' => 'trainee-list', 'uses' => 'TraineeController@traineesList']);
            Route::get('/ajax/trainee/list', ['as' => 'ajax-trainee-list', 'uses' => 'TraineeController@ajaxtraineesList']);
            Route::get('trainee/detail/{id}', ['as' => 'trainee-list-detail', 'uses' => 'TraineeController@trainee_detail']);
            Route::get('trainee/list/delete/{id}', ['as' => 'trainee-list-delete', 'uses' => 'TraineeController@destroy']);
            Route::get('trainee/allocation', ['as' => 'trainee-allocation', 'uses' => 'TraineeController@create_allocation']);
            Route::post('trainee/allocation/store', ['as' => 'trainee_allocation_store', 'uses' => 'TraineeController@store_allocation']);
            Route::get('trainee/allocation/list', ['as' => 'show-trainee-allocation', 'uses' => 'TraineeController@show_allocation']);
            Route::get('trainee/allocation/edit/{id}', ['as' => 'edit-trainee-allocation', 'uses' => 'TraineeController@edit_allocation']);
            Route::post('trainee/allocation/update/{id}', ['as' => 'update-trainee-allocation', 'uses' => 'TraineeController@update_allocation']);
            Route::get('trainee/allocation/delete/{id}', ['as' => 'delete-trainee-allocation', 'uses' => 'TraineeController@destroy_allocation']);
            Route::get('trainee/health_stats/{id}', ['as' => 'health_stats', 'uses' => 'TraineeController@HealthStats']);
            Route::post('trainee/health_stats_save', ['as' => 'health_stats_save', 'uses' => 'TraineeController@HealthStatsSave']);

        });
    });

    //***UserType = Instructor = instructor
    Route::group(['UserTypeAsInstructor', 'middleware' => 'userType:' . UserType::INSTRUCTOR], function () {
        Route::group(['Instructor'], function () {
            Route::get('Instructor-dashboard', ['uses' => 'EmployeeController@index', 'as' => 'InstructorDashboard']);
        });

        Route::group(['Trainee'], function () {

            Route::get('assign-trainee/list{id?}', ['as' => 'Instructor-trainee-list', 'uses' => 'TraineeController@traineesList']);
            Route::resource('trainee', "TraineeController");
//            Route::get('trainee/detail/{id}', ['as' => 'trainee-list-detail', 'uses' => 'TraineeController@trainee_detail']);
//            Route::get('trainee/list/delete/{id}', ['as' => 'trainee-list-delete', 'uses' => 'TraineeController@destroy']);
//
//            Route::get('trainee/allocation', ['as' => 'trainee-allocation', 'uses' => 'TraineeController@create_allocation']);
//            Route::post('trainee/allocation/store', ['as' => 'trainee_allocation_store', 'uses' => 'TraineeController@store_allocation']);
//            Route::get('trainee/allocation/list', ['as' => 'show-trainee-allocation', 'uses' => 'TraineeController@show_allocation']);
//            Route::get('trainee/allocation/edit/{id}', ['as' => 'edit-trainee-allocation', 'uses' => 'TraineeController@edit_allocation']);
//            Route::post('trainee/allocation/update/{id}', ['as' => 'update-trainee-allocation', 'uses' => 'TraineeController@update_allocation']);
//            Route::get('trainee/allocation/delete/{id}', ['as' => 'delete-trainee-allocation', 'uses' => 'TraineeController@destroy_allocation']);
//            Route::get('trainee/health_stats/{id}', ['as' => 'health_stats', 'uses' => 'TraineeController@HealthStats']);
//            Route::post('trainee/health_stats_save', ['as' => 'health_stats_save', 'uses' => 'TraineeController@HealthStatsSave']);

        });

    });
        //***UserType = Employee = employee
    Route::group(['UserTypeAsEmployee', 'middleware' => 'userType:' . UserType::INSTRUCTOR], function () {

        //***EmployeeController
        Route::group(['Employee'], function () {
            Route::get('employee-dashboard', ['uses' => 'EmployeeController@index', 'as' => 'employeeDashboard']);
        });

        Route::group(['Trainee'], function () {
            Route::get('/ajax/trainee/list', ['as' => 'ajax-trainee-list', 'uses' => 'TraineeController@ajaxtraineesList']);
            Route::get('trainee/list/{id?}', ['as' => 'trainee-list', 'uses' => 'TraineeController@traineesList']);


        });
        //***DietProgramController
        Route::group(['DietProgram'], function () {
            Route::get('/diet/create', ['as' => 'diet-create', 'uses' => 'DietProgramController@create']);
            Route::post('/diet/add', ['as' => 'add-diet', 'uses' => 'DietProgramController@store']);
            Route::get('/diet/list', ['as' => 'diet-list', 'uses' => 'DietProgramController@index']);
            Route::get('/diet/list/detail/{id}', ['as' => 'diet_list_detail', 'uses' => 'DietProgramController@diet_detail']);
            Route::get('/diet/edit/{id}', ['as' => 'edit-diet', 'uses' => 'DietProgramController@edit']);
            Route::post('/diet/update', ['as' => 'update-diet', 'uses' => 'DietProgramController@update']);
            Route::get('/diet/delete/{id}', ['as' => 'delete-diet', 'uses' => 'DietProgramController@delete']);
        });

        //***WbsController
        Route::group(['WBS'], function () {
            Route::get('/wbs/list', ['uses' => 'WbsController@index', 'as' => 'wbs-list']);
            Route::get('/wbs/add', ['uses' => 'WbsController@create', 'as' => 'wbs-add']);
            Route::post('/wbs/details', ['uses' => 'WbsController@addDetails', 'as' => 'wbs-addDetails']);
            Route::post('/wbs/store', ['uses' => 'WbsController@store', 'as' => 'wbs-store']);
            Route::get('/wbs/edit/{wbs}', ['uses' => 'WbsController@edit', 'as' => 'wbs-edit']);
            Route::post('/wbs/update/', ['uses' => 'WbsController@update', 'as' => 'wbs-update']);
            Route::get('/wbs/delete/{wbs}', ['uses' => 'WbsController@destroy', 'as' => 'wbs-delete']);
            Route::post('/wbs/delete/details', ['uses' => 'WbsController@deleteDetails', 'as' => 'wbs-detailsDelete']);

        });

        //***PhaseController
        Route::group(['Phase'], function () {
            Route::get('phase/create', ['as' => 'phase', 'uses' => 'PhaseController@create']);
            Route::post('phase/store', ['as' => 'phase_store', 'uses' => 'PhaseController@store']);
            Route::get('phase/list', ['as' => 'show-phase', 'uses' => 'PhaseController@show']);
            Route::get('phase/edit/{id?}', ['as' => 'edit-phase', 'uses' => 'PhaseController@edit']);
            Route::post('phase/addDetails', ['as' => 'addDetails-phase', 'uses' => 'PhaseController@addDetails']);
            Route::post('phase/update', ['as' => 'update-phase', 'uses' => 'PhaseController@update']);
            Route::get('phase/delete/{id?}', ['as' => 'delete-phase', 'uses' => 'PhaseController@destroy']);
            Route::post('/phase/delete/details', ['uses' => 'PhaseController@deleteDetails', 'as' => 'phase-detailsDelete']);

        });

        //***ProgramController
        Route::group(['Program'], function () {
            Route::get('/program', ['as' => 'program', 'uses' => 'ProgramController@create']);
            Route::post('/program/add', ['as' => 'program_store', 'uses' => 'ProgramController@store']);
            Route::get('/program/list', ['as' => 'show-program', 'uses' => 'ProgramController@show']);
            Route::get('/program/edit/{id?}', ['as' => 'edit-program', 'uses' => 'ProgramController@edit']);
            Route::post('/program/update', ['as' => 'update-program', 'uses' => 'ProgramController@update']);
            Route::get('/program/delete/{id?}', ['as' => 'delete-program', 'uses' => 'ProgramController@destroy']);
        });

        //***DietAllocationController
        Route::group(['DietAllocation'], function () {
            Route::get('diet-allocation/', ['as' => 'diet-allocation', 'uses' => 'DietAllocationController@create']);
            Route::post('diet-allocation/store', ['as' => 'diet_allocation_store', 'uses' => 'DietAllocationController@store']);
            Route::get('/diet-allocation/list/', ['as' => 'show-diet-allocation', 'uses' => 'DietAllocationController@show']);
            Route::get('/diet-allocation/edit/{id}', ['as' => 'edit-diet-allocation', 'uses' => 'DietAllocationController@edit']);
            Route::post('/diet-allocation/update/{id}', ['as' => 'update-diet-allocation', 'uses' => 'DietAllocationController@update']);
            Route::get('/diet-allocation/delete/{id}', ['as' => 'delete-diet-allocation', 'uses' => 'DietAllocationController@destroy']);
        });

    });

    //***UserType = Trainee = trainee
    Route::group(['UserTypeAsTrainee', 'middleware' => 'userType:' . UserType::TRAINEE], function () {

        //***TraineeController
        Route::group(['Trainee'], function () {

            Route::get('trainee-dashboard', ['uses' => 'TraineeController@index', 'as' => 'traineeDashboard']);
            Route::get('trainee/profile/', ['as' => 'trainee-profile', 'uses' => 'TraineeController@view_profile']);
            Route::get('/trainee/personal/detail/{id}', ['as' => 'trainee-personal-detail', 'uses' => 'TraineeController@show']);
            Route::get('/trainee/personal/detail/edit/{id}', ['as' => 'trainee-personal-detail-edit', 'uses' => 'TraineeController@edit']);
            Route::post('/trainee/personal/detail/update/{id}', ['as' => 'trainee-detail-update', 'uses' => 'TraineeController@update']);
            Route::post('trainee/profile/image', ['as' => 'trainee-image', 'uses' => 'TraineeController@upload_profile']);

            Route::get('trainee/medical', ['as' => 'trainee-medical', 'uses' => 'TraineeController@medical']);
            Route::post('trainee/medical/save', ['as' => 'save-medical', 'uses' => 'TraineeController@medial_history']);
            Route::get('trainee/view/medical/{id}', ['as' => 'trainee-view-medical', 'uses' => 'TraineeController@view_medical_history']);
            Route::get('trainee/medical/edit/{id}', ['as' => 'edit-trainee-medical', 'uses' => 'TraineeController@edit_medical_history']);
            Route::post('trainee/medical/update/{id}', ['as' => 'trainee-medical-update', 'uses' => 'TraineeController@medical_history_update']);

            Route::get('dietProgram', ['as' => 'dietprogram-view', 'uses' => 'TraineeController@dietProgram']);

            Route::get('workoutProgram', ['as' => 'workoutprogram-view', 'uses' => 'TraineeController@workoutProgram']);
            Route::get('activity', ['uses' => 'TraineeController@activity', 'as' => 'trainee-activity']);

            Route::get('activity/phase/{phase}', 'PhaseController@getPhaseDetails');
            Route::get('activity/phase/{phase}/day/{day}', 'PhaseController@getDayDetails');
            Route::get('activity/phase/{phase}/day/{day}/wbs/{wbs}', 'PhaseController@getWbsDetails');
            Route::get('activity/dietProgram/{dietProgram}/meal/{meal}', 'DietProgramController@foodList');

        });
    });


});