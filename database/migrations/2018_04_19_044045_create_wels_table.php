<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wels', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('sr')->nullable();
            $table->string('student_id',20)->nullable();
            $table->string('form_no',20)->nullable();
            $table->string('old_student_id',20)->nullable();
            $table->string('vu_reg_no',20)->nullable();
            $table->string('name',100)->nullable();
            $table->string('father',100)->nullable();
            $table->string('study_program',100)->nullable();
            $table->string('degree_program',10)->nullable();
            $table->string('pvc_code',20)->nullable();
            $table->string('pvc_address',500)->nullable();
            $table->string('study_at',20)->nullable();
            $table->string('student_mailing_address',500)->nullable();
            $table->string('student_permanent_address',500)->nullable();
            $table->string('pvc_email',40)->nullable();
            $table->string('student_vu_email',40)->nullable();
            $table->string('student_personal_email',40)->nullable();
            $table->string('student_phone_no',40)->nullable();
            $table->string('mobile',40)->nullable();
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
        Schema::dropIfExists('wels');
    }
}
