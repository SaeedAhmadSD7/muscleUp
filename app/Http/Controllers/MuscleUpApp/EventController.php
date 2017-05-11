<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Event;

class EventController extends Controller
{

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */


    public function create(Request $request)
    {
        return view('muscle-up-app\event\create');

    }

    public function store(Request $request){
        //store data in database

//        $request->name = 'Event One';
//        $request->type = 'Premium Event';
//        $request->start_date = '2017-05-11';
//        $request->end_date = '2017-05-11';


        $event = new Event();
        $event->name =$request->name;
        $event->type=$request->type;
        $event->start_date = $request->start_date;
        $event->end_date = $request->end_date;
        $event->save();
    }


    public function retrieve($id)
    {

        $event=Event::find($id);

        return view('muscle-up-app.event.show')->with('event',$event);
    }


    public function edit($id)
    {
        $event=Event::find($id);

        return view('muscle-up-app.event.update')->with('event',$event);
    }


    public function update(Request $request, $id)
    {
        $event = Event::find($id);
        $event->name = $request->input('name');
        $event->type = $request->input('type');
        $event->start_date = $request->input('date_start');
        $event->end_date = $request->input('date_end');
        $event->save();

//        Set flash data with success flash message
        Session::flash('success','This event was successfully saved.');


//        Redirect with flash data to post.show
        return redirect()->route('events.show',$event->id);

    }




}
