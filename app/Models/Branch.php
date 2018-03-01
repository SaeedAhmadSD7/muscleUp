<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Branch
 *
 * @property int $id
 * @property int $gym_id
 * @property string $title
 * @property string|null $country
 * @property string|null $city
 * @property string|null $address
 * @property string|null $phone_number
 * @property string|null $opening_time
 * @property string|null $closing_time
 * @property float $latitude
 * @property float $longitude
 * @property string $is_main
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Employee[] $employee
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch whereClosingTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch whereGymId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch whereIsMain($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch whereOpeningTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch wherePhoneNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Branch whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Branch extends Model
{
    function gym(){
        return $this-> belongsTo(Gym::class);

    }

    function employee(){
        return $this->hasMany(Employee::class);
    }

    function instructor(){
        return $this->hasMany(Instructor::class);
    }

    function trainee(){
        return $this->hasMany(Trainee::class);
    }

    public function fetchGymInstructors($branch)
    {
        return $branch->instructor()->count();
    }
    public function fetchGymTrainees($branch)
    {
        return $branch->trainee()->count();
    }
}
