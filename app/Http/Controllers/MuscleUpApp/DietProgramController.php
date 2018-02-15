<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\DietProgram;
use App\Models\Food;
use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Http\Requests\DietCreateRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use Exception;
use Log;
use Symfony\Component\Debug\ExceptionHandler;

class DietProgramController extends Controller
{

    private $_dietProgram;

    public function __construct(DietProgram $_dietProgram)
    {
        $this->_dietProgram = $_dietProgram;
    }
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

    public function store(DietCreateRequest $request) {
        $formData = $request->all();
        $dietPrograms=DietProgram::showAll();
       $message= DietProgram::createorUpdateDiet($formData);
//        dd($message);
         return view('muscle-up-app.diet.partial')->with('dietPrograms',$dietPrograms ,  'response' , $message);


    }

    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit($id){

        $dietProgram = DietProgram::find($id);
//        $meal=$dietProgram->meal;
        $food=$dietProgram->food;
//        dd($food);
        $meal=$dietProgram->meal;
//        foreach($meal as $m)
////        {
////            echo $m->title;
////        }
////        dd();

        $foods=Food::showAll();
        $meals=Meal::showAll();
         return view('muscle-up-app.diet.edit-diet-program')->with(['dietProgram'=>$dietProgram,'foods'=>$foods,'meals'=>$meals]);
    }


    /**
     * @param Request $request
     */
    public function update(DietCreateRequest $request){
        $formData = $request->all();
//        dd($formData);
        DietProgram::createorUpdateDiet($formData);
        return redirect()->route('diet-list');

    }

    public function foodList($slug, $dietProgram, $meal) {
        return (DietProgram::find($dietProgram)->food()->where('meal_id',$meal)->get());
    }

    public function diet_detail($id)
    {
        $dietProgram=DietProgram::find($id);
//        $food_id=$dietProgram->food;
//        dd($food_id);
        $foods=Food::showAll();
        $meals=Meal::showAll();
//        dd($meal);
//        $meal=$dietProgram->foods;
//        dd($food);
//        $mymeal=$meal->pivot->calories;
//        $meal=$dietProgram->pivot->meal;
        return view('muscle-up-app.diet.diet-program-detail')->with(['dietProgram'=>$dietProgram , 'foods'=>$foods  , 'meals'=>$meals]);
    }
    /**
     * @param $id
     */
    public  function delete($id){
        DietProgram::deleteDietProgram($id);
        return redirect()->route('diet-list');
    }
}
