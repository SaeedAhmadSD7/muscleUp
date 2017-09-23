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

        $meal_data = array();

        for ($i = 0 ; $i < count($formData['meal_id']); $i++){
            $meal_data[$i]['meal_id'] = $formData['meal_id'][$i];
            $meal_data[$i]['food_id'] = $formData['food_id'][$i];
            $meal_data[$i]['quantity'] = $formData['quantity'][$i];
            $meal_data[$i]['calories'] = $formData['calories'][$i];
            $meal_data[$i]['taketime'] = $formData['taketime'][$i];
        }

        $dietProgram->title = $formData['title'];
        $dietProgram->description = $formData['description'];
        $dietProgram->save();

        $dietProgram->meal()->detach();
        $dietProgram->food()->detach();
        $dietProgram->meal()->sync($formData['meal_id']);
        $dietProgram->food()->sync($meal_data);
    }

    public static function deleteDietProgram($id) {
        $dietProgram = DietProgram::find($id);
        $dietProgram->meal()->detach();
        $dietProgram->food()->detach();
        $dietProgram->delete();
    }


}
