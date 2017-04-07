<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Initialmangament extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('initialmanagement', function (Blueprint $table) {
            $table->integer('traineeId', true);
            $table->integer('employeeId');
            $table->string('medicalHistory');
            $table->string('currentFitnessData');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('initialmanagement');
    }
}
