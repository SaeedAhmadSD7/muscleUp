<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTraineesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trainees', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->nullable()->index();
//            $table->integer('gym_id')->index();
            $table->string('first_name');
            $table->string('last_name');
            $table->integer('dial_code')->default('1')->unsigned();
            $table->integer('phone_number')->unsigned();
            $table->string('birth_date');
            $table->enum('gender',['male','female'])->default('male');
            $table->string('address');
            $table->string('profile_img')->default('default.jpg');
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
        Schema::dropIfExists('trainees');
    }
}
