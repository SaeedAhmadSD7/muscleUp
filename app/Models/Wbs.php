<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wbs extends Model
{
    protected $table= 'wbs';
    protected $primaryKey = 'id';
    public $fillable = ['gym_id','title','description'];

    public function exercise() {
        return $this->belongsToMany(Exercise::class,'wbs_details','wbs_id','exercise_id')->withPivot('set','rep','rest')->withTimestamps();
    }

    public function day() {
        return $this->belongsToMany(Day::class,'phase_details','wbs_id','day_id')->withPivot('phase_id')->withTimestamps();
    }


    public static function showAll() {

        $Wbs = Wbs::all();
        return $Wbs;
    }

    public static function createUpdateWbs($formData) {
        if(array_key_exists('id',$formData)) {
            $Wbs = Wbs::find($formData['id']);
        } else {
            $Wbs = new Wbs();
        }

        $wbs_data = array();

        for($i = 0; $i < count($formData['exercise_id']) ; $i++) {
            $wbs_data[$i]['exercise_id'] = $formData['exercise_id'][$i];
            $wbs_data[$i]['set'] = $formData['set'][$i];
            $wbs_data[$i]['rep'] = $formData['rep'][$i];
            $wbs_data[$i]['rest'] = $formData['rest'][$i];
        }

        $Wbs->title = $formData['title'];
        $Wbs->description = $formData['description'];
        $Wbs->save();
        $Wbs->exercise()->detach();
        $Wbs->exercise()->attach($wbs_data);
    }

    public static function deleteWbs($id) {

        $Wbs = Wbs::find($id);
        $Wbs->exercise()->detach();
        $Wbs->delete();
    }
}
