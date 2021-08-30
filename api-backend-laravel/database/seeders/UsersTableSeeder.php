<?php


namespace Database\Seeders;


use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{

    public function run()
    {
        User::factory()->create([
            "email" => "admin@app.com",
            'role' => 'admin'
        ]);
        User::factory([
            'email' => 'etudiant@gmail.com',
            'role' => 'etudiant'
        ])->create();
    }

}
