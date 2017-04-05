<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class WorkoutplanAssign extends Migration
{
    public function up()
    {
        Schema::create('wp_PlanAssign', function (Blueprint $table) {
            $table->integer('traineeId', true);
            $table->integer('instructorId',  true);
            $table->string('WorkoutPlanId');
            $table->string('workoutPlanType');
            $table->string('Duration');
        });

    }

    public function down()
    {
        Schema::dropIfExists('wp_PlanAssign');
    }
}
