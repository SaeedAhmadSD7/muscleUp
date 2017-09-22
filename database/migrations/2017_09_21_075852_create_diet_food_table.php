<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDietFoodTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diet_food',function(Blueprint $table) {
            $table->increments('id');
            $table->integer('food_id');
            $table->integer('diet_program_id');
            $table->integer('meal_id');
            $table->smallInteger('quantity');
            $table->text('calories');
            $table->string('taketime');
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
        Schema::dropIfExists('diet_food');
    }
}
