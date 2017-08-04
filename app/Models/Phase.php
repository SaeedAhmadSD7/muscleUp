<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Phase extends Model
{
    protected $table = 'phases';
    protected $primaryKey = 'id';
    public $fillable = ['name','program_details_id'];

    public function program()
    {
        return $this->belongsTo(ProgramDetail::class);
    }

    public function plan_detail()
    {
        return $this->hasMany(PhaseDetail::class);
    }
}
