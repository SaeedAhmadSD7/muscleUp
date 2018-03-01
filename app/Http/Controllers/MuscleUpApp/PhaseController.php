<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\Day;
use App\Models\Phase;
use App\Models\User;
use App\Models\Wbs;
use Illuminate\Http\Request;
use App\Http\Requests\PhaseCreateRequest;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class PhaseController extends Controller
{
    private $_user;

    public function __construct(User $user)
    {
        $this->_user = $user;
    }
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
    public function store(PhaseCreateRequest $request)
    {
        $user_data=get_auth_user();
////        $user = $this->_user;
        $formData = $request->all();
        $formData['gym_id']=$user_data->gym_id;
//        Phase::createUpdatePhase($formData);
        $phase = new Phase();
        $phase->title = $formData['title'];
        $phase->description = $formData['description'];
        $phase->gym_id = $formData['gym_id'];
        $phase->save();

//        return redirect()->route('show-phase');
        $phases=Phase::showAll();
        return view('muscle-up-app.phase.partials.list',compact('phases'));


    }

    public function addDetails(Request $request)
    {

        $formData=$request->all();
       $details=Phase::detailAdd($formData);
        return $this->ajexList($formData['phase_id']);
//        return view('muscle-up-app.phase.partials.phase-details-list',compact('phases'));
    }

    public function ajexList($id)
    {
        $phase = Phase::find($id);
//        $phase->day;
        $days= Day::showAll();
        $wbs= Wbs::showAll();
        $allocatedPhase=Phase::find($id)->day()->get();

        return view('muscle-up-app.phase.partials.phase-details-list')->with(['phase'=>$phase,'days'=>$days,'wbs'=>$wbs,'allocatedPhases'=>$allocatedPhase]);
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
//        $phase->day;
        $days= Day::showAll();
        $wbs= Wbs::showAll();
        $allocatedPhase=Phase::find($id)->day()->get();

        return view('muscle-up-app.phase.add-phase')->with(['phase'=>$phase,'days'=>$days,'wbs'=>$wbs,'allocatedPhases'=>$allocatedPhase]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Phase  $phase
     * @return \Illuminate\Http\Response
     */
    public function update(PhaseCreateRequest $request)
    {
        $user_data=get_auth_user();
        $formData = $request->all();
        $formData['gym_id']=$user_data->gym_id;
        Phase::createUpdatePhase($formData);
        return redirect()->route('show-phase');
    }



    public function getPhaseDetails($phase) {
       return (Phase::find($phase)->day()->get());
    }

    public function getDayDetails($phase, $day) {
         return (Phase::find($phase)->day()->where('day_id',$day)->first()->wbs()->with('exercise')->get());


    }

//    public function getWbsDetails($slug ,$phase, $day, $wbs) {
//       return (Phase::find($phase)->day()->where('day_id',$day)->first()->wbs()->where('wbs_id',$wbs)->first()->exercise()->get());
//
//    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Phase  $phase
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Phase::deletePhase($id);
        $phases=Phase::showAll();
        return view('muscle-up-app.phase.partials.list',compact('phases'));
//        return redirect()->route('show-phase');
    }

    public function deleteDetails(Request $request)
    {
        $data=$request->all();
        Phase::deleteDetailsPhase($data);
        return $this->ajexList($data['phase_id']);

    }
}
