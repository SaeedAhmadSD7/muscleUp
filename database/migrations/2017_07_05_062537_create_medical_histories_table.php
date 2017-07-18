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
//            $table->string('trainee_id');
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
        Schema::dropIfExists('medical_histories');
    }
}
