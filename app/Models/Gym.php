<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Utils\Globals\GlobalsConst;

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

    public function fetchGymsRecord() {

        $gym = $this->paginate(GlobalsConst::RECORD_LIMIT);
        return $gym;
    }
}
