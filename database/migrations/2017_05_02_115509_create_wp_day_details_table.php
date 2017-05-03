<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWpDayDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_DayDetail', function (Blueprint $table) {
            $table->integer('traineeId', true, true);
            $table->string('WorkoutPlanId');
            $table->integer('employeeId');
            $table->string('wPlanDay');
        });

    }

    public function down()
    {
        Schema::dropIfExists('wp_DayDetail');
    }
}
