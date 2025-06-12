<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PuddingController;
use App\Http\Controllers\TransactionController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'store']);
    Route::get('me', [AuthController::class, 'show']);
    Route::get('logout', [AuthController::class, 'destroy']);
});
Route::middleware('guest')->prefix('transactions')->group(function () {
    Route::get('/', [TransactionController::class, 'index']);
    Route::get('/{id}', [TransactionController::class, 'show']);
    Route::post('/', [TransactionController::class, 'store']);
    Route::put('/{id}', [TransactionController::class, 'update']);
    Route::delete('/{id}', [TransactionController::class, 'destroy']);
});
Route::middleware(['auth:sanctum', 'role:seller'])->prefix('pudding')->group(function () {
    Route::post('/', [PuddingController::class, 'store']);
    Route::post('/{id}', [PuddingController::class, 'update']);
    Route::delete('/{id}', [PuddingController::class, 'destroy']);
});

Route::get('pudding/', [PuddingController::class, 'index']);
Route::post('pudding/', [PuddingController::class, 'store']);
Route::get('pudding/{id}', [PuddingController::class, 'show']);