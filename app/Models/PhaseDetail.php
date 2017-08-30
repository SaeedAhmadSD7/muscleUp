<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhaseDetail extends Model
{
    protected $table= 'phase_details';
    protected $primaryKey = 'id';
    protected $fillable = ['phase_id','day_id','wbs_id'];

    public function phase()
    {
        return $this->belongsTo(Phase::class);
    }

    public function wbs()
    {
        return $this->belongsTo(Wbs::class);
    }
    public function day()
    {
        return $this->belongsTo(Day::class);
    }
}

