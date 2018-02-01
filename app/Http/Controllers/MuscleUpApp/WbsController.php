<?php

namespace App\Http\Controllers\MuscleUpApp;


use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\Wbs;
use App\Models\Exercise;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\WbsCreateRequest;
class WbsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $wbs_list = Wbs::all();
        return view('muscle-up-app.wbs.index')->with('wbs_list',$wbs_list);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        $exercises =Exercise::all();
        return view('muscle-up-app.wbs.create')->with('exercises',$exercises);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(WbsCreateRequest $request) {
        $formData = $request->all();
        $formData['gym_id']=Auth::user()->gym_id;
        Wbs::createUpdateWbs($formData);
        return redirect()->route('wbs-list');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Wbs  $wbs
     * @return \Illuminate\Http\Response
     */
    public function show(Wbs $wbs) {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Wbs  $wbs
     * @return \Illuminate\Http\Response
     */
    public function edit(Wbs $wbs)
    {
        $wbs = Wbs::find($wbs->id);
        $wbs->exercise;
        $exercise_list= Exercise::all();

        return view('muscle-up-app.wbs.edit')->with(['wbs'=>$wbs,'exercise_list'=>$exercise_list]);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Wbs  $wbs
     * @return \Illuminate\Http\Response
     */
    public function update(WbsCreateRequest $request, Wbs $wbs)
    {
        $formData = $request->all();
        $formData['gym_id']=Auth::user()->gym_id;
        Wbs::createUpdateWbs($formData);
        return redirect()->route('wbs-list');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Wbs  $wbs
     * @return \Illuminate\Http\Response
     */
    public function destroy(Wbs $wbs)
    {
        Wbs::deleteWbs($wbs->id);
        return redirect()->route('wbs-list');

    }
}
