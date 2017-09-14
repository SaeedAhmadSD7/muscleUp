<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Allocation extends Model
{
    protected $table = 'allocations';
    protected $primaryKey = 'id';
    public $fillable = ['trainee_id','instructor_id','program_id','diet_plans_id','start_date'];

    public static function showAll()
    {
        $allocations = Allocation::all();
        return $allocations;
    }

    public function program(){
        return $this->belongsTo(Program::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
