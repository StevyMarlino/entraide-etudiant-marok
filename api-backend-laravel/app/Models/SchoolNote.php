<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SchoolNote extends Model
{
    use HasFactory;

    protected $fillable = [
        'value',
        'message',
        'school_id'
    ];

    public function school()
    {
        return $this->belongsTo(School::class);
    }
}
