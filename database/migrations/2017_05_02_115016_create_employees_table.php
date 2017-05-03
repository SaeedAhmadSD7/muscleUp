<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Utils\Globals\EmployeeType;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee', function (Blueprint $table) {
            $table->integer('EmployeeId', true, true);
            $table->integer('gymId');
            $table->integer('branchId');
            $table->string('Name');
            $table->enum('employType',array_keys(EmployeeType::$types));
            $table->string('password',60);
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
