<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlanDetail extends Model
{
    protected $table= 'plan_details';
    protected $primaryKey = 'id';
    public function plan(){
        return $this->belongsTo(Plan::class);
    }

    public function day(){
        return $this->hasMany(Day::class);
    }

    public function wbs(){
        return $this->hasMany(Wbs::class);
    }
}
