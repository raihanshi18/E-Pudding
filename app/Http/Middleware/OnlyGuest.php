<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;
use Symfony\Component\HttpFoundation\Response;

class OnlyGuest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        \Log::info('OnlyGuest middleware running');

        // used if you try at the postman
        if ($bearerToken = $request->bearerToken()) {
            \Log::info('Bearer token detected: ' . $bearerToken);
            
            $token = PersonalAccessToken::findToken($bearerToken);
            
            if ($token && $token->tokenable) {
                \Log::info('User terdeteksi via token: ' . $token->tokenable->email);
                return response()->json([
                    'message' => 'You are already logged in.',
                ], 403);
            }
        }

        if(Auth::check()){
            return response()->json([
                "message" => 'You are already logged in.'
            ], 403);
        }


        return $next($request);
    }
}
