<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \App\Utils\Globals\InstructorType;

class InstructorTrainee extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instructor_trainee', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('instructor');
            $table->unsignedInteger('trainee');
            $table->enum('type', array_values(InstructorType::$instructorTypes));
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
        Schema::dropIfExists('instructor_trainee');
    }
}
