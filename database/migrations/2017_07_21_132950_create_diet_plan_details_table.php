<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDietPlanDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diet_plan_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('diet_plan_id');
            $table->integer('meal_id');
            $table->integer('food_id');
            $table->integer('quantity');
            $table->text('calories');
            $table->time('duration');
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
        Schema::dropIfExists('diet_plan_details');
    }
}
