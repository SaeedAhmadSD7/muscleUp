<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DietProgram
 *
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string|null $deleted_at
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Food[] $food
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Meal[] $meal
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietProgram whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietProgram whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietProgram whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietProgram whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietProgram whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietProgram whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class DietProgram extends Model
{
    protected $table='diet_programs';
    protected $primaryKey = 'id';
    protected $fillable = ['title','description'];

    public function meal(){
        return $this->belongsToMany(Meal::class,'diet_meal','diet_program_id','meal_id')->withTimestamps();
    }

    public function food(){
        return $this->belongsToMany(Food::class,'diet_food','diet_program_id','food_id' )->withPivot('meal_id','quantity','calories','taketime')->withTimestamps();
    }


    public static function showAll() {
        $dietProgram = DietProgram::all();
        return $dietProgram;
    }


    public static function createorUpdateDiet($formData)
    {
        if (array_key_exists('id', $formData)) {
            $dietProgram = DietProgram::find($formData['id']);
        } else {
            $dietProgram = new DietProgram();
        }
        //dd($formData);
        $dietProgram->title = $formData['title'];
        $dietProgram->description = $formData['description'];
        $dietProgram->save();
//        $dd=self::find($dietProgram);
//        dd($dd['id']);
        $meal_data = array();
        foreach ($formData['total_data'] as $data) {


                for ($i = 0; $i < count($data['meal_id']); $i++) {
                    $meal_data[$i]['food_id'] = $data['food_id'][$i];
                    $meal_data[$i]['meal_id'] = $data['meal_id'][$i];
                    $meal_data[$i]['quantity'] = $data['quantity'][$i];
                    $meal_data[$i]['calories'] = $data['calories'][$i];
                    $meal_data[$i]['taketime'] = $data['taketime'][$i];


//                    $dietProgram->meal()->detach();
//                    $dietProgram->food()->detach();

                    $dietProgram->meal()->attach($data['meal_id']);
                    $dietProgram->food()->attach($meal_data);
                    $object=$dietProgram->food()->attach($meal_data);
                    $detail = $object->pivot->where('meal_id', $data['meal_id'] )->where('food_id', $data['food_id']);
//                    dd($object);
//                    $detail=$object::where('meal_id', $data['meal_id'] )->where('food_id', $data['food_id']);
//
//                    if(isset($detail))
//                    {
//                        echo "error";
////                        dd($detail);
//
//                    }


                    $detail=$object::where('meal_id', $data['meal_id'] )->where('food_id', $data['food_id']);

                    if(isset($detail))
                    {
                        echo "error";
//                        dd($detail);

                    }

                }
        }
    }
    public static function deleteDietProgram($id) {
        $dietProgram = DietProgram::find($id);
        $dietProgram->meal()->detach();
        $dietProgram->food()->detach();
        $dietProgram->delete();
    }


}
