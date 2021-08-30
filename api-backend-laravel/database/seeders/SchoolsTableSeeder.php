<?php


namespace Database\Seeders;


use App\Models\School;
use Illuminate\Database\Seeder;

class SchoolsTableSeeder extends Seeder
{

    public function run()
    {
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

        foreach ($schools as $school_data) {
            $school = new School();
            $school->fill($school_data);
            $school->save();
        }
    }

}
