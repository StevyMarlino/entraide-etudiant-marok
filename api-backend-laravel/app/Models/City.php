<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    protected $guarded = [
      'students_percent'
    ];

    public function notes()
    {
        return $this->hasMany(UserCity::class);
    }

    public function students()
    {
        return $this->hasMany(User::class);
    }

}
