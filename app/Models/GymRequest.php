<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class GymRequest extends Model {
    protected $table = 'gym_requests' ;
    protected $primaryKey = 'id';
    protected $fillable = ['title','email','address','num_branches','country','city','dial_code','phone_number','latitude','longitude'];
}
