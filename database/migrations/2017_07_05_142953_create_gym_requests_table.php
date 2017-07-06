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
            $table->string('name')->unique();
            $table->string('email')->unique();
            $table->text('address');
            $table->Integer('num_branches')->unsigned();
            $table->string('country');
            $table->string('city');
            $table->string('dial_code',4);
            $table->Integer('phone_number')->unsigned();
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
