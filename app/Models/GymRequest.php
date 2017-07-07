<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class GymRequest extends Model {
    protected $table = 'gym_requests' ;
    protected $primaryKey = 'id';
//    public $timestamps = [];
    protected $fillable = ['name','email','country','city','dial_code','phone_number','latitude','longitude','address',];
}
