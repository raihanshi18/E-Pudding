<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    function login(Request $request)
    {
        $credential = $request->validate([
            'email' => 'required|email|exists:users,email', 
            'password' => 'required',
        ]);

        $user = User::whereEmail($request['email'])->first();

        if(!$user || !Hash::check($request['password'], $user->password)) {
            return response([
                "message" => "Wrong email or password"
            ], 401);
        }

        $token = $user->createToken($user->name . '-AuthToken')->plainTextToken;
        return response([
            "accesstoken" => $token
        ]);

    }


    function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role_id' => 3
        ]);

        return response([
            "message" => "Register success"
        ], 201);
    }
}
