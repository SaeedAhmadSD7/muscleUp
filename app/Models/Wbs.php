<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Wbs extends Model
{
    protected $table= 'wbs';
    protected $primaryKey = 'id';
    public $fillable = ['exercise','plan_detail_id'];

    public function plan_detail(){
        return $this->belongsTo(PlanDetail::class);
    }

    public  function wbs_detail(){
        return $this->hasMany(WbsDetail::class);
    }
}
