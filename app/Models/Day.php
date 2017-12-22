<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Day
 *
 * @property int $id
 * @property string $title
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Phase[] $phase
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Wbs[] $wbs
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Day whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Day whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Day whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Day whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Day extends Model
{
    protected $table= 'days';
    protected $primaryKey = 'id';
    protected $fillable = ['title'];


    public function phase() {
        return $this->belongsToMany(Phase::class,'phase_details','day_id','phase_id')->withPivot('wbs_id')->withTimestamps();
    }

    public function wbs() {
        return $this->belongsToMany(Wbs::class,'phase_details','day_id','wbs_id')->withPivot('phase_id')->withTimestamps();
    }

    public static function showAll()
    {
        $days = Day::all();
        return $days;
    }
}
