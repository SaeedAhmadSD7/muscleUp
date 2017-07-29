<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Diet extends Model
{
    protected $table='diets';
    protected $primaryKey = 'id';
    public $fillable = ['diet_programs_id','number'];

    public function diet_program(){
        $this->belongsTo(DietProgram::class);
    }

    public function diet_detail(){
        $this->hasMany(DietDetail::class);
    }
}
