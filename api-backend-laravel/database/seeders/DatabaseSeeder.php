<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\CityNote;
use App\Models\School;
use App\Models\SchoolNote;
use App\Models\User;
use App\Models\UserRequest;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

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
            "email" => "admin@admin.com",
            'role' => 'admin'
        ]);
        $defaultUser = User::factory([
            'email' => 'user@user.com',
            'role' => 'etudiant'
        ])->create();

        // Cities
        $cities = [
            [
                'name' => 'Casablanca',
                'color' => "#5cb85c"
            ],
            [
                'name' => 'Fez',
                'color' => "#5bc0de"
            ],
            [
                'name' => 'Tangier',
                'color' => "#f0ad4e"
            ],
        ];

        // Schools
        $schools = [
            [
                'name' => 'UEMF',
                'color' => "#d9534f"
            ],
            [
                'name' => 'LAS',
                'color' => "#f7973e"
            ],
            [
                'name' => 'AEROSUP - Casablanca',
                'color' => "#cc1a7c"
            ]
        ];

        for ($i = 1; $i < 6; $i++) {
            $r = new UserRequest;
            $r->fill([
                'content' => 'requetes utilisateur ' . $i,
                'user_id' => $defaultUser->id
            ]);
            $r->save();
            for ($j = 1; $j < 6; $j++) {
                $r->files()->create([
                    'path' => url('note.png')
                ]);
            }
        }

        foreach ($cities as $city_data) {
            $city = new City;
            $city->fill($city_data);
            $city->save();
            for ($i = 1; $i < 5; $i++) {
                $city->notes()->create([
                    'value' => $i,
                    'message' => "",
                    'user_id' => $defaultUser->id
                ]);
            }
        }
        foreach ($schools as $school_data) {
            $school = new School();
            $school->fill($school_data);
            $school->save();
            for ($i = 1; $i < 5; $i++) {
                $school->notes()->create([
                    'value' => $i,
                    'message' => "",
                    'user_id' => $defaultUser->id
                ]);
            }
        }

        foreach (City::all() as $city) {
            User::factory(
                Arr::random([10, 40, 80, 120, 160])
            )->create([
                'city_id' => $city->id
            ]);
        }

        foreach (School::all() as $school) {
            User::factory(35)->create([
                'school_id' => $school->id,
                'school_registration_date' => Arr::random([
                    Carbon::createFromDate("2016", "2", "10"),
                    Carbon::createFromDate("2017", "4", "10"),
                    Carbon::createFromDate("2018", "6", "10"),
                    Carbon::createFromDate("2019", "8", "10"),
                    Carbon::createFromDate("2020", "9", "10"),
                    Carbon::createFromDate("2014", "11", "10"),
                ])
            ]);
        }

        CityNote::query()->create([
            'value' => 4,
            'message' => "",
            'city_id' => City::query()->first()->id,
            'user_id' => $defaultUser->id
        ]);
        SchoolNote::query()->create([
            'value' => 2,
            'message' => "",
            'school_id' => School::query()->first()->id,
            'user_id' => $defaultUser->id
        ]);

        $defaultUser->query()->update([
            'school_registration_date' => now()
        ]);

    }
}
