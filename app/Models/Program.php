<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    protected $table= 'programs';
    protected $primaryKey = 'id';
    protected $fillable = ['title','description'];


    public function phase() {
        return $this->belongsToMany(Phase::class,'programs_phases','program_id','phase_id')->withTimestamps();
    }


    public static function showAll()
    {
        $programs = Program::all();
        return $programs;
    }

    public static function create_program($request)
    {

        $program = new Program($request->all());
        $program->save();
        $phase = array();
        foreach ($request->phase_id as $program_phase) {
            $phase['program_id'] = $program->id;
            $phase['phase_id'] = $program_phase;
        }

        $program->phase()->attach($phase);
    }

    public static function updateProgram($request)
    {
        $program = self::find($request->id);
        $program->title = $request->title;
        $program->description = $request->description;
        $program->save();

        $phase = array();
        foreach ($request->phase_id as $program_phase) {
            $phase['program_id'] = $program->id;
            $phase['phase_id'] = $program_phase;
        }
        $program->phase()->sync($phase);
//        $program_id = $program->id;


//        $list=array();
//        $phase=array();
    }


    public static function deleteProgram($id){
        $program = self::find($id);
        $program->delete();
        $programPhase = ProgramPhase::where('program_id', '=', $id);
        $programPhase->delete();
    }

}
