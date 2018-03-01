<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Program;
use App\Models\Phase;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\ProgramCreateRequest;
class ProgramController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $phases = Phase::showAll();
        return view('muscle-up-app.program.create-program',compact('phases'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProgramCreateRequest $request)
    {
        $user_data=get_auth_user();
        $formData = $request->all();
        $formData['gym_id'] = $user_data->gym_id;
//        dd($formData);
        Program::createUpdateProgram($formData);
        return redirect()->route('show-program');
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show() {

        $programs=Program::showAll();
        return view('muscle-up-app.program.list-program')->with('programs',$programs);
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $program = Program::find($id);
        $program->phase;
        $phases= Phase::showAll();
        return view('muscle-up-app.program.edit-program')->with(['program'=>$program,'phases'=>$phases]);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ProgramCreateRequest $request)
    {

        $formData = $request->all();
        $user_data=get_auth_user();
        $formData['gym_id'] =$user_data->gym_id;
//        dd($formData);
        Program::createUpdateProgram($formData);
        return redirect()->route('show-program');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Program::deleteProgram($id);
        return redirect()->route('show-program');
    }
}
