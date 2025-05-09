<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Exception;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $credential = $request->validate([
                'email' => 'required|email|exists:users,email',
                'password' => 'required',
            ]);

            $user = User::whereEmail($request['email'])->first();

            if (!$user || !Hash::check($request['password'], $user->password)) {
                return response([
                    "message" => "Wrong email or password"
                ], 401);
            }

            $token = $user->createToken($user->name . '-AuthToken')->plainTextToken;
            return response([
                "accesstoken" => $token
            ]);
        } catch (Exception $e) {
            return response([
                'message' => 'Login failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function index()
    {
        try {
            return User::all();
        } catch (Exception $e) {
            return response([
                'message' => 'Failed to retrieve users',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $user = User::find($id);
            if (!$user) {
                return response(["message" => "User not found"], 404);
            }
            return $user;
        } catch (Exception $e) {
            return response([
                'message' => 'Failed to show user',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function store(Request $request)
    {
        try {
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
        } catch (Exception $e) {
            return response([
                'message' => 'Register failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $user = User::find($id);
            if (!$user) {
                return response(["message" => "User not found"], 404);
            }

            $user->update($request->only(['name', 'email']));
            
            return response(["message" => "User updated", "user" => $user]);
        } catch (Exception $e) {
            return response([
                'message' => 'Update failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $user = User::find($id);
            if (!$user) {
                return response(["message" => "User not found"], 404);
            }

            $user->delete();
            return response(["message" => "User deleted"]);
        } catch (Exception $e) {
            return response([
                'message' => 'Delete failed',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
