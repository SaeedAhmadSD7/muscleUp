<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFeeLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fee_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('gym_id');
            $table->integer('branch_id');
            $table->integer('trainee_id');
            $table->enum('fee_type', ['Annually', 'SemiAnnually', 'Quarterly', 'Monthly']);
            $table->integer('amount');
            $table->dateTime('payment_date');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fee_logs');
    }
}

