<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Exercise
 *
 * @property int $id
 * @property string $title
 * @property string|null $photo
 * @property string|null $description
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Wbs[] $wbs
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Exercise whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Exercise whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Exercise whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Exercise wherePhoto($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Exercise whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Exercise whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Exercise extends Model
{
    protected $table= 'exercises';
    protected $primaryKey = 'id';


    public function wbs(){
        return $this->belongsToMany(Wbs::class,'wbs_details','exercise_id','wbs_id')->withPivot('set','rep','rest')->withTimestamps();
    }

    protected $exercise;
    protected function getExercise()
    {
        if (sizeof($this->exercise) == 0) {
            $this->exercise = json_decode(file_get_contents('./Public/assets/packages/exercises/exercises.json'), true);
        }

        //Return the exercise
        return $this->exercise;
    }
    public function getList()
    {
        //Get the exercise list
        $exercise = $this->getExercise();

        //Return the exercise
        return $exercise;
    }

}
