<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\Day;
use App\Models\Phase;
use App\Models\PhaseDetail;
use App\Models\Wbs;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PhaseController extends Controller
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
        $days= Day::showAll();
        $Wbs= Wbs::showAll();
        return view ('muscle-up-app.phase.create-phase',compact('days','Wbs'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $formData = $request->all();
        Phase::createUpdatePhase($formData);
        return redirect()->route('show-phase');



    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Phase  $phase
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $phases=Phase::showAll();
        return view('muscle-up-app.phase.list-phase',compact('phases'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Phase  $phase
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $phase = Phase::find($id);
        $phase->day;
        $days= Day::showAll();
        $wbs= Wbs::showAll();

        return view('muscle-up-app.phase.edit-phase')->with(['phase'=>$phase,'days'=>$days,'wbs'=>$wbs]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Phase  $phase
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        Phase::createUpdatePhase($request);
        return redirect()->route('show-phase');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Phase  $phase
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Phase::deletePhase($id);
        return redirect()->route('show-phase');
    }
}
