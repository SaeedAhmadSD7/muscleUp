<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\MedicalHistory
 *
 * @property int $id
 * @property int $gym_id
 * @property int $branch_id
 * @property int $trainee_id
 * @property int $health_question_id
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \App\Models\Trainee $trainee
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\MedicalHistory whereBranchId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\MedicalHistory whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\MedicalHistory whereGymId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\MedicalHistory whereHealthQuestionId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\MedicalHistory whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\MedicalHistory whereTraineeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\MedicalHistory whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class MedicalHistory extends Model
{
    protected $table = 'medical_histories';
    protected $fillable=[
      'gym_id' ,'branch_id','trainee_id','health_question_id'
    ];

    public function trainee(){
        return $this->belongsTo(Trainee::class);
    }
}
