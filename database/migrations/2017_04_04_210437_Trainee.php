<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Trainee extends Migration
{
    public function up()
    {
        Schema::create('trainee', function (Blueprint $table) {
          //  $table->integer('traineeId', true, true);
        //    $table->integer('userId');
         //   $table->integer('gymId');
            $table->string('name');
         //   $table->integer('dateOfBirth');
            $table->string('email');
            $table->string('password');
        //    $table->string('sex');
         //   $table->integer('Contact Number');
         //   $table->string('Address');
         //   $table->string('foodAlergies');
         //   $table->string('medicalHistory');
        });

    }

    public function down()
    {
        Schema::dropIfExists('trainee');
    }
}
