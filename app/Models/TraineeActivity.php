<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TraineeActivity extends Model
{
    protected $table = 'trainee_activities';
    protected $primaryKey = 'id';
    protected $fillable = ['trainee_id','phase_id','day_id','wbs_id','exercise_id','meal_id','food_id','set','rep','rest','quantity','calories','duration'];

    public function trainee() {
        return $this->belongsTo(Trainee::class);
    }

}
