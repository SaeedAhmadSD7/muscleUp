<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Meal
 *
 * @property int $id
 * @property string $title
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\DietProgram[] $dietProgram
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Meal whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Meal whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Meal whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Meal whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Meal extends Model {
    protected $table = 'meals';
    protected $primaryKey = 'id';
    protected $fillable = ['title'];

    public function dietProgram() {
        return $this->belongsToMany(DietProgram::class,'diet_meal','meal_id','diet_program_id')->withPivot('food_id','quantity','calories','taketime')->withTimestamps();
    }





    public static function showAll()
    {
        $meals = Meal::all();
        return $meals;
    }
}
