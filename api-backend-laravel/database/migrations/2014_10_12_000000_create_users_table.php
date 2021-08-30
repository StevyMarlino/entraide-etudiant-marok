<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('access_token')->nullable();
            $table->string('last_name');
            $table->string('family_name');
            $table->string('facebook_url')->nullable();
            $table->string('tweeter_url')->nullable();
            $table->string('cover')->nullable();
            $table->string('avatar')->nullable();
            $table->date('born_at');
            $table->enum('gender',['masculin','feminin']);
            $table->enum('role',['admin','etudiant']);
            $table->string('phone');
            $table->foreignId('school_id')->nullable();
            $table->foreignId('city_id')->nullable();
            $table->dateTime('school_registration_date')->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
