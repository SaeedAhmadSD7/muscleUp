<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('password');
            $table->string('email');
            $table->string('phone_no');
            $table->date('birth_date');
            $table->string('address');

//            $table->boolean('trainee')->default(false);
//            $table->boolean('admin')->default(false);
//            $table->boolean('gym')->default(false);
//            $table->boolean('instructor')->default(false);

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
        Schema::dropIfExists('users');

    }
}
