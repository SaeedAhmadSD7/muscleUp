<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wbs extends Model
{
    protected $table= 'wbs';
    protected $primaryKey = 'id';
    public $fillable = ['title','description'];

    public function phase_day_detail(){
        return $this->belongsTo(PhaseDayDetail::class);
    }

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
}
