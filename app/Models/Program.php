<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    protected $table= 'programs';
    protected $primaryKey = 'id';
    protected $fillable = ['title','description'];


    public function phase() {
        return $this->belongsToMany(Phase::class,'programs_phases','program_id','phase_id');
    }


    public static function showAll()
    {
        $programs = Program::all();
        return $programs;
    }

    public static function create_program($request){

        $program=new Program();
        $program->title = $request->title;
        $program->description = $request->description;
        $program->save();
        $program_id = $program->id;
        $list=array();
        $phase=array();


        $count=0;
        foreach($request->input('phase_id') as $phase_id){
            $phase[]=$phase_id;
            $count++;
        }
        $list['phase']=$phase;

        for($i=0;$i<$count;$i++){
            $programPhase=new ProgramPhase();
            $programPhase->program_id= $program_id;
            $programPhase->phase_id = $list['phase'][$i];
            $programPhase->save();
        }
    }

    public static function updateProgram($request)
    {
        $program = self::find($request->id);
        $program->title = $request->title;
        $program->description = $request->description;
        $program->update();
        $program_id = $program->id;
        $list=array();
        $phase=array();


        $count = 0;
        foreach ($request->input('phase_id') as $phase_id) {
            $phase[] = $phase_id;
            $count++;
        }
        $list['phase'] = $phase;


        $programPhase= ProgramPhase::where('program_id', '=', $request->id)->get();
        $row= ($programPhase)->count();
        for ($i = 0; $i < $count; $i++) {

            if($i < $row) {
                $programPhase[$i]->program_id= $program_id;
                $programPhase[$i]->phase_id = $list['phase'][$i];
                $programPhase[$i]->save();

            }else{
                $programPhase = new ProgramPhase();
                $programPhase->program_id= $program_id;
                $programPhase->phase_id = $list['phase'][$i];
                $programPhase->save();

            }
        }

    }
    public static function deleteProgram($id){
        $program = self::find($id);
        $program->delete();
        $programPhase = ProgramPhase::where('program_id', '=', $id);
        $programPhase->delete();
    }

}
