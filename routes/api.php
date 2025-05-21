<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PuddingController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
});
Route::middleware(['auth:sanctum', 'role:seller'])->prefix('puddings')->middleware('')->group(function () {
    Route::get('/', [PuddingController::class, 'index']);
    Route::post('/', [PuddingController::class, 'store']);
    Route::get('/{id}', [PuddingController::class, 'show']);
    Route::post('/{id}', [PuddingController::class, 'update']);
    Route::delete('/{id}', [PuddingController::class, 'destroy']);
});
