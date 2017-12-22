<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Utils\Globals\GlobalsConst;

/**
 * App\Models\Gym
 *
 * @property int $id
 * @property string $title
 * @property string|null $logo
 * @property string|null $website
 * @property string|null $country
 * @property string|null $city
 * @property string|null $address
 * @property string|null $phone_number
 * @property string|null $opening_time
 * @property string|null $closing_time
 * @property float $latitude
 * @property float $longitude
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Branch[] $branches
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\Instructor[] $instructor
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $users
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\WorkoutPlan[] $workoutPlan
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym whereClosingTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym whereLogo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym whereOpeningTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym wherePhoneNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\Gym whereWebsite($value)
 * @mixin \Eloquent
 */
class Gym extends Model {
    protected $table= 'gyms';
    protected $primaryKey = 'id';
    protected $fillable = ['branch_id','name','email','phone_number','country','city','latitude','longitude','address'];

    function  users(){
        return $this->hasMany(User::class);
    }

    public function branches(){
        return $this->hasMany(Branch::class);

    }

    function deals(){
        return $this-> hasMany(Deal::class);

    }

    function trainee(){
        return $this-> hasMany(Trainee::class);

    }


    function instructor(){
        return $this->hasMany(Instructor::class);
    }

    public function fetchGymsRecord() {

        $gym = $this->paginate(GlobalsConst::RECORD_LIMIT);
        return $gym;
    }
}
