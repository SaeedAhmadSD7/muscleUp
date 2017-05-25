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
            $table->string('f-name');
            $table->string('l-name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('country');
            $table->string('city');
            $table->date('birth-date');
            $table->enum('sex',['male','female']);
            $table->integer('contact-number')->unsigned();
            $table->text('address');
            $table->enum('user-type',['admin','gym','trainee','instructor']);
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
