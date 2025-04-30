<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class address extends Model
{
    protected $fillable = [
        'user_id',
        'street',
        'city',
        'province',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
