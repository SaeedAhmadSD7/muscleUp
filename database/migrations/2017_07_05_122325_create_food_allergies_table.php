<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFoodAllergiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('food_allergies', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('egg_allergies');
            $table->boolean('fish_allergies');
            $table->boolean('peanut_allergies');
            $table->boolean('treenut_allergies');
            $table->boolean('shellfish_allergies');
            $table->boolean('wheat_allergies');
            $table->boolean('soy_allergies');
            $table->boolean('meat_allergies');
            $table->boolean('seed_allergies');
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
        Schema::dropIfExists('food_allergies');
    }
}
