<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
    protected $table= 'days';
    protected $primaryKey = 'id';
    protected $fillable = ['title'];

    public function phase(){

        return $this->belongsTo(Phase::class);
    }

    public static function showAll()
    {
        $days = Day::all();
        return $days;
    }
    public function phaseDetails()
    {
        return $this->hasMany(PhaseDetail::class);
    }

}
