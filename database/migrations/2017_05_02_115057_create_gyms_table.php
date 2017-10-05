<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGymsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('gyms', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->string('title',60)->unique();
            $table->string('email',40)->unique();
            $table->string('country',60);
            $table->string('city',60);
            $table->string('dial_code',4);
            $table->UnsignedInteger('phone_number');
            $table->time('open_time');
            $table->time('close_time');
            $table->string('latitude',20);
            $table->string('longitude',20);
            $table->string('address',1024);
            $table->timestamps();
        });
        //
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('gyms');
    }
}