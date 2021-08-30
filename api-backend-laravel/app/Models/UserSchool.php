<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserSchool extends Model
{
    use HasFactory;

    protected $fillable = [
        'note',
        'message',
        'school_id',
        'user_id'
    ];

    public function school()
    {
        return $this->belongsTo(School::class);
    }
}
