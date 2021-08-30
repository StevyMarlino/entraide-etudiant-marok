<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'email_verified_at',
        'password',
        'access_token',
        'last_name',
        'family_name',
        'facebook_url',
        'tweeter_url',
        'cover',
        'avatar',
        'born_at',
        'gender',
        'role',
        'phone',
        'school_id',
        'city_id',
        'school_registration_date'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected $appends = [
        'avatar_url',
        'cover_url'
    ];

    public function getAvatarUrlAttribute()
    {
        return url($this->attributes['avatar']);
    }

    public function getCoverUrlAttribute()
    {
        return url($this->attributes['avatar']);
    }

    public function city()
    {
        return $this->hasOne(UserCity::class);
    }

    public function school()
    {
        return $this->hasOne(UserSchool::class);
    }

    public function requests()
    {
        return $this->hasMany(UserRequest::class);
    }


}
