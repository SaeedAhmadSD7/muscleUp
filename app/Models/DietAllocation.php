<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\DietAllocation
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
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietAllocation whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietAllocation whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietAllocation whereDietProgramId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietAllocation whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietAllocation whereProgramId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietAllocation whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietAllocation whereTraineeId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\DietAllocation whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class DietAllocation extends Model
{
    protected $table = 'diet_allocations';
    protected $primaryKey = 'id';
    public $fillable = ['trainee_id','instructor_id','program_id','diet_program_id','start_date'];

    public static function showAll()
    {
        $allocations = DietAllocation::all();
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

