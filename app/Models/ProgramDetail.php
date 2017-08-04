<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgramDetail extends Model
{
    protected $table= 'program_details';
    protected $primaryKey = 'id';
    public $fillable = [];


    public function program(){
        return $this->belongsTo(Program::class);
    }


    public function phase(){
        return $this->belongsToMany(Phase::class,'program_phases','program_detail_id','phase_id');
    }
}
