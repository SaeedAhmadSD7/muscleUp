<?php

namespace App\Http\Controllers\MuscleUpApp;
use App\Models\User;
use App\Models\Trainee;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class TraineeController extends Controller
{
   public function view_profile(){
    return view('muscle-up-app\trainee\view-profile');
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
        dd($password);

        $trainee = new Trainee();
        $trainee->first_name=$request->first_name;
        $trainee->last_name=$request->last_name;
        $trainee->dial_code = '+27';
        $trainee->phone_number=$request->phone_number;
        $trainee->birth_date=$request->birth_date;
        $trainee->gender =$request->gender;
        $trainee->address=$request->address;
        $trainee->save();


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
