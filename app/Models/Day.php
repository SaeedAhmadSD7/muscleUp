<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
    protected $table= 'days';
    protected $primaryKey = 'id';
    protected $fillable = ['title'];


    public function day() {
        return $this->belongsToMany(Day::class,'phase_details','day_id','phase_id')->withPivot('wbs_id')->withTimestamps();
    }

    public static function showAll()
    {
        $days = Day::all();
        return $days;
    }
}
