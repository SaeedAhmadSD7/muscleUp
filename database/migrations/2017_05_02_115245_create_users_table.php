<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \App\Utils\Globals\UserType;

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
            $table->integer('gym_id')->nullable();
            $table->integer('branch_id')->nullable();
            $table->enum('type', array_values(UserType::$userTypes));
            $table->string('email',60)->unique();
            $table->string('password',64);
            $table->string('first_name',40);
            $table->string('last_name',40)->nullable();
            $table->date('dob')->nullable();
            $table->enum('gender',['male','female'])->nullable();
            $table->string('phone_number',20)->nullable();
            $table->string('profile_img')->default('default.jpg');
            $table->string('country',50)->nullable();
            $table->string('city',50)->nullable();
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
