<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRequestFile extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
        'url',
        'request_id'
    ];

}
