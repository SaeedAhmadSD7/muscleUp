<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWbsDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wbs_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('wbs_id')->nullable();
            $table->unsignedInteger('set');
            $table->unsignedInteger('rep');
            $table->unsignedInteger('rest');
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
        Schema::dropIfExists('wbs_details');
    }
}
