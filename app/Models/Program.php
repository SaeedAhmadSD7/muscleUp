<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Program
 *
 * @property int $id
 * @property int|null $gym_id
 * @property string $title
 * @property string|null $description
 * @property string|null $deleted_at
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \App\Models\DietAllocation $allocation
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Program[] $exercise
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Phase[] $phase
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Program whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Program whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Program whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Program whereGymId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Program whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Program whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Program whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Program extends Model {

    protected $table= 'programs';
    protected $primaryKey = 'id';
    protected $fillable = ['title','description','gym_id'];


    public function phase() {
        return $this->belongsToMany(Phase::class,'programs_phases','program_id','phase_id')->withTimestamps();
    }

    public function exercise() {
        return $this->hasManyThrough(Program::class, Exercise::class);
    }

    public function allocation() {
        return $this->hasOne(DietAllocation::class);
    }



    public static function showAll() {

        $programs = Program::all();
        return $programs;
    }

    public static function createUpdateProgram($formData) {

        if(array_key_exists('id',$formData)) {
            $program = Program::find($formData['id']);
        } else {
            $program = new Program();
        }

        $program->title = $formData['title'];
        $program->description = $formData['description'];
        $program->gym_id = $formData['gym_id'];
        $program->save();
        $program->phase()->detach();
        $program->phase()->attach($formData['phase_id']);
    }

    public static function deleteProgram($id) {

        $program = self::find($id);
        $program->phase()->detach();
        $program->delete();
    }
}
