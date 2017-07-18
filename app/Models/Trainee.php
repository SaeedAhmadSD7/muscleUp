<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trainee extends Model
{
    protected $fillable = ["first_name","last_name","dial_code","phone_number","birth_date","gender","address"];

    function gym(){
        return $this-> belongsTo( Gym:: class);
    }

    function employee(){
        return $this->belongsTo(Employee:: class);
    }

    function feeInvoice()
    {
        return $this->hasMany(FeeInvoice:: class);
    }

    function deals()
    {
        return $this->hasOne(Deal:: class);
    }

    function services()
    {
        return $this->hasMany(Service:: class);
    }

    function userType()
    {
        return $this->belongsTo(UserType:: class);
    }

    function wpAssign()
    {
        return $this->hasOne(WpAssign:: class);
    }

    function wpDayDetail()
    {
        return $this->hasMany(WpDayDetail:: class);
    }

    function batches()
    {
        return $this->belongsToMany(Batch:: class);
    }

    function bootCamp()
    {
        return $this->belongsToMany(BootCamp:: class);
    }

    function measurements()
    {
        return $this->hasOne(Measurement:: class);
    }
    function user(){
        return $this->belongsTo(user::class);
    }

    public function instructor()
    {
        return $this->belongsTo('App\Models\Instructor');
    }
    public function medicalhistory(){
        return $this->hasOne(MedicalHistory::class);
    }

}
