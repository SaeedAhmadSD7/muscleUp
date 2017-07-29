<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DietDetail extends Model
{
    protected $table='diet_details';
    protected $primaryKey = 'id';
    public $fillable = ['diet_id','content','calories','taketime'];

    public function diet(){
        $this->belongsTo(Diet::class);
    }
}
