<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\School;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create([
            "email" => "admin@admin.com"
        ]);
        User::factory(10)->create();
        // Cities 
        $cities = [
            [
                'name' => 'Ville 1'
            ],
            [
                'name' => 'Ville 2'
            ],
            [
                'name' => 'Ville 3'
            ],
            [
                'name' => 'Ville 4'
            ],

        ];
        // Schools
        $schools = [
            [
                'name' => 'Ecole 1',
            ],
            [
                'name' => 'Ecole 2',
            ],
            [
                'name' => 'Ecole 3',
            ],
            [
                'name' => 'Ecole 4',
            ],
        ];

        foreach($cities as $city) {
            City::query()->create($city);
        }
        foreach($schools as $school) {
           School::query()->create($school); 
        }
    }
}
