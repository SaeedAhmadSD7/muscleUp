<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Phase extends Model {

    protected $table = 'phases';
    protected $primaryKey = 'id';
    public $fillable = ['title','description'];

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
                $phase_data[$i]['day_id'] = $formData['day_id'][$i];
                $phase_data[$i]['wbs_id'] = $formData['wbs_id'][$i];
        }

        $phase->title = $formData['title'];
        $phase->description = $formData['description'];
        $phase->save();
        $phase->day()->detach();
        $phase->day()->sync($phase_data);
        dd(7);
    }

    public static function deletePhase($id){
        $phase = self::find($id);
        $phase->day()->detach();
        $phase->delete();
    }
}
