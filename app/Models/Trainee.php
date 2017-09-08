<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trainee extends Model
{
    protected $fillable = [];

    public function gym(){
        return $this-> belongsTo( Gym:: class);
    }

    public function employee(){
        return $this->belongsTo(Employee:: class);
    }

    public function feeInvoice()
    {
        return $this->hasMany(FeeInvoice:: class);
    }

    public function deals()
    {
        return $this->hasOne(Deal:: class);
    }

    public function services()
    {
        return $this->hasMany(Service:: class);
    }

    public function userType()
    {
        return $this->belongsTo(UserType:: class);
    }

    public function wpAssign()
    {
        return $this->hasOne(WpAssign:: class);
    }

    public function wpDayDetail()
    {
        return $this->hasMany(WpDayDetail:: class);
    }

    public function batches()
    {
        return $this->belongsToMany(Batch:: class);
    }

    public function bootCamp()
    {
        return $this->belongsToMany(BootCamp:: class);
    }

    public function measurements()
    {
        return $this->hasOne(Measurement:: class);
    }
    public function user(){
        return $this->belongsTo(user::class);
    }

    public function instructor()
    {
        return $this->belongsTo(Instructor::Class);
    }

    public function medicalhistory(){
        return $this->hasOne(MedicalHistory::class);
    }
    public function workout(){
        return $this->hasOne(Workout::class);

    }
}
