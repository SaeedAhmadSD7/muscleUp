<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Http\Request;
use App\Models\Deal;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Session;

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
        return view('muscle-up-app\deal\index')->with('Deals',$Deals);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('muscle-up-app\deal\create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        //validate the data
//        $this->validate($request,array(
////            'gymId' => 'required',
//            'dealType'=>'required',
//            'duration' => 'required'
//        ));
        //store data in database
        $deal = new Deal();

//        dd($request);
//      $deal->dealType= $values['gymId'];
        $deal->dealType= $request->dealType;
        $deal->duration= $request->duration;
        $deal->save();

        //redirect to other page

        return redirect()->route('show-deal',$deal->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        $deal=Deal::find($id);

        return view('muscle-up-app\deal\show')->with('deal',$deal);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //find the post in database and save as a var
        $deal=Deal::find($id);

        // return the view and pass it in the var we previously created
        return view('muscle-up-app\deal\edit')->with('deal',$deal);
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
        //validate the data
//        $this->validate($request,array(
////            'gymId' => 'required',
//            'dealType'=>'required',
//            'duration' => 'required'
//        ));

//          save the data into database
        $deal =Deal::find($id);
        $deal->dealtype=$request->input('dealType');
        $deal->duration=$request->input('duration');
        $deal->save();

//        Set flash data with success flash message
        Session::flash('success','This deal was successfully saved.');


//        Redirect with flash data to post.show
        return redirect()->route('deals.show',$deal->id);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $deal =Deal::find($id);

        $deal->delete();
        return redirect()->route('deal');
    }
}
