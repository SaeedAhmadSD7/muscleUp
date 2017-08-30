<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\WbsDetail;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\Wbs;
use App\Models\Exercise;


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
    public function store(Request $request) {
        Wbs::create_wbs($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Wbs  $wbs
     * @return \Illuminate\Http\Response
     */
    public function show(Wbs $wbs)
    {
        $wbs_detail = WbsDetail::where('wbs_id','=', $wbs->id)->get();

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Wbs  $wbs
     * @return \Illuminate\Http\Response
     */
    public function edit(Wbs $wbs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Wbs  $wbs
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Wbs $wbs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Wbs  $wbs
     * @return \Illuminate\Http\Response
     */
    public function destroy(Wbs $wbs)
    {
        //
    }
}
