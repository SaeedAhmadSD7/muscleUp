<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Employee extends Migration
{
    public function up()
{
    Schema::create('employee', function (Blueprint $table) {
        $table->integer('EmployeeId', true);
        $table->integer('userId');
        $table->string('Name');
        $table->string('email');
        $table->string('Age');
        $table->integer('Contact Number');
        $table->string('Address');
    });

}

    public function down()
{
    Schema::dropIfExists('employee');
}
}
