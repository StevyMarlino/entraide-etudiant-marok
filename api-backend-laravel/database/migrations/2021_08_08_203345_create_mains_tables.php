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
        Schema::create('requests', function (Blueprint $table) {
            $table->id();
            $table->text('content');
            $table->foreignId('user_id');
            $table->timestamps();
        });
        Schema::create('request_files', function (Blueprint $table) {
            $table->id();
            $table->string('path');
            $table->foreignId('request_id');
            $table->timestamps();
        });
        Schema::create('city_notes', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->text('message')->nullable();
            $table->foreignId('city_id');
            $table->foreignId('user_id');
            $table->timestamps();
        });
        Schema::create('school_notes', function (Blueprint $table) {
            $table->id();
            $table->string('value');
            $table->text('message')->nullable();
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
