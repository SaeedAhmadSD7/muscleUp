<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use \App\Utils\Globals\EmployeeType;
class Employee extends Migration
{
    public function up()
{
    Schema::create('employee', function (Blueprint $table) {
        $table->integer('EmployeeId', true, true);
        $table->integer('gymId');
        $table->integer('branchId');
        $table->string('Name');
        $table->enum('employType',array_keys(EmployeeType::$types));
        $table->integer('Contact Number');
        $table->string('dateOfBirth');
        $table->string('sex');
        $table->string('email');
        $table->string('Address');
    });

}

    public function down()
{
    Schema::dropIfExists('employee');
}
}
