<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\WbsDetail
 *
 * @property int $id
 * @property int $wbs_id
 * @property int $exercise_id
 * @property int $set
 * @property int $rep
 * @property string $rest
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\WbsDetail whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\WbsDetail whereExerciseId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\WbsDetail whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\WbsDetail whereRep($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\WbsDetail whereRest($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\WbsDetail whereSet($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\WbsDetail whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\WbsDetail whereWbsId($value)
 * @mixin \Eloquent
 */
class WbsDetail extends Model
{
    protected $table= 'wbs_details';
    protected $primaryKey = 'id';
    public $fillable = ['wbs_id','exercise_id','set','rep','rest'];

//    public function wbs() {
//
//        return $this->belongsTo(Wbs::class);
//    }
//
//    public function exercise() {
//
//        return $this->belongsTo(Exercise::class);
//    }


}
