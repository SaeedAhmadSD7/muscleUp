<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wbs extends Model
{
    protected $table= 'wbs';
    protected $primaryKey = 'id';
    public $fillable = [];

    public function exercise(){
        return $this->belongsToMany(Exercise::class,'wbs_details','wbs_id','exercise_id');
    }
    public static function showAll()
    {
        $Wbs = Wbs::all();
        return $Wbs;
    }
    public function phaseDetails()
    {
        return $this->hasMany(PhaseDetail::class);
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


}
