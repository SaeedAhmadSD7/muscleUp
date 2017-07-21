<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $table = 'plans';
    protected $primaryKey = 'id';

    public function program()
    {
        return $this->belongsTo(Program::class);
    }

    public function plan_detail()
    {
        return $this->hasOne(PlanDetail::class);
    }


}