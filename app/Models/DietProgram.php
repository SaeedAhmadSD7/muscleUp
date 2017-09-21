<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DietProgram extends Model
{
    protected $table='diet_programs';
    protected $primaryKey = 'id';
    protected $fillable = ['title','description'];

    public function meal(){
        return $this->belongsToMany(Meal::class,'diet_meal','diet_program_id','meal_id')->withTimestamps();
    }

    public static function showAll() {
        $dietProgram = DietProgram::all();
        return $dietProgram;
    }


    public static function createorUpdateDiet($formData) {
        if(array_key_exists('id',$formData)){
            $dietProgram = DietProgram::find($formData['id']);
        }
        else{
            $dietProgram = new DietProgram();
        }

        $dietProgram_data = array();
        $meal_data = array();

        for ($i = 0 ; $i < count($formData['meal_id']); $i++){
            $dietProgram_data[$i]['meal_id'] = $formData['meal_id'][$i];
            $meal_data[$i]['food_id'] = $formData['food_id'][$i];
            $meal_data[$i]['quantity'] = $formData['quantity'][$i];
            $meal_data[$i]['calories'] = $formData['calories'][$i];
            $meal_data[$i]['taketime'] = $formData['taketime'][$i];
        }

        $dietProgram->title = $formData['title'];
        $dietProgram->description = $formData['description'];
        $dietProgram->save();



        $dietProgram->meal();
        foreach($dietProgram->meal()->get() as $meal){
            $meal->food()->detach();
        }
        $dietProgram->meal()->detach();

        $dietProgram->meal()->attach($dietProgram_data);




        dd('7');



    }

    public static function deleteDietProgram($id) {
        $dietProgram = DietProgram::find($id);
        $dietProgram->meal()->detach();
        $dietProgram->delete();
    }


}
