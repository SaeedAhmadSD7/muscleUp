<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhaseDayDetail extends Model
{
    protected $table= 'phase_day_details';
    protected $primaryKey = 'id';
    protected $fillable = ['value5'];

    public function phase()
    {
        return $this->belongsTo(Phase::class);
    }

    public function wbs()
    {
        return $this->hasOne(Wbs::class);
    }
}
