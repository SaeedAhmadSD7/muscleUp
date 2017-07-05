<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class GymRequest extends Model {
    protected $fillable = ['name','email','country','city','dial_code','phone_number','address'];
}
