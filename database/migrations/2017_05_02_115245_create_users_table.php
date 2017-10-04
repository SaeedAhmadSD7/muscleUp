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
            $table->enum('type',['admin','gym','trainee','employee','instructor']);
            $table->string('email',40)->unique();
            $table->string('password',256);
            $table->string('first_name',35);
            $table->string('last_name',35);
            $table->date('dob');
            $table->enum('gender',['male','female']);
            $table->integer('dial_code')->default('1')->unsigned();
            $table->integer('phone_number')->unsigned();
            $table->string('profile_img')->default('default.jpg');
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
