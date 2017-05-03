<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkoutPlansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Workout_Plan', function (Blueprint $table) {
            $table->integer('wPlanId', true,true);
            $table->integer('GymId');
            $table->string('wPlanType');
        });

    }

    public function down()
    {
        Schema::dropIfExists('Workout_Plan');
    }
}
