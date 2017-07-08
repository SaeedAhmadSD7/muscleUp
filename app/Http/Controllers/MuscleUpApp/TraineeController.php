<?php

namespace App\Http\Controllers\MuscleUpApp;
use App\Models\User;
use App\Models\Trainee;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use App\Models\MedicalHistory;

class TraineeController extends Controller
{
   public function view_profile(){
//     $trainee = Trainee::find(Auth::user->id)->first();
       $user = Auth::user();
//       dd($user);
       $trainee = $user->trainee;
    return view('muscle-up-app\trainee\view-profile', compact('trainee'));
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




      public  function  medial_history(Request $request){

          MedicalHistory::create($request->all());

          return redirect()->route('home-page');

      }

        public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('muscle-up-app.trainee.add-trainee');
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
        $trainee->first_name=$request->first_name;
        $trainee->last_name=$request->last_name;
        $trainee->dial_code = '+27';
        $trainee->phone_number=$request->phone_number;
        $trainee->birth_date=$request->birth_date;
        $trainee->gender =$request->gender;
        $trainee->address=$request->address;
        $trainee->save();

        dd($password);

        return redirect()->route('/');
    }

    public function medical()
    {
        return view('muscle-up-app.trainee.medical-history');
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
