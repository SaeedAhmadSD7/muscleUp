<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTraineeActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trainee_activities', function (Blueprint $table) {
            $table->increments('id');

            $table->integer('trainee_id');
            $table->date('phase_id');
            $table->integer('day_id');
            $table->integer('diet_plans_id');
            $table->date('wbs_id');
            $table->integer('exercise_id');
            $table->integer('meal_id');
            $table->integer('food_id');
            $table->smallInteger('set');
            $table->smallInteger('rep');
            $table->time('rest');
            $table->integer('quantity');
            $table->text('calories');
            $table->time('duration');
            /**
             * Progress is acheievd in points for example 50 calories = 1 points and 1 rep = 1point
             * like this 300 calories = 6 points and 40 reps of 4 sets per 10 reps = 40 points.
             */
            $table->float('progress');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trainee_activities');
    }
}
