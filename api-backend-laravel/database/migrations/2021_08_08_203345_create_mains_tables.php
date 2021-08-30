<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMainsTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('color')->default("#444");
            $table->timestamps();
        });
        Schema::create('schools', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('color')->default("#d04245");
            $table->timestamps();
        });
        Schema::create('user_requests', function (Blueprint $table) {
            $table->id();
            $table->text('content');
            $table->foreignId('user_id');
            $table->timestamps();
        });
        Schema::create('user_request_files', function (Blueprint $table) {
            $table->id();
            $table->string('path');
            $table->string('url');
            $table->foreignId('request_id');
            $table->timestamps();
        });
        Schema::create('user_cities', function (Blueprint $table) {
            $table->id();
            $table->integer('note');
            $table->text('message');
            $table->foreignId('city_id');
            $table->foreignId('user_id');
            $table->timestamps();
        });
        Schema::create('user_schools', function (Blueprint $table) {
            $table->id();
            $table->integer('note');
            $table->text('message');
            $table->foreignId('school_id');
            $table->foreignId('user_id');
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
        Schema::dropIfExists('mains_tables');
    }
}
