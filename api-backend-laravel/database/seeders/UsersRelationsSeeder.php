<?php


namespace Database\Seeders;


use App\Models\City;
use App\Models\School;
use App\Models\User;
use App\Models\UserRequest;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class UsersRelationsSeeder extends Seeder
{

    public function run()
    {
        $user = User::query()->where('email','etudiant@gmail.com')->first();
        $userRequest = UserRequest::query()->create([
            'user_id' => $user->id,
            'content' => 'Message de le requete'
        ]);
        $userRequest->files()->create([
            'path' => 'request.png',
            'url' => url('request.png')
        ]);
        $user->city()->create([
            'note' => 4,
            'message' => 'Message vile',
            'city_id' => City::query()->first()->id
        ]);
        $user->school()->create([
            'note' => 4,
            'message' => 'Message etablissement',
            'school_id' => School::query()->first()->id
        ]);
        $students = User::factory(15)->create();
        foreach ($students as $student) {
            $studentRequest = UserRequest::query()->create([
                'user_id' => $student->id,
                'content' => 'Message de le requete'
            ]);
            $studentRequest->files()->create([
                'path' => 'request.png',
                'url' => url('request.png')
            ]);
            $student->city()->create([
                'note' => Arr::random([2,3,4,5]),
                'message' => 'Message ville',
                'city_id' => City::query()->first()->id
            ]);
            $student->school()->create([
                'note' => Arr::random([2,3,4,5]),
                'message' => 'Message etablissement',
                'school_id' => School::query()->first()->id
            ]);
            $student->update([
                'school_registration_date' => now()
            ]);
        }
    }

}
