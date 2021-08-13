<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRequest extends Model
{
    use HasFactory;

    protected $table = 'requests';

    protected $fillable = [
        'content'
    ];

    public function files()
    {
        return $this->hasMany(RequestFile::class,'request_id');
    }

}
