<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTraineesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trainees', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('branch_id');
            $table->integer('user_id');
            $table->float('weight'); //weight in lbs
            $table->float('height'); //height in cm
            $table->float('bmi')->nullable(); //BODY MASS INDEX
            $table->float('bfp')->nullable(); //BODY FAT PERCENTAGE: height in cm
            $table->softDeletes();
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
        Schema::dropIfExists('trainees');
    }
}
