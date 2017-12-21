<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Http\Requests\PicUploadRequest;
use App\Models\HealthQuestion;
use App\Models\User;
use App\Models\Trainee;
use App\Models\Employee;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use App\Models\MedicalHistory;
use App\Mail\AddTraineeRequest;
use Illuminate\Support\Facades\Mail;
use App\Utils\AppUtil;

class TraineeController extends Controller
{
    public function view_profile()
    {
//     $trainee = Trainee::find(Auth::user->id)->first();
        $user = Auth::user();
        $trainee = $user->trainee;
//       $trainee_his = MedicalHistory::find($trainee->id);
        return view('muscle-up-app.trainee.view-profile')->with('trainee', $trainee);

    }

    public function upload_profile(Request $request)
    {
//       dd($request);

        // Handle the user upload of avatar
        if ($request->hasFile('avatar')) {
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            Image::make($avatar)->resize(300, 300)->save(public_path('/uploads/trainees/profile_imgs/' . $filename));

            $user = Auth::user();

            $trainee = $user->trainee;
//            dd($trainee);

            $trainee->profile_img = $filename;

            $trainee->save();
        }
        return redirect()->route('trainee-profile');
    }




//    public function medical()
//    {
//        return view('muscle-up-app.trainee.trainee-medical-history');
//    }
//
//
//    public  function  medial_history(Request $request) {
//
//          MedicalHistory::create($request->all());
//
//
//          Session::flash('success','Your profile was successfully updated');
//
//          return redirect()->route('trainee-profile');
//
//      }
//
//
//    public  function view_medical_history($id){
//
//        $medical_history = MedicalHistory::find($id);
//
//
//        return view('muscle-up-app.trainee.view-medical-history')->with('med_his',$medical_history);
//      }
//        public function edit_medical_history($id){
//          $medical_history= MedicalHistory::find($id);
//          return view('muscle-up-app.trainee.edit-medical-history')->with('med_his',$medical_history);
//    }
//    public function medical_history_update(Request $request,$id){
//        $medical_history= MedicalHistory::find($id);
//
//
//        $medical_history->update($request->toArray());
//        $medical_history->save();
//
//        return redirect()->route('trainee-view-medical',$medical_history->id);
//    }


    public function inbox()
    {
        $trainees = Trainee::with('user')->get();
        return view('muscle-up-app.gym.trainee.trainee-list')->with('trainees', $trainees);
    }


    public function trainee_detail($id)
    {
        $trainee = Trainee::find($id);
        $trainee->user;
        return view('muscle-up-app.gym.trainee.trainee-list-detail')->with(['trainee' => $trainee]);

    }

    public function index()
    {
        return view('muscle-up-app.trainee.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    /******
     * Trainee To Instructor Allocation
     *****/
    public function create_allocation()
    {
        $instructors = Employee::all();
        $instructors->load('user');
        $trainees = Trainee::whereNull('employee_id')->get();
        $trainees->load('user');
        return view('muscle-up-app.trainee_allocation.create-allocation', compact('instructors', 'trainees'));
    }

    public function store_allocation(Request $request)
    {
        $trainee = Trainee::find($request->trainee_id);

        for ($i = 0; $i < count($trainee); $i++) {
            $trainee[$i]->employee_id = $request->employee_id;
            $trainee[$i]->save();
        }

        Session::flash('Success', 'Congratulations Trainee have been added allocated. ');

        return redirect()->route('show-trainee-allocation');
    }


    public function show_allocation()
    {
        $trainees = Trainee::with('user', 'employee', 'employee.user')->whereNotNull('employee_id')->get();
        return view('muscle-up-app.trainee_allocation.show-allocation-list', compact('trainees'));

    }

    public function edit_allocation($id)
    {
        $trainee = Trainee::find($id);
        $trainee->load('user');
        $employees = Employee::all();
        $employees->load('user');
        return view('muscle-up-app.trainee_allocation.edit-allocation', compact('trainee', 'employees'));
    }

    public function update_allocation(Request $request, $id)
    {
        $trainee = Trainee::find($id);
        $trainee->employee_id = $request->input('employee_id');
        $trainee->save();

        return redirect()->route('show-trainee-allocation');
    }

    public function destroy_allocation($id)
    {
        $trainee = Trainee::find($id);
        $trainee->employee_id = NULL;
        $trainee->save();

        return redirect()->route('show-trainee-allocation');

    }

    public function create()
    {

        return view('muscle-up-app.trainee.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


        $user = new User($request->all());
        $password = str_random(8);
        $user->password = bcrypt($password);
        $user['type'] = 'trainee';
        $user->address = $request->address;
        $user->dial_code = '+27';
        $user->save();
        $trainee = new Trainee($request->all());
        $trainee['user_id'] = $user->id;
        $user->trainee()->save($trainee);


//        Mail::to($user->email)->send(new AddTraineeRequest($user->email,$password));
        session()->flash('success', 'Congratulations Trainee have been added succesfully. Credentials have been mailed to entered email.');


        return redirect()->route('trainee-list');
    }


    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $trainee = User::find($id);
//        $user = User::find($trainee->user_id);
        return view('muscle-up-app.trainee.trainee-personal-detail')->with(['trainee' => $trainee]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $trainee = User::find($id);
//        $user = User::find($trainee->user_id);

        return view('muscle-up-app.trainee.profile-detail-edit')->with(['trainee' => $trainee]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $trainee = User::find($id);
        $trainee->first_name = $request->input('first_name');
        $trainee->last_name = $request->input('last_name');
        $trainee->dial_code = '+27';
        $trainee->phone_number = $request->input('phone_number');
        $trainee->dob = $request->input('dob');
        $trainee->gender = $request->input('gender');
        $trainee->address = $request->input('address');
        $trainee->save();


        Session::flash('success', 'This Trainee was information successfully update.');


//        Redirect with flash data to post.show
        return redirect()->route('trainee-personal-detail', $trainee->id);
    }

    /***
     * Diet Program
     * @return \Illuminate\Http\Response
     */

    public function dietProgram()
    {
        $trainee = Trainee::where('user_id', Auth::user()->id)->first();

        if ($trainee->allocation) {
            $trainee->allocation->diet_program->meal;
            $trainee->allocation->diet_program->food;
            $dietProgram = 1;
        } else {
            $dietProgram = 0;
        }

        return view('muscle-up-app.trainee.dietProgram.dietProgram')->with(['trainee' => $trainee, 'dietProgram' => $dietProgram]);
    }

    public function workoutProgram()
    {

        $trainee = Trainee::where('user_id', Auth::user()->id)->first();

        if ($trainee->allocation) {

            $days = array();
            $phase_daycount = array();
            foreach ($trainee->allocation->program->phase as $phase) {
                $days[] = $phase->day()->get();
            }
            foreach ($days as $phase_day) {
                $phase_daycount[] = count($phase_day->unique()->toArray());
            }

        } else {
            $phase_daycount = 0;
        }

        return view('muscle-up-app.trainee.workoutProgram.workoutProgram')->with(['trainee' => $trainee, 'phase_daycount' => $phase_daycount]);
    }


    /***
     * Acitivity Markup
     * @return \Illuminate\Http\Response
     */
    public function activity()
    {
        $trainee = Trainee::where('user_id', Auth::user()->id)->first();


        if ($trainee->allocation) {

            $days = array();
            $phase_daycount = array();

            foreach ($trainee->allocation->program->phase as $phase) {
                $days[] = $phase->day()->get();

            }

            foreach ($days as $phase_day) {
                $phase_daycount[] = count($phase_day->unique()->toArray());
            }
            $trainee->allocation->program->phase;
            $trainee->allocation->diet_program->meal;
            $trainee->allocation->diet_program->food;
        } else {
            $phase_daycount = 0;
        }

        return view('muscle-up-app.trainee.activity.activity')->with(['trainee' => $trainee, 'phase_daycount' => $phase_daycount]);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $trainee = Trainee::find($id);
        $trainee->allocation()->delete();
        $trainee->user()->delete();
        $trainee->delete();
        return redirect()->route('trainee-list');
    }

    /**
     * uploadProfilePic | upload trainee profile pic
     * @param PicUploadRequest $request
     */
    public function uploadProfilePic(PicUploadRequest $request)
    {
        $fileData = $request->file('fileData', null);
        $destinationPath = AppUtil::getProfileUploadPath();
        $filename = str_random(4) . '_' . $fileData->getClientOriginalName();
        if (!file_exists($destinationPath)) {
            mkdir($destinationPath, 0777, true);
        }
        $uploadSuccess = $fileData->move($destinationPath, $filename);
        return response()->json(['uploaded_file_name' => $filename]);
    }

    public function removeUploadedProfilePic(Request $request)
    {
        $response['file_deleted'] = false;
        $response['message'] = "Deleting File process fails due to some internal technical issue.";
        $profile_img = $request->get('profile_img', null);

        //*** Null exception
        if ($profile_img == null) {
            $response['file_deleted'] = false;
            $response['message'] = "File can't be empty";
            return response()->json($response);
        }

        //*** Default File exception
        if ($profile_img === 'default.jpg') {
            $response['file_deleted'] = false;
            $response['message'] = "You can't delete default file";
            return response()->json($response);
        }

        $destinationPath = AppUtil::getProfileUploadPath();
        if (file_exists($destinationPath . $profile_img)) {
            $response['file_deleted'] = unlink($destinationPath . $profile_img);
            $response['message'] = "File has been deleted successfully";
        }
        return response()->json($response);
    }

    public function HealthStats($id)
    {
        $Trainee = Trainee::where(['user_id'=>$id])->first();
//        dd($Trainee->healthQuestion());
        $TraineeStats = $Trainee->healthQuestion();
//        dd($TraineeStats);
         if (count($TraineeStats)>0) {
             $HealthStats = HealthQuestion::where(['is_active' => 'Yes'])->get();
             $TraineeStats = $HealthStats;
        }
//        $layoutData['HealthStats'] = $HealthStats;
        $layoutData['TraineeStats'] = $TraineeStats;
        return view('muscle-up-app.trainee.healthStats.health-stats', $layoutData);

    }
}
