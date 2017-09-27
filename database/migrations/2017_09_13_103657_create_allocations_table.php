<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAllocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('allocations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('trainee_id')->unique();
            $table->integer('instructor_id');
            $table->integer('program_id')->nullable();
            $table->integer('diet_program_id')->nullable();
            $table->date('start_date')->nullable();
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
        Schema::dropIfExists('allocations');
    }
}
