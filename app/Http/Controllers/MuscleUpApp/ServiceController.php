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

//    public function getservices(){
//        return view('muscle-up-app.services.services');
//
//    }

    public function index()
    {
        return view('muscle-up-app.services.services');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('muscle-up-app.services.services');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        $values = array(
//          '$service' =>'personaltrainning',
//          '$serviceCharges'=>'4000'
//    );


        $service = new Service();
        $service->serviceName = $request->input('serviceName');
        $service->serviceCharges = $request->input('serviceCharges');

        $service->save();
        return view('muscle-up-app.services.services');



    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $service=Service::find($id);
//        dd($service);
        return view('muscle-up-app.services.show', compact('service'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $service = Service::find($id);
        return view('muscle-up-app.services.update', compact('service'));
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

        $service=Service::find($id);
        $service->serviceName = $request->input('serviceName');
        $service->serviceCharges = $request->input('serviceCharges');

        $service->save();

        return view('muscle-up-app.services.services');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $service=Service::find($id);
        $service->delete();
//        dd($service);
        return view('muscle-up-app.services.services');

    }


}
