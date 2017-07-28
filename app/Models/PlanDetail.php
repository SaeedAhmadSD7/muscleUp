<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PlanDetail extends Model
{
    protected $table= 'plan_details';
    protected $primaryKey = 'id';
    public $fillable = ['day'];

    public function plan(){
        return $this->belongsTo(Plan::class);
    }

    public function wbs(){
        return $this->hasMany(Wbs::class);
    }
}
