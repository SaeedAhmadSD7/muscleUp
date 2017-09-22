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


    public function index()
    {
        return view('muscle-up-app.instructor.index');

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
        $user->first_name=$request->first_name;
        $user->last_name=$request->last_name;
        $user->dial_code = '+27';
        $user->phone_number=$request->phone_number;
        $user->dob=$request->dob;
        $user->gender =$request->gender;
        $user->save();

        $instructor = new  Employee();
        $instructor->user_id=$user->id;
        $instructor->joining_date=$request->joining_date;
        $instructor->quit_date=$request->quit_date;
        $instructor->previous_salary=$request->previous_salary;
        $instructor->joining_salary=$request->joining_salary;
        $instructor->exp_years=$request->exp_years;
        $instructor->exp_description=$request->exp_description;
        $instructor->save();

        Mail::to($user->email)->send(new AddInstructorRequest($user->email,$password));
        Session::flash('Success','Save Successfully');
        return redirect()->route('dashboard');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
         $instructors=User::where('type','instructor')->get();

        return view('muscle-up-app.instructor.instructor-list')->with('instructors',$instructors);
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
        $instructor = User::find($id);
        $employee= Employee::where('user_id','=',$id)->first();
//        dd($employee);

        return view('muscle-up-app.instructor.edit-instructor-info', compact('instructor','employee'));
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

        $user = User::find($id);
        $user->first_name=$request->input('first_name');
        $user->last_name=$request->input('last_name');
        $user->dial_code = '+45';
        $user->phone_number=$request->input('phone_number');
        $user->dob=$request->input('dob');
        $user->gender =$request->input('gender');
        $user->save();

        $instructor= Employee::where('user_id','=',$id)->first();

        $instructor->joining_date=$request->input('joining_date');
        $instructor->quit_date=$request->input('quit_date');
        $instructor->previous_salary=$request->input('previous_salary');
        $instructor->joining_salary=$request->input('joining_salary');
        $instructor->exp_years=$request->input('exp_years');
        $instructor->exp_description=$request->input('exp_description');
        $instructor->save();


        Session::flash('Success','Update Successfully');

        return redirect()->route('instructor-show');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $instructor=User::find($id);
        $instructor->delete();
        $employee = Employee::where('user_id', '=', $id);
        $employee->delete();
        return redirect()->route('instructor-show');
    }
}
