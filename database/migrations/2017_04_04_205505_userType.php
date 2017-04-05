<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserType extends Migration
{
    public function up()
    {
        Schema::create('User_Type', function (Blueprint $table) {
            $table->integer('userId', true, true);
            $table->integer('GymId');
            $table->integer('BranchId');
            $table->string('userType');
        });

    }

    public function down()
    {
        Schema::dropIfExists('User_Type');
    }
}
