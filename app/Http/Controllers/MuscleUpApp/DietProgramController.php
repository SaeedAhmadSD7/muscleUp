<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\DietProgram;
use App\Models\Food;
use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class DietProgramController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $dietPrograms=DietProgram::showAll();
        return view('muscle-up-app.diet.list-diet-program')->with('dietPrograms',$dietPrograms);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        $foods=Food::showAll();
        $meals=Meal::showAll();
        return view('muscle-up-app.diet.diet-program')->with(['foods'=>$foods,'meals'=>$meals]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request) {
        $formData = $request->all();
        DietProgram::createorUpdateDiet($formData);
        return redirect()->route('diet-list');


    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit($id){

        $dietProgram = DietProgram::find($id);
        $dietProgram->meal;
        $dietProgram->food;
//        dd($dietProgram);
        $foods=Food::showAll();
        $meals=Meal::showAll();
         return view('muscle-up-app.diet.edit-diet-program')->with(['dietProgram'=>$dietProgram,'foods'=>$foods,'meals'=>$meals]);
    }


    /**
     * @param Request $request
     */
    public function update(Request $request){
        $formData = $request->all();
        DietProgram::createorUpdateDiet($formData);
        return redirect()->route('diet-list');

    }

    public function foodList($slug, $dietProgram, $meal) {
        return (DietProgram::find($dietProgram)->food()->where('meal_id',$meal)->get());
    }

    /**
     * @param $id
     */
    public  function delete($id){
        DietProgram::deleteDietProgram($id);
        return redirect()->route('diet-list');
    }
}
