<?php


namespace Database\Seeders;


use App\Models\City;
use App\Models\User;
use Illuminate\Database\Seeder;

class CitiesTableSeeder extends Seeder
{

    public function run()
    {
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

        foreach ($cities as $city_data) {
            $city = new City;
            $city->fill($city_data);
            $city->save();
        }
    }

}
