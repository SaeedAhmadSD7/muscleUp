<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\TraineeActivity
 *
 * @property int $id
 * @property int $trainee_id
 * @property int $diet_program_id
 * @property string $phase_id
 * @property int $day_id
 * @property string $wbs_id
 * @property int $exercise_id
 * @property int $meal_id
 * @property int $food_id
 * @property int $set
 * @property int $rep
 * @property string $rest
 * @property int $quantity
 * @property string $calories
 * @property string $duration
 * @property float $progress
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \App\Models\Trainee $trainee
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereCalories($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereDayId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereDietProgramId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereDuration($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereExerciseId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereFoodId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereMealId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity wherePhaseId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereProgress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereRep($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereRest($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereSet($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereTraineeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\TraineeActivity whereWbsId($value)
 * @mixin \Eloquent
 */
class TraineeActivity extends Model
{
    protected $table = 'trainee_activities';
    protected $primaryKey = 'id';
    protected $fillable = ['trainee_id','phase_id','day_id','wbs_id','exercise_id','meal_id','food_id','set','rep','rest','quantity','calories','duration'];

    public function trainee() {
        return $this->belongsTo(Trainee::class);
    }
}
