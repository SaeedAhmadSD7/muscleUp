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
     *
     */
    public function up()
    {
        Schema::create('trainees', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('branch_id')->nullable();
            $table->integer('user_id');
            $table->string('code')->nullable(); //height in cm
            $table->float('height')->nullable(); //height in cm
            $table->dateTime('joining_date'); //height in cm
            $table->dateTime('quit_date')->nullable(); //height in cm
            $table->dateTime('admission_fee')->nullable(); //height in cm
            $table->dateTime('initial_fee')->nullable(); //height in cm
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
