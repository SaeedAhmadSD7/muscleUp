<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    protected $table= 'programs';
    protected $primaryKey = 'id';
    public $fillable = [];

    public function program_detail(){
        return $this->hasOne(ProgramDetail::class);
    }
}
