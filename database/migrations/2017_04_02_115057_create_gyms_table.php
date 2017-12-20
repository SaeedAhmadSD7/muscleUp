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
            $table->string('title',60);
            $table->string('logo',40)->nullable();
            $table->string('website',40)->nullable();
            $table->string('country',60)->nullable();
            $table->string('city',60)->nullable();
            $table->string('address',1024)->nullable();
            $table->string('phone_number',20)->nullable();
            $table->time('opening_time')->nullable();
            $table->time('closing_time')->nullable();
            $table->decimal('latitude')->default(0.0);
            $table->decimal('longitude')->default(0.0);
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