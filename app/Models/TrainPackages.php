<?php
namespace App\Models;

use App\Models\Train;
use Illuminate\Database\Eloquent\Model;

class TrainPackage extends Model
{
    function train()
    {
        return $this->belongsTo(train::class);
    }

}