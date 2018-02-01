<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Http\Requests\InstructorCreateRequest;
use App\Http\Requests\InstructorUpdateRequest;
use App\Models\Country;
use App\Models\Employee;
use App\Models\Trainee;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Instructor;
use App\Mail\AddInstructorRequest;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Mail;

class EmployeeController extends Controller

{
    private $_employee;
    private $_user;
    private $_instructor;

    /**
     * EmployeeController constructor.
     * @param $employee
     * @param $user
     * @param $instructor
     */
    public function __construct(Employee $employee, User $user, Instructor $instructor)
    {
        $this->_employee = $employee;
        $this->_user = $user;
        $this->_instructor = $instructor;
    }


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
        $countries=Country::all();
        return view('muscle-up-app.instructor.add-instructor')->with('countries',$countries);;

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(InstructorCreateRequest $request)
    {

        $user = $this->_user;
        $user->email = $request->email;
//        $password = str_random(8);
        $password="asdf1234";
        $user->password = bcrypt($password);
        $user->branch_id=\Auth::user()->branch_id;
        $user->gym_id=\Auth::user()->gym_id;
        $user['type'] = 'instructor';
        $user->first_name=$request->first_name;
        $user->last_name=$request->last_name;
//        $user->dial_code = '+27';
        $user->phone_number=$request->phone_number;
        $user->address=$request->address;
        $user->country=$request->country;
        $user->city=$request->city;
        $user->dob=$request->dob;
        $user->gender =$request->gender;
        $user->save();

        $employee = $this->_employee;
        $employee->user_id=$user->id;
        $employee->joining_date=$request->joining_date;
        $employee->quit_date=$request->quit_date;
        $employee->previous_salary=$request->previous_salary;
        $employee->joining_salary=$request->joining_salary;
        $employee->exp_years=$request->exp_years;
        $employee->exp_description=$request->exp_description;
        $user->employee()->save($employee);

        $instructor = $this->_instructor;
        $instructor->user_id = $user->id;
        $instructor->employee_id = $employee->id;
        $instructor->branch_id = \Auth::user()->branch_id;
        $instructor->save();

//        Mail::to($user->email)->send(new AddInstructorRequest($user->email,$password));


        Session::flash('success','Save Successfully');
        return redirect()->route('instructor-show');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show() {
         $instructors=Employee::with('user')->get();
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
        $employee= Employee::find($id);
        $employee->user;
        $countries=Country::all();

        return view('muscle-up-app.instructor.edit-instructor-info', compact('employee','countries'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(InstructorUpdateRequest $request, $id)
    {

        $user = User::find($id);
        $user->first_name=$request->input('first_name');
        $user->last_name=$request->input('last_name');
//        $user->dial_code = '+45';
        $user->phone_number=$request->input('phone_number');
        $user->dob=$request->input('dob');
        $user->address=$request->input('address');
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


        Session::flash('Success','Congratulations Employee have been added successfully. Credentials have been mailed to entered email.');

        return redirect()->route('instructor-show');
    }

    public function allocate(Request $request)
    {
//        dd($request);

        $trainee_id = $request->input('trainee_id');
        $instructor_id = $request->input('instructor_id');
        $allocation_type = $request->input('allocationType');
        $instructor = Instructor::find($instructor_id);

//        $instructor->trainees()->attach($trainee_id, ['type' => $allocation_type]);
//        if (!$instructor->trainees()->exists($trainee_id)) {
//            $instructor->trainees()->attach($trainee_id, ['type' => $allocation_type]);
//        }
        if (!$instructor->trainees()->where('trainee_id', $trainee_id)->where('instructor_id', $instructor_id)) {
            $instructor->trainees()->attach($trainee_id, ['type' => $allocation_type]);
        }


        Session::flash('Success','Congratulations Employee have been added successfully. Credentials have been mailed to entered email.');



        return response()->json([
            'success' => true,
            'message'   => 'Congratulations Employee have been added successfully. Credentials have been mailed to entered email.'
        ]);


//        return redirect()->route('instructor-show');
    }


    public function allocation($id)
    {

        $instructor = Instructor::find($id);

        $allocatedTrainees = $instructor->trainees()->get();
//        $unAllocatedTrainees = $instructor->notMyTrainees()->get();
        $unAllocatedTrainees = Trainee::all();
//        dd($allocatedTrainees->count());

//        dd($unAllocatedTrainees);

        return view('muscle-up-app.instructor.trainee-allocation', compact('allocatedTrainees','instructor','unAllocatedTrainees'));

//        return redirect()->route('instructor-show');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $employee = Employee::find($id);
        $instructor=Instructor::where("employee_id",$id)->first();
        $employee->user()->delete();
        $employee->delete();
        $instructor->delete();
        return redirect()->route('instructor-show');
    }
}
