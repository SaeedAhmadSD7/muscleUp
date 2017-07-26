<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInstructorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('instructors', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id')->index();
//            $table->unsignedInteger('branch_id')->index();
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->string('birth_date');
            $table->string('dial_code',4)->default('1');
            $table->UnsignedInteger('phone_number');
            $table->enum('gender',['male','female'])->default('male');
            $table->string('exp_years');
            $table->string('exp_desc');
            $table->string('address');
            $table->rememberToken();
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
        Schema::dropIfExists('instructors');
    }
}
