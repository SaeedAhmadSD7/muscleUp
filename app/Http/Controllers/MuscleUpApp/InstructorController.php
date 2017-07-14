<?php

namespace App\Http\Controllers\MuscleUpApp;
use App\Models\Instructor;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\User;
class InstructorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function add()
    {
        return view('muscle-up-app.instructor.add-instructor');

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('muscle-up-app.instructor.add-instructor');

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
        $password = str_random(9);
        $user->password = bcrypt($password);
        $user['user-type'] = 'Instructor';
        $user->save();
//        dd($request);

        $instructor = new Instructor();
        $instructor->first_name=$request->first_name;
        $instructor->last_name=$request->last_name;
        $instructor->dial_code = '+45';
        $instructor->phone_number=$request->phone_number;
        $instructor->experience=$request->experience;
        $instructor->birth_date=$request->birth_date;
//        $instructor->gender =$request->gender;
        $instructor->address=$request->address;
        $instructor->email=$request->email;

        dd($password);

        $instructor->save();

        return redirect()->route('home-page');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
         $instructor=Instructor::all();
        return view('muscle-up-app.instructor.show')->with('Instructor',$instructor);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
//        $instructor=instructor::find($id);
//        return view('muscle-up-app.instructor.update')->with('instructor',$instructor);
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
//        $instructor = Instructor::find($id);
//        $instructor->first_name=$request->first_name;
//        $instructor->last_name=$request->last_name;
//        $instructor->dial_code = '+45';
//        $instructor->phone_number=$request->phone_number;
//        $instructor->experience=$request->experience;
//        $instructor->birth_date=$request->birth_date;
////        $instructor->gender =$request->gender;
//        $instructor->email = $request->email;
//        $instructor->address=$request->address;
//
//
//        $instructor->save();
//        return redirect()->route('home-page');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
//        $instructor=Instructor::find($id);
//        $instructor->delete();
////        dd($service);
//        return redirect()->route('home-page');
    }
}
