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
        $phase->day()->sync($phase_data);
//        dd($phase_data);
    }



    public static function deletePhase($id){
        $phase = self::find($id);
        $phase->day()->detach();
        $phase->delete();
    }











//    public static function create_phase($request){
//
//        $phase=new Phase();
//        $phase->title = $request->title;
//        $phase->description = $request->description;
//        $phase->save();
//        $phase_id = $phase->id;
//        $list=array();
//        $day=array();
//        $wbs=array();
//
//        $count=0;
//        foreach($request->input('day_id') as $day_id){
//            $day[]=$day_id;
//            $count++;
//        }
//        $list['day']=$day;
//
//        foreach($request->input('wbs_id') as $wbs_id){
//            $wbs[]=$wbs_id;
//        }
//        $list['wbs']=$wbs;
//
//        for($i=0;$i<$count;$i++){
//            $phaseDetail=new PhaseDetail();
//            $phaseDetail->phase_id= $phase_id;
//            $phaseDetail->day_id = $list['day'][$i];
//            $phaseDetail->wbs_id = $list['wbs'][$i];
//            $phaseDetail->save();
//        }
//    }
//    public static function update_phase($request)
//    {
////        dd($request);
//        $phase = self::find($request->id);
//        $phase->title = $request->title;
//        $phase->description = $request->description;
//        $phase->update();
//        $phase_id = $phase->id;
//        $list=array();
//        $day=array();
//        $wbs=array();
//
//        $count = 0;
//        foreach ($request->input('day_id') as $day_id) {
//            $day[] = $day_id;
//            $count++;
//        }
//        $list['day'] = $day;
//        foreach ($request->input('wbs_id') as $wbs_id) {
//            $wbs[] = $wbs_id;
//        }
//        $list['wbs'] = $wbs;
//
//        $phaseDetail= PhaseDetail::where('phase_id', '=', $request->id)->get();
//        $row= ($phaseDetail)->count();
//        for ($i = 0; $i < $count; $i++) {
//
//            if($i < $row) {
//                $phaseDetail[$i]->phase_id= $phase_id;
//                $phaseDetail[$i]->day_id = $list['day'][$i];
//                $phaseDetail[$i]->wbs_id = $list['wbs'][$i];
//                $phaseDetail[$i]->save();
//
//            }else{
//                $phaseDetail = new PhaseDetail();
//                $phaseDetail->phase_id= $phase_id;
//                $phaseDetail->day_id = $list['day'][$i];
//                $phaseDetail->wbs_id = $list['wbs'][$i];
//                $phaseDetail->save();
//
//            }
//        }
//
//    }
//
//    public static function deletePhase($id){
//        $phase = self::find($id);
//        $phase->delete();
//        $phaseDetail = PhaseDetail::where('phase_id', '=', $id);
//        $phaseDetail->delete();
//    }

}
