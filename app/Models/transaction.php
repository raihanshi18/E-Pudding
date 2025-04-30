<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class transaction extends Model
{
    protected $fillable = [
        'user_id',
        'date',
        'pickup_date',
        'total_price',
        'payment_method',
        'status',
    ];

    protected $casts = [
        'date' => 'date',
        'pickup_date' => 'date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function transactionDetails()
    {
        return $this->hasMany(transaction_detail::class);
    }

    public function puddings()
    {
        return $this->belongsToMany(Pudding::class, 'transaction_details')
            ->withPivot('quantity', 'subtotal');
    }
}
