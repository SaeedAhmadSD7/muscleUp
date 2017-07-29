<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WbsDetail extends Model
{
    protected $table= 'wbs_details';
    protected $primaryKey = 'id';
    public $fillable = ['set','rep','rest','wbs_id'];
    public function wbs(){
        return $this->belongsTo(Wbs::class);
    }
}
