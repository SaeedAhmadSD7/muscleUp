<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    protected $table= 'exercises';
    protected $primaryKey = 'id';
    public function wbs_detail(){
        return $this->belongsToMany(WbsDetail::class);
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
