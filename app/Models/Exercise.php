<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    protected $table= 'exercises';
    protected $primaryKey = 'id';
    public function wbs_detail(){
        return $this->belongsToMany(WbsDetail::class);
    }
}
