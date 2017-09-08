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
            $table->integer('user_id')->nullable();
            $table->dateTime('joining_date');
            $table->dateTime('quit_date');
            $table->integer('previous_salary');
            $table->integer('joining_salary');
            $table->smallInteger('exp_years');
            $table->string('exp_description',1024);
            $table->timestamps();
        });

    }

    public function down()
    {
        Schema::dropIfExists('employees');
    }
}
