<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Food
 *
 * @property int $id
 * @property string $title
 * @property string $unit
 * @property int $unit_value
 * @property int $calories
 * @property string|null $deleted_at
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Meal[] $meal
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Food whereCalories($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Food whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Food whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Food whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Food whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Food whereUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Food whereUnitValue($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Food whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Food extends Model
{
    protected $table = 'foods';
    protected $primaryKey = 'id';
    protected $fillable = ['name','unit','unit_value','calories'];

    public function meal() {
        return $this->belongsToMany(Meal::class,'food_meal','food_id','meal_id')->withPivot('diet_program_id','quantity','calories','taketime')->withTimestamps();
    }
    public function diet_program() {
        return $this->belongsToMany(DietProgram::class ,'meal_id','quantity','calories','taketime' );
    }



    public static function showAll()
    {
        $foods = Food::all();
        return $foods;
    }
}
