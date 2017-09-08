<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\Employee;
use App\Models\Instructor;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Mail\AddInstructorRequest;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Mail;

class EmployeeController extends Controller

{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function instructor_detail($id)
    {

        $instructorDetail= Instructor::find($id);
        return view('muscle-up-app.instructor.instructor-detail',compact('instructorDetail'));

    }
    public function profile()
    {
        return view('muscle-up-app.instructor.instructor-profile');

    }

    public function panl()
    {
        return view('muscle-up-app.instructor.gym-panl');

    }
    public function dashboard()
    {
        return view('muscle-up-app.instructor.gym-dashboard');

    }
    public function panal()
    {
        return view('muscle-up-app.instructor.instructor-panal');

    }
    public function index()
    {
        return view('muscle-up-app.instructor.instructor-dashboard');

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
        $password = str_random(8);
        $user->password = bcrypt($password);
        $user['type'] = 'instructor';
//        $user->user_id = $user->id;
        $user->first_name=$request->first_name;
        $user->last_name=$request->last_name;
        $user->dial_code = '+27';
        $user->phone_number=$request->phone_number;
        $user->dob=$request->dob;
        $user->gender =$request->gender;
//        $user->address=$request->address;
        $user->save();

        $instructor = new  Employee();
        $instructor->joining_date=$request->joining_date;
        $instructor->quit_date=$request->quit_date;
        $instructor->previous_salary=$request->previous_salary;
        $instructor->joining_salary=$request->joining_salary;
        $instructor->exp_years=$request->exp_years;
        $instructor->exp_description=$request->exp_description;
        $instructor->save();

        Mail::to($user->email)->send(new AddInstructorRequest($user->email,$password));
        Session::flash('Success','Save Successfully');
        return redirect()->route('instructor-add');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
         $instructors=Instructor::all();

        return view('muscle-up-app.instructor.show')->with('instructors',$instructors);
    }
    public function profileshow($id)
    {
        $instructor=Instructor::find($id);
//        dd($instructors);
        return view('muscle-up-app.instructor.instructor-profile')->with('instructor',$instructor);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $instructor=instructor::find($id);
        return view('muscle-up-app.instructor.update')->with('instructor',$instructor);
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

        $instructor = Employee::find($id);
        $instructor->first_name=$request->first_name;
        $instructor->last_name=$request->last_name;
        $instructor->dial_code = '+45';
        $instructor->phone_number=$request->phone_number;
//        $instructor->exp_years=$request->exp_years;
//        $instructor->exp_desc=$request->exp_desc;
        $instructor->birth_date=$request->birth_date;
//        $instructor->gender =$request->gender;
        $instructor->address=$request->address;
        $instructor->save();

        Session::flash('Success','Update Successfully');

        return redirect()->route('show-instructor');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $instructor=Instructor::find($id);
        $instructor->delete();
//        dd($service);
//        Session::flash('Success','Delete Successfully');
        return redirect()->route('show-instructor');
    }
}
