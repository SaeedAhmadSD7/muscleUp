<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DietPlan extends Model
{
    protected $fillable = ['name','status','description'];

    public function DietPlanDetail(){
        return $this->hasMany(DietPlanDetail::class);
    }
}
