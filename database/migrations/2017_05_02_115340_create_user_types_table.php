<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('User_Type', function (Blueprint $table) {
            $table->integer('userId', true, true);
            $table->integer('GymId');
            $table->string('userType');
        });

    }

    public function down()
    {
        Schema::dropIfExists('User_Type');
    }
}
