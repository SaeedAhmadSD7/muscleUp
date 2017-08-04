<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
    protected $table= 'days';
    protected $primaryKey = 'id';
    protected $fillable = [];

    public function phase(){

        return $this->belongsToMany(Phase::class,'phase_day_details','day_id','phase_id');
    }
}
