<?php

namespace App\Http\Controllers\MuscleUpApp;
use Illuminate\Http\Request;
use App\Models\Service;
use Illuminate\Routing\Controller;

class ServiceController extends Controller
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

            'serviceName' => 'dietplan',
            'serviceCharges' => '1000'

        );
        //validate the data
//        $this->validate($request,array(
//            'serviceName'=>'required',
//            'serviceCharges' => 'required'
//        ));
        //store data in database
        $service = new Service();

        $service->servicename= $values['serviceName'];
        $service->serviceCharges= $values['serviceCharges'];
        $service->save();

        //redirect to other page

        return redirect()->route('home-page',$service->id);
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
