<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProgramPhase extends Model
{
    protected $table= 'programs_phases';
    protected $primaryKey = 'id';
    public $fillable = ['program_id','phase_id'];


    public function program()
    {
        return $this->belongsTO(Program::class);
    }
    public function phase() {

        return $this->belongsTo(Phase::class);
    }
}
