<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class role extends Model
{
    protected $fillabel = ['name'];

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
