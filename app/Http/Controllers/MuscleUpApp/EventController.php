<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Event;

class EventController extends Controller
{

    public function index()
    {
        $Events = Event::all();
        return view('muscle-up-app\event\index')->with('Events',$Events);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */


    public function create(Request $request)
    {
        return view('muscle-up-app\event\create');

    }

    public function save(Request $request){

        $event = new Event();
        $event->name =$request->name;
        $event->type=$request->type;
        $event->start_date = $request->start_date;
        $event->end_date = $request->end_date;
        $event->save();
    }


    public function retrieve(Event $event)
    {
        return view('muscle-up-app.event.show')->with('event',$event);
    }


    public function edit(Event $event)
    {
        return view('muscle-up-app.event.edit')->with('event',$event);
    }


    public function update(Request $request, Event $event)
    {
        $event->name = $request->name;
        $event->type = $request->type;
        $event->start_date = $request->start_date;
        $event->end_date = $request->end_date;
        $event->save();
    }

    public function destroy(Event $event)
    {
        return $event;
//        $event->delete();
    }
}
