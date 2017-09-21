<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Allocation extends Model
{
    protected $table = 'allocations';
    protected $primaryKey = 'id';
    public $fillable = ['trainee_id','instructor_id','program_id','diet_program_id','start_date'];

    public static function showAll()
    {
        $allocations = Allocation::all();
        return $allocations;
    }

    public function trainee() {
        return $this->belongsTo(Trainee::class);
    }

    public function program() {
        return $this->belongsTo(Program::class);
    }

    public function diet_program() {
        return $this->belongsTo(DietProgram::class);
    }
}
