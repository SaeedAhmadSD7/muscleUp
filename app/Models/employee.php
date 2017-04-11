<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class employee extends Model
{
    function gym(){
        return $this-> belongsTo(gym :: class);

    }
    function trainee(){
        return $this-> hasMany( trainee:: class);

    }
    function branches(){
        return $this-> hasMany( branches:: class);

    }
    function batches(){
        return $this-> hasmany( batches:: class);

    }
    function deals(){
        return $this-> hasmany( deals:: class);

    }
    function bootcamp(){
        return $this-> hasone( bootcamp:: class);

    }
    function feeinvoice(){
        return $this-> hasone(feeinvoice :: class);

    }
    function initialmanagement(){
        return $this-> hasmany(initialmanagement :: class);

    }
    function services(){
        return $this-> hasmany(services :: class);

    }
    function user_Type(){
        return $this-> hasmany(user_Type :: class);

    }
    function workout_Plan(){
        return $this-> hasmany(workout_Plan :: class);

    }
    function wp_DayDetail(){
        return $this-> hasmany(wp_DayDetail :: class);

    }
    function wp_PlanAssign(){
        return $this-> hasmany(wp_PlanAssign :: class);

    }
   

}
