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
        Schema::create('Workout_Plans', function (Blueprint $table) {
            $table->increments('wPlanId');
            $table->integer('GymId');
            $table->string('wPlanType');
            $table->timestamps();
        });

    }

    public function down()
    {
        Schema::dropIfExists('Workout_Plan');
    }
}
