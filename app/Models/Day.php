<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
    protected $table= 'days';
    protected $primaryKey = 'id';
    public function plan_detail(){

        return $this->belongsTo(PlanDetail::class);
    }
}
