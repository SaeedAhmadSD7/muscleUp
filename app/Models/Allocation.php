<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Allocation extends Model
{
    protected $table = 'allocations';
    protected $primaryKey = 'id';
    public $fillable = ['trainee_id','instructor_id','program_id','diet_plans_id','start_date'];
}
