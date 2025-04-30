<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class transaction_detail extends Model
{
    protected $fillable = [
        'transaction_id',
        'pudding_id',
        'quantity',
        'subtotal',
    ];

    public function transaction()
    {
        return $this->belongsTo(Transaction::class);
    }

    public function pudding()
    {
        return $this->belongsTo(Pudding::class);
    }
}
