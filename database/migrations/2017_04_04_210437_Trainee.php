<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Trainee extends Migration
{
    public function up()
    {
        Schema::create('trainee', function (Blueprint $table) {
            $table->integer('traineeId', true, true);
            $table->integer('userId');
            $table->string('Name');
            $table->string('email');
            $table->string('Age');
            $table->integer('Contact Number');
            $table->string('Address');
        });

    }

    public function down()
    {
        Schema::dropIfExists('trainee');
    }
}
