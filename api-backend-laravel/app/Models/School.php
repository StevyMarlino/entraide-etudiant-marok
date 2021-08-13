<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function notes()
    {
        return $this->hasMany(SchoolNote::class);
    }

    public function students() {
        return $this->hasMany(User::class);
    }

}
