<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\GymRequest
 *
 * @property int $id
 * @property string $title
 * @property string $email
 * @property int $num_branches
 * @property int $num_employees
 * @property int $num_trainees
 * @property string $country
 * @property string $city
 * @property string $phone_number
 * @property string $address
 * @property float $latitude
 * @property float $longitude
 * @property \Carbon\Carbon|null $created_at
 * @property \Carbon\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest whereNumBranches($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest whereNumEmployees($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest whereNumTrainees($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest wherePhoneNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\App\Models\GymRequest whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class GymRequest extends Model {
    protected $table = 'gym_requests' ;
    protected $primaryKey = 'id';
    protected $fillable = ['title','email','address','num_branches','country','city','dial_code','phone_number','latitude','longitude'];
}
