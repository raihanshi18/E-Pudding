<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class pudding extends Model
{
    protected $fillable = [
        'seller_id',
        'name',
        'price',
        'flavor',
        'stock',
        'sold',
    ];

    public function seller()
    {
        return $this->belongsTo(User::class, 'seller_id');
    }

    public function transactionDetails()
    {
        return $this->hasMany(transaction_detail::class);
    }
}
