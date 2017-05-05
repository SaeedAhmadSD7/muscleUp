<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Http\Request;
use App\Models\Deal;
use Illuminate\Routing\Controller;

class DealController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $Deals= Deal::all();
        return view('muscle-up-app\deal\deal')->with('Deals',$Deals);
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
        $values =array(
//            'gymId'=>'1',
            'dealType' => 'Solo',
            'duration' => 'oneyear'
        );
        //validate the data
//        $this->validate($request,array(
//            'gymId' => 'required',
//            'dealType'=>'required',
//            'duration' => 'required'
//        ));
        //store data in database
        $deal = new Deal();
//      $deal->dealType= $values['gymId'];
        $deal->dealType= $values['dealType'];
        $deal->duration= $values['duration'];
        $deal->save();

        //redirect to other page

        return redirect()->route('deal',$deal->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
