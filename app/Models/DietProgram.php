<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DietProgram extends Model
{
    protected $table='diet_programs';
    protected $primaryKey = 'id';
    protected $fillable = ['program_id','name'];

    public function program(){
        return $this->belongsTo(Program::class);
    }

    public function diet(){
        return $this->hasMany(Diet::class);
    }
}
