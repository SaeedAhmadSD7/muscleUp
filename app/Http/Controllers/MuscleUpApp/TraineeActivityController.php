<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\Program;
use App\Models\TraineeActivity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Routing\Controller;
class TraineeActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $trainee = Auth::user();
        $program = Phase::with('day');
//        dd($program->phase);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TraineeActivity  $traineeActivity
     * @return \Illuminate\Http\Response
     */
    public function show(TraineeActivity $traineeActivity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\TraineeActivity  $traineeActivity
     * @return \Illuminate\Http\Response
     */
    public function edit(TraineeActivity $traineeActivity)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TraineeActivity  $traineeActivity
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TraineeActivity $traineeActivity)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TraineeActivity  $traineeActivity
     * @return \Illuminate\Http\Response
     */
    public function destroy(TraineeActivity $traineeActivity)
    {
        //
    }
}
