<?php

namespace App\Http\Controllers\MuscleUpApp;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Models\Event;

class EventController extends Controller
{
    /**
     * @param Request $request
     */
    public function create(Request $request)
    {
        //store data in database
        $event = new Event();
        $event->eventType= $request-eventType;
        $event->duration= $request->duration;
        $event->save();
    }
}
