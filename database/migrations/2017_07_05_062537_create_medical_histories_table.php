<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMedicalHistoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_histories', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('asthma');
            $table->boolean('diabetes');
            $table->boolean('blood_pressure');
            $table->boolean('cholesterol');
            $table->boolean('heart_murmur');
            $table->boolean('knee_problems');
            $table->boolean('arthritis');
            $table->boolean('dizziness');
            $table->boolean('back_pain');
            $table->boolean('neck_pain');
            $table->boolean('kidney_condition');
            $table->boolean('liver_condition');
            $table->boolean('heart_palpitation');
            $table->boolean('glandular_fever');
            $table->boolean('smoke');
            $table->boolean('drink');


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
        Schema::dropIfExists('medical_histories');
    }
}
