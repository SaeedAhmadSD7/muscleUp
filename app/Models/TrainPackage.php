<?php

namespace App;
namespace App\Models;

use App\Trainee;
use Illuminate\Database\Eloquent\Model;

class TrainPackage extends Model
{
    function trainee()
    {
        return $this->belongsTo(Trainee::class);
    }

}
