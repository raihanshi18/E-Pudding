<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PuddingController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'store']);
});
Route::middleware(['auth:sanctum', 'role:seller'])->prefix('pudding')->group(function () {
    Route::post('/', [PuddingController::class, 'store']);
    Route::post('/{id}', [PuddingController::class, 'update']);
    Route::delete('/{id}', [PuddingController::class, 'destroy']);
});

Route::get('pudding/', [PuddingController::class, 'index']);
Route::get('pudding/{id}', [PuddingController::class, 'show']);