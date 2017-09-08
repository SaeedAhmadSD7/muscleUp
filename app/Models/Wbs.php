<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wbs extends Model
{
    protected $table= 'wbs';
    protected $primaryKey = 'id';
    public $fillable = ['gym_id','title','description'];

    public function exercise(){
        return $this->belongsToMany(Exercise::class,'wbs_details','wbs_id','exercise_id');
    }

    public function phaseDetails() {

        return $this->hasMany(PhaseDetail::class);
    }

    public static function showAll() {

        $Wbs = Wbs::all();
        return $Wbs;
    }

    public static function create_wbs($request) {

        $wbs=new Wbs();
        $wbs->title = $request->title;
        $wbs->description = $request->description;
        $wbs->save();
        $wbs_id= $wbs->id;
        $exercise=array();
        $sets=array();
        $reps=array();
        $rest_t=array();
        $count=0;
        foreach($request->input('exercise_id') as $exercise_id) {
            $exercise[]=$exercise_id;
            $count++;
        }
        $list['exercise']=$exercise;

        foreach($request->input('set') as $set) {
            $sets[]=$set;
        }
        $list['set']=$sets;

        foreach($request->input('rep') as $rep) {
            $reps[]=$rep;
        }
        $list['rep']=$reps;

        foreach($request->input('rest') as $rest) {
            $rest_t[]=$rest;
        }
        $list['rest']=$rest_t;

        for($i=0;$i<$count;$i++) {
            $wbsDetail=new WbsDetail();
            $wbsDetail->wbs_id= $wbs_id;
            $wbsDetail->exercise_id = $list['exercise'][$i];
            $wbsDetail->set = $list['set'][$i];
            $wbsDetail->rep = $list['rep'][$i];
            $wbsDetail->rest = $list['rest'][$i];
            $wbsDetail->save();
        }
    }

    public static function update_wbs($request)
    {
        $wbs = self::find($request->id);
        $wbs->title = $request->title;
        $wbs->description = $request->description;
        $wbs->update();

        $wbs_id = $wbs->id;
        $exercise = array();
        $sets = array();
        $reps = array();
        $rest_t = array();

        $count = 0;
        foreach ($request->input('exercise_id') as $exercise_id) {
            $exercise[] = $exercise_id;
            $count++;
        }
        $list['exercise'] = $exercise;

        foreach ($request->input('set') as $set) {
            $sets[] = $set;
        }
        $list['set'] = $sets;

        foreach ($request->input('rep') as $rep) {
            $reps[] = $rep;if (\Auth::user()->user_type == 'Admin')
        {
            return $next($request);
        }
        return redirect()->guest('/');
        }
        $list['rep'] = $reps;

        foreach ($request->input('rest') as $rest) {
            $rest_t[] = $rest;
        }
        $list['rest'] = $rest_t;

        $wbsDetails = WbsDetail::where('wbs_id', '=', $request->id)->get();
        $rows = ($wbsDetails)->count();

        for ($i = 0; $i < $count; $i++) {
            if ($i < $rows) {
                $wbsDetails[$i]->wbs_id = $wbs_id;
                $wbsDetails[$i]->exercise_id = $list['exercise'][$i];
                $wbsDetails[$i]->set = $list['set'][$i];
                $wbsDetails[$i]->rep = $list['rep'][$i];
                $wbsDetails[$i]->rest = $list['rest'][$i];
                $wbsDetails[$i]->save();
            }
            else {
                $wbsDetail = new WbsDetail();
                $wbsDetail->wbs_id = $wbs_id;
                $wbsDetail->exercise_id = $list['exercise'][$i];
                $wbsDetail->set = $list['set'][$i];
                $wbsDetail->rep = $list['rep'][$i];
                $wbsDetail->rest = $list['rest'][$i];
                $wbsDetail->save();
            }
        }
    }

    public static function delete_wbs($wbs){
        $wbs = self::find($wbs->id);
        $wbs->delete();
        $wbs_detail = WbsDetail::where('wbs_id', '=', $wbs->id)->get();
        $wbs_detail->delete();
    }
}



//}
