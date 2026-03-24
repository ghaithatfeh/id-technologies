<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PageVisit extends Model
{
    use HasFactory;

    protected $fillable = [
        'page',
        'url',
        'ip_address',
        'user_agent',
    ];
}
