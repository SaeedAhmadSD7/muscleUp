<?php

namespace App\Http\Controllers\MuscleUpApp;

use App\Models\DietProgram;
use App\Models\Food;
use App\Models\Meal;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
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
        $dietPrograms=$this->_dietProgram->showAll();
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

    public function store(DietCreateRequest $request)
    {
        $formData = $request->all();
        $message = $this->_dietProgram->createorUpdateDiet($formData);
//        $foods = Food::showAll();
//        $meals = Meal::showAll();
        $dietPrograms = $this->_dietProgram->showAll();
        if(isset($message))
        {
            return response()->json([$message],500);
        }
        else
        {
            return view('muscle-up-app.diet.partials.list-partial',compact('dietPrograms'));

        }
    }
    /**
     * @param $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit($id){

        $dietProgram = $this->_dietProgram->find($id);
        $foods=Food::showAll();
        $meals=Meal::showAll();
         return view('muscle-up-app.diet.edit-diet-program')->with(['dietProgram'=>$dietProgram,'foods'=>$foods,'meals'=>$meals]);
    }

    /**
     * @param Request $request
     */
    public function update(DietCreateRequest $request){
        $formData = $request->all();
        $message=$this->_dietProgram->createorUpdateDiet($formData);
        $dietPrograms=$this->_dietProgram->showAll();
        if(isset($message))
        {
            return response()->json([$message],500);
        }
        else
        {
            return view('muscle-up-app.diet.partials.list-partial',compact('dietPrograms'));
        }
    }
    public function foodList($slug, $dietProgram, $meal) {
        return ($this->_dietProgram->find($dietProgram)->food()->where('meal_id',$meal)->get());
    }

    public function diet_detail($id)
    {
        $dietProgram=$this->_dietProgram->find($id);
        $foods=Food::showAll();
        $meals=Meal::showAll();
        return view('muscle-up-app.diet.diet-program-detail')->with(['dietProgram'=>$dietProgram , 'foods'=>$foods  , 'meals'=>$meals]);
    }
    /**
     * @param $id
     */
    public  function delete($id){

        $this->_dietProgram->deleteDietProgram($id);
        $dietPrograms=$this->_dietProgram->showAll();
        return view('muscle-up-app.diet.partials.list-partial')->with('dietPrograms',$dietPrograms);

    }
}
