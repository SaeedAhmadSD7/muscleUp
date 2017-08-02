<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhaseDetail extends Model
{
    protected $table= 'plan_details';
    protected $primaryKey = 'id';
    public $fillable = ['day','phase_id'];

    public function plan(){
        return $this->belongsTo(Phase::class);
    }

    public function wbs(){
        return $this->hasMany(Wbs::class);
    }
}
