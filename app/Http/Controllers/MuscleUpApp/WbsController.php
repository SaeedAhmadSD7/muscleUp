<?php

namespace App\Http\Controllers\MuscleUpApp;


use App\Http\Requests\WbsDetailsRequest;
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
        $wbs = new Wbs();
        $wbs->title = $formData['title'];
        $wbs->description = $formData['description'];
        $wbs->gym_id = $formData['gym_id'];
        $wbs->save();
        $wbs_list = Wbs::all();
//        Wbs::createUpdateWbs($formData);
        return view('muscle-up-app.wbs.partials.wbs-list',compact('wbs_list'));
    }

    public function addDetails(WbsDetailsRequest $request) {
        $formData = $request->all();
        $formData['gym_id']=Auth::user()->gym_id;
        Wbs::storeWbsDetails($formData);
        return $this->ajaxList($formData['wbs_id']);
//        Wbs::createUpdateWbs($formData);
    }

    public function ajaxList($wbs_id)
    {

        $wbs = Wbs::find($wbs_id);
//        $wbs->exercise;
        $exercise_list= Exercise::all();
        $allocatedWbs= Wbs::find($wbs_id);
        $allocatedWbs->exercise;
//        $allocatedWbs=Wbs::find($id)->day()->get();

        return view('muscle-up-app.wbs.partials.wbs-detail-list')->with(['wbs'=>$wbs,'exercise_list'=>$exercise_list, 'allocatedWbs'=>$allocatedWbs]);

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
    public function edit($wbs_id)
    {
        $wbs = Wbs::find($wbs_id);
//        $wbs->exercise;
        $exercise_list= Exercise::all();
        $allocatedWbs= Wbs::find($wbs_id);
        $allocatedWbs->exercise;
//        dd($allocatedWbs->exercise);
        return view('muscle-up-app.wbs.detail-list')->with(['wbs'=>$wbs,'exercise_list'=>$exercise_list, 'allocatedWbs'=>$allocatedWbs]);

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
    public function destroy($wbs_id)
    {
        Wbs::deleteWbs($wbs_id);
        $wbs_list = Wbs::all();
//        Wbs::createUpdateWbs($formData);
        return view('muscle-up-app.wbs.partials.wbs-list',compact('wbs_list'));
//        return redirect()->route('wbs-list');

    }
    public function deleteDetails(Request $request)
    {
        $data=$request->all();
        Wbs::deleteDetailsWbs($data);
        return $this->ajaxList($data['wbs_id']);

    }
}
