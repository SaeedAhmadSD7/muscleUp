<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFeeInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('feeinvoice', function (Blueprint $table) {
            $table->integer('feeInvoiceId', true);
            $table->integer('gymId');
            $table->integer('traineeId');
            $table->integer('amount');
            $table->integer('endDate');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('feeinvoice');
    }
}

