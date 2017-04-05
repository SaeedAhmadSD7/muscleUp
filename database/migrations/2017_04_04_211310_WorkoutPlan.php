<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class WorkoutPlan extends Migration
{
    public function up()
    {
        Schema::create('Workout_Plan', function (Blueprint $table) {
            $table->integer('wPlanId', true);
            $table->integer('GymId');
            $table->string('wPlanType');
        });

    }

    public function down()
    {
        Schema::dropIfExists('Workout_Plan');
    }
}
