<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGymRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gym_requests', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title',60)->unique();
            $table->string('email',40)->unique();
            $table->tinyInteger('num_branches');
            $table->tinyInteger('num_employees');
            $table->tinyInteger('num_trainees');
            $table->string('country');
            $table->string('city');
            $table->string('phone_number');
            $table->string('address',1024);
            $table->decimal('latitude')->default(0.0);
            $table->decimal('longitude')->default(0.0);
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
        Schema::dropIfExists('gym_requests');
    }
}
