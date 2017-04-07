<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class WorkoutplanAssign extends Migration
{
    public function up()
    {
        Schema::create('wp_PlanAssign', function (Blueprint $table) {
            $table->integer('traineeId', true, true);
            $table->string('WorkoutPlanId');
            $table->integer('instructorId');
            $table->string('workoutPlanType');
            $table->string('Duration');
        });

    }

    public function down()
    {
        Schema::dropIfExists('wp_PlanAssign');
    }
}
