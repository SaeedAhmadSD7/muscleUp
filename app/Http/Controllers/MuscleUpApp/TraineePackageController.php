<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\Service;
use Illuminate\Http\Request;
use App\Models\TrainPackages;
use Illuminate\Routing\Controller;
//use validator;
class TraineePackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function package()
    {
        return view('muscle-up-app.traineepackage.package');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return view('muscle-up-app.traineepackage.package');

        $services=Service::all();

        return view('muscle-up-app.traineepackage.package',compact('services'));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
//        $this->validate($request,[
//           'fitness_plan' => 'required|max255',
//           'personal_training' => 'required',
//           'fitness_course' => 'required'
//        ])->validator();


        $trainpackage = new TrainPackages();
        $trainpackage->fitness_plan = $request->input('fitness_plan');
        $trainpackage->personal_training = $request->input('personal_training');
        $trainpackage->duration = $request->input('duration');

        $trainpackage->save();
        return redirect()->route('create-tpackage',$trainpackage->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $trainpackage=TrainPackage::find($id);

        return view('muscle-up-app.traineepackage.show')->with('trainpackage',$trainpackage);


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $trainpackage=TrainPackage::find($id);

        return view('muscle-up-app.traineepackage.edit')->with('trainpackage',$trainpackage);

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
        $trainpackage = new TrainPackage();
        $trainpackage->fitness_plan = $request->input('fitness_plan');
        $trainpackage->personal_training = $request->input('personal_training');
        $trainpackage->Duration = $request->input('Duration');

        $trainpackage->save();

        return view('muscle-up-app.traineepackage.edit')->with('trainpackage',$trainpackage);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $trainpackage=TrainPackage::find($id);
        $trainpackage->delete();
//        dd($service);
        return redirect()->route('home-page');
    }
}
