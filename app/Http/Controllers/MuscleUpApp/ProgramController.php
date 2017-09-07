<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\Phase;
use App\Models\Program;
use App\Models\ProgramPhase;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

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
    public function store(Request $request)
    {
        Program::create_program($request);
        return redirect()->route('show-program');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $programs=Program::showAll();
        return view('muscle-up-app.program.list-program',compact('programs'));
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
        $programPhases = ProgramPhase::where('program_id', '=', $id)->get();
        $phases= Phase::showAll();
        return view('muscle-up-app.program.edit-program',compact('program','programPhases','phases'));    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Program::updateProgram($request);
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
