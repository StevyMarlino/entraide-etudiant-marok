<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CityNote extends Model
{
    use HasFactory;

    protected $fillable = [
        'value',
        'message',
        'city_id'
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }

}
