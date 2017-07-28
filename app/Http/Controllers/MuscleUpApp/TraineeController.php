<?php

namespace App\Http\Controllers\MuscleUpApp;
use App\Models\User;
use App\Models\Trainee;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use App\Models\MedicalHistory;
use App\Mail\AddTraineeRequest;
use Illuminate\Support\Facades\Mail;

class TraineeController extends Controller
{
   public function view_profile(){
//     $trainee = Trainee::find(Auth::user->id)->first();
       $user = Auth::user();
       $trainee = $user->trainee;
//       $trainee_his = MedicalHistory::find($trainee->id);
       return view('muscle-up-app.trainee.view-profile')->with('trainee',$trainee);

   }
    public function upload_profile(Request $request){
//       dd($request);

        // Handle the user upload of avatar
        if($request->hasFile('avatar')){
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            Image::make($avatar)->resize(300, 300)->save( public_path('/uploads/trainees/profile_imgs/' . $filename ) );

            $user = Auth::user();

            $trainee= $user->trainee;
//            dd($trainee);

            $trainee->profile_img = $filename;

            $trainee->save();
            }
        return redirect()->route('trainee-profile');
        }




    public function medical()
    {
//        dd($userid= Auth::user()->id);
//        $trainee = Trainee::find($userid);
        return view('muscle-up-app.trainee.trainee-medical-history');
    }


    public  function  medial_history(Request $request) {

          MedicalHistory::create($request->all());


          Session::flash('success','Your profile was successfully updated');

          return redirect()->route('trainee-profile');

      }


    public  function view_medical_history($id){

        $medical_history = MedicalHistory::find($id);


        return view('muscle-up-app.trainee.view-medical-history')->with('med_his',$medical_history);
      }
        public function edit_medical_history($id){
          $medical_history= MedicalHistory::find($id);
          return view('muscle-up-app.trainee.edit-medical-history')->with('med_his',$medical_history);
    }
    public function medical_history_update(Request $request,$id){
        $medical_history= MedicalHistory::find($id);


        $medical_history->update($request->toArray());
        $medical_history->save();

        return redirect()->route('trainee-view-medical',$medical_history->id);
    }


    public function inbox(){
          $trainee = Trainee ::all();
          return view('muscle-up-app.trainee.trainee-list')->with('trainee', $trainee);
      }


    public function trainee_detail($id){
          $trainee= Trainee::find($id);
          $user = User::find($trainee->user_id);
          return view('muscle-up-app.trainee.trainee-list-detail')->with(['trainee'=>$trainee,'email'=>$user->email]);

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

//    public function create_trainee()
//    {
//        return view('muscle-up-app.trainee.add-trainee');
//
//    }
    public function create()
    {

        return view('muscle-up-app.trainee.trainee-add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User();
        $user->email = $request->email;
        $password = str_random(8);
        $user->password = bcrypt($password);
        $user['user-type'] = 'trainee';
        $user->save();



        $trainee = new Trainee();
        $trainee->user_id = $user->id;
        $trainee->first_name=$request->first_name;
        $trainee->last_name=$request->last_name;
        $trainee->dial_code = '+27';
        $trainee->phone_number=$request->phone_number;
        $trainee->birth_date=$request->birth_date;
        $trainee->gender =$request->gender;
        $trainee->address=$request->address;
        $trainee->save();

        Mail::to($user->email)->send(new AddTraineeRequest($user->email,$password));
        Session::flash('success','Congratulations Trainee have been added succesfully. Credentials have been mailed to entered email.');


        return redirect()->route('gym');
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $trainee= Trainee::find($id);
        $user = User::find($trainee->user_id);

        return view('muscle-up-app.trainee.trainee-personal-detail')->with(['trainee'=>$trainee,'email'=>$user->email]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $trainee= Trainee::find($id);
        $user = User::find($trainee->user_id);

        return view('muscle-up-app.trainee.profile-detail-edit')->with(['trainee'=>$trainee,'email'=>$user->email]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

//        $user =User::find($id);
//        $user->email = $request->input('email');
//        $user->save();

        $trainee =Trainee::find($id);
        $trainee->first_name=$request->input('first_name');
        $trainee->last_name=$request->input('last_name');
        $trainee->dial_code = '+27';
        $trainee->phone_number=$request->input('phone_number');
        $trainee->birth_date=$request->input('birth_date');
        $trainee->gender =$request->input('gender');
        $trainee->address=$request->input('address');
        $trainee->save();



        Session::flash('success','This Trainee was successfully saved.');


//        Redirect with flash data to post.show
        return redirect()->route('trainee-personal-detail',$trainee->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $trainee = Trainee::find($id);
        $trainee->delete();

        return redirect()->route('trainee-list');
    }
}
