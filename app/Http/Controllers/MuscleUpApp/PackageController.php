<?php

namespace App\Http\Controllers\MuscleUpApp;
use App\Models\Package;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $package= Package::all();
        return view('muscle-up-app\package\index')->with('package',$package);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('muscle-up-app\package\create');
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
//
//            'package_name'=>'required',
//            'Package_type' => 'required'
//        ));
        //store data in database
        $package = new Package();

        $package->package_name= $request->package_name;
        $package->package_type= $request->package_type;
        $package->save();

        //redirect to other page

        return redirect()->route('show-package',$package->id);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $package=Package::find($id);

        return view('muscle-up-app\package\show')->with('package',$package);
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
        $packages=Package::find($id);

        // return the view and pass it in the var we previously created
        return view('muscle-up-app\package\edit')->with('package',$packages);
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
//
//            'package_name'=>'required',
//            '
//' => 'required'
//        ));
        //          save the data into database
        $package =Package::find($id);
        $package->package_name=$request->input('package_name');
        $package->package_type=$request->input('package_type');
        $package->save();

//        Set flash data with success flash message



//        Redirect with flash data to post.show
        return redirect()->route('package.show',$package->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $package =Package::find($id);

        $package->delete();
        return redirect()->route('package.index');
    }
}
