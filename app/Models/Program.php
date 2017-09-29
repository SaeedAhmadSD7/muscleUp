<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Program extends Model {

    protected $table= 'programs';
    protected $primaryKey = 'id';
    protected $fillable = ['title','description'];


    public function phase() {
        return $this->belongsToMany(Phase::class,'programs_phases','program_id','phase_id')->withTimestamps();
    }

    public function exercise() {
        return $this->hasManyThrough('Program', 'Exercise');
    }

    public function allocation() {
        return $this->hasOne(Allocation::class);
    }



    public static function showAll() {

        $programs = Program::all();
        return $programs;
    }

    public static function createUpdateProgram($formData) {

        if(array_key_exists('id',$formData)) {
            $program = Program::find($formData['id']);
        } else {
            $program = new Program();
        }

        $program->title = $formData['title'];
        $program->description = $formData['description'];
        $program->save();
        $program->phase()->detach();
        $program->phase()->attach($formData['phase_id']);
    }

    public static function deleteProgram($id) {

        $program = self::find($id);
        $program->phase()->detach();
        $program->delete();
    }
}
