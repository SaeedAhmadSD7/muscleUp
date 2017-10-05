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
            $table->unsignedSmallInteger('num_branches');
            $table->string('country');
            $table->string('city');
            $table->string('dial_code',4);
            $table->unsignedInteger('phone_number');
            $table->string('address',1024);
            $table->double('latitude')->default(0.0);
            $table->double('longitude')->default(0.0);
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
