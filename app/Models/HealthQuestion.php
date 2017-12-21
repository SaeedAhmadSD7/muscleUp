<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HealthQuestion extends Model
{
    protected $table = 'health_questions';
    protected $fillable=[
      'question' ,'stat_name','is_active',
    ];

    public function trainee(){
        return $this->belongsTo(Trainee::class);
    }
}
