<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
    protected $table= 'days';
    protected $primaryKey = 'id';
    protected $fillable = ['plan_id','number'];

    public function plan_detail(){

        return $this->belongsTo(PlanDetail::class);
    }
}
