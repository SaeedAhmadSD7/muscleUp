<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Allocation
 *
 * @property int $id
 * @property int $trainee_id
 * @property int $program_id
 * @property int $diet_program_id
 * @property string $start_date
 * @property string|null $deleted_at
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \App\Models\DietProgram $diet_program
 * @property-read \App\Models\Employee $employee
 * @property-read \App\Models\Program $program
 * @property-read \App\Models\Trainee $trainee
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Allocation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Allocation whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Allocation whereDietProgramId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Allocation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Allocation whereProgramId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Allocation whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Allocation whereTraineeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Allocation whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Allocation extends Model
{
    protected $table = 'allocations';
    protected $primaryKey = 'id';
    public $fillable = ['trainee_id','instructor_id','program_id','diet_program_id','start_date'];

    public static function showAll()
    {
        $allocations = Allocation::all();
        return $allocations;
    }

    public function trainee() {
        return $this->belongsTo(Trainee::class);
    }
    public function employee() {
        return $this->belongsTo(Employee::class);
    }

    public function program() {
        return $this->belongsTo(Program::class);
    }

    public function diet_program() {
        return $this->belongsTo(DietProgram::class);
    }
}
