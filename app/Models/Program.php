<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    protected $table= 'programs';
    protected $primaryKey = 'id';
    public $fillable = ['title','gym_id'];

    public function plan(){
        return $this->hasMany(Plan::class);
    }


}
