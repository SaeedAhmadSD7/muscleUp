<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Phase
 *
 * @property int $id
 * @property int|null $gym_id
 * @property string $title
 * @property string $description
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Day[] $day
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Program[] $program
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phase whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phase whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phase whereGymId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phase whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phase whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Phase whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Phase extends Model {

    protected $table = 'phases';
    protected $primaryKey = 'id';
    public $fillable = ['title','description' , 'gym_id'];

    public function program() {
        return $this->belongsToMany(Program::class,'programs_phases','phase_id','program_id')->withTimestamps();
    }

    public function day() {
        return $this->belongsToMany(Day::class,'phase_details','phase_id','day_id')->withPivot('wbs_id')->withTimestamps();
    }

    public static function showAll()
    {
        $phase = Phase::all();
        return $phase;
    }

    public static function createUpdatePhase($formData)
    {
        if(array_key_exists('id',$formData)) {
            $phase = Phase::find($formData['id']);
        } else {
            $phase = new Phase();
        }

        $phase_data = array();
        for($i = 0; $i < count($formData['day_id']) ; $i++) {
                $phase_data[$i]['day_id'] = $formData['day_id'][$i];                               //for dropdown
                $phase_data[$i]['wbs_id'] = $formData['wbs_id'][$i];
        }
        $phase->title = $formData['title'];
        $phase->description = $formData['description'];
        $phase->gym_id = $formData['gym_id'];

        $phase->save();
        $phase->day()->detach();
        $phase->day()->attach($phase_data);
    }

    public static function deletePhase($id){
        $phase = self::find($id);
        $phase->day()->detach();
        $phase->delete();
    }
}
