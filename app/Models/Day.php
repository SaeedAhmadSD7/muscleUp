<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
    protected $table= 'days';
    protected $primaryKey = 'id';
    protected $fillable = ['title'];


    public function phase() {
        return $this->belongsToMany(Phase::class,'phase_details','day_id','phase_id')->withPivot('wbs_id')->withTimestamps();
    }

    public function wbs() {
        return $this->belongsToMany(Wbs::class,'phase_details','day_id','wbs_id')->withPivot('phase_id')->withTimestamps();
    }

    public static function showAll()
    {
        $days = Day::all();
        return $days;
    }
}
