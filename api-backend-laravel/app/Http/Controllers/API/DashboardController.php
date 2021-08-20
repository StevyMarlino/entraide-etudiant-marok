<?php

namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\School;
use App\Models\SchoolNote;
use App\Models\User;
use App\Models\UserRequest;
use Illuminate\Http\Request;

class DashboardController extends Controller
{

    /**
     * Get Dashboard home data
     * @param Request $request
     * @return array
     */
    public function home(Request $request)
    {
        // Database data
        $users = User::all();
        $students = $users->where('role', 'etudiant');
        $cities = City::with('notes')->get();
        $requests = UserRequest::with('files')->get();
        $schools = School::with('notes', 'students')->get();

        // Etudiant par ville
        $cities_chart = [];
        foreach ($cities as $c) {
            $percent = ($c->students->count() * $students->count()) / 100;
            $cities_chart['label'][] = $percent . "%";
            $cities_chart['series'][] = $percent;
            $c->students_percent = $percent;
        }

        // Evolution des étudiants par année
        $years_chart = [];
        $year = (int)date('Y');
        $year -= 3;
        for ($i = 1; $i <= 12; $i++) {
            $years_chart['label'][] = $i;
            for ($j = 0; $j <= 3; $j++) {
                $date = $year + $j;
                $years_chart['series'][$j] = User::query()
                    ->whereNotNull('city_id')
                    //->whereYear('school_registration_date', $date)
                    ->count();
            }
        }

        // Notes d'etablissement
        $notes_chart = [];
        $year = (int)date('Y');
        $year -= 3;
        for ($i = 1; $i <= 12; $i++) {
            $notes_chart['label'][] = $i;
            for ($j = 0; $j <= 3; $j++) {
                $date = $year + $j;
                $notes_chart['series'][$j] = SchoolNote::query()
                    ->whereYear('created_at', $date)
                    ->count();
            }
        }

        return compact(
            'users',
            'cities',
            'requests',
            'schools',
            'cities_chart',
            'years_chart',
            'notes_chart'
        );
    }

}
