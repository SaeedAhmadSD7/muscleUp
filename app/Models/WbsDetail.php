<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WbsDetail extends Model
{
    protected $table= 'wbs_details';
    protected $primaryKey = 'id';
    public $fillable = ['wbs_id','exercise_id','set','rep','rest'];

//    public function wbs() {
//
//        return $this->belongsTo(Wbs::class);
//    }
//
//    public function exercise() {
//
//        return $this->belongsTo(Exercise::class);
//    }


}
