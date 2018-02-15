<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Wbs
 *
 * @property int $id
 * @property int|null $gym_id
 * @property string $title
 * @property string $description
 * @property string|null $deleted_at
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Day[] $day
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Exercise[] $exercise
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Wbs whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Wbs whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Wbs whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Wbs whereGymId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Wbs whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Wbs whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Wbs whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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

    public static function storeWbsDetails($formData) {
        $Wbs = Wbs::find($formData['wbs_id']);
        $wbs_data = array();
        $wbs_data['exercise_id'] = $formData['exercise_id'];
        $wbs_data['set'] = $formData['set'];
        $wbs_data['rep'] = $formData['rep'];
        $wbs_data['rest'] = $formData['rest'];
        $Wbs->exercise()->attach($wbs_data['exercise_id'],['set'=>$wbs_data['set'],'rep'=> $wbs_data['rep'],'rest'=>$wbs_data['rest']]);
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
        $Wbs->gym_id = $formData['gym_id'];
        $Wbs->save();
        $Wbs->exercise()->detach();
        $Wbs->exercise()->attach($wbs_data);
    }

    public static function deleteWbs($id)
    {
        $Wbs = Wbs::find($id);
        $Wbs->exercise()->detach();
        $Wbs->delete();
    }
     public static function deleteDetailsWbs($data) {

         $Wbs = Wbs::find($data['wbs_id']);
        $Wbs->exercise()->detach($data['exercise_id']);
    }
}
