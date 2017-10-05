<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gym extends Model {
    protected $table= 'gyms';
    protected $primaryKey = 'id';
    protected $fillable = ['user_id','name','email','dial_code','phone_number','country','city','open_time','close_time','latitude','longitude','address'];
    function  user(){
        return $this->belongsTo(User::class);
    }

    function branches(){
        return $this-> hasMany(Branch :: class);

    }

    function bootCamp(){
        return $this->hasMany(BootCamp :: class);

    }

    function batches(){
        return $this-> hasMany(Batch :: class);

    }

    function deals(){
        return $this-> hasMany(Deal :: class);

    }

    function trainee(){
        return $this-> hasMany(Trainee :: class);

    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    function feeInvoice(){
        return $this-> hasMany(FeeInvoice :: class);

    }

    function workoutPlan(){
        return $this->hasMany(WorkoutPlan :: class);

    }

    function services(){
        return $this-> hasMany(Service :: class);

    }

    function instructor(){
        return $this->hasMany(Instructor::class);
    }
}
