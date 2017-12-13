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
            $table->enum('type',['trainee','admin','gym','employee','instructor']);
            $table->string('email',60)->unique();
            $table->string('password',64);
            $table->string('first_name',40);
            $table->string('last_name',40)->nullable();
            $table->date('dob')->nullable();
            $table->enum('gender',['male','female'])->nullable();
            $table->integer('dial_code')->default('1')->unsigned()->nullable();
            $table->integer('phone_number')->unsigned()->nullable();
            $table->string('profile_img')->default('default.jpg');
            $table->string('address',1024)->nullable();
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
