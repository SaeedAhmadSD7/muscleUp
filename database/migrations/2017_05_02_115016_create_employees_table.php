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
        Schema::create('employees', function (Blueprint $table) {
            $table->integer('id', true, true);
            $table->integer('user_id');
            $table->dateTime('joining_date');
            $table->dateTime('quit_date');
            $table->dateTime('previous_salary');
            $table->dateTime('joining_salary');
            $table->smallInteger('exp_years');
            $table->string('exp_description',1024);
        });

    }

    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
