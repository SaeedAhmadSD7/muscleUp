<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Phase extends Model
{
    protected $table = 'phases';
    protected $primaryKey = 'id';
    public $fillable = [];

    public function program_detail()
    {
        return $this->belongsToMany(ProgramDetail::class,'program_phases','phase_id','program_detail_id');
    }

    public function day()
    {
        return $this->belongsToMany(Day::class,'phase_day_details','phase_id','day_id');
    }

    public function phase_day_detail()
    {
        return $this->hasOne(PhaseDayDetail::class);
    }


}
