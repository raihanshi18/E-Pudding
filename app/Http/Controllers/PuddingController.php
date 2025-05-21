<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\pudding;
use Exception;
use Illuminate\Http\Request;

class PuddingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $puddings = pudding::all();

            return response([
                'message' => 'Puddings retrieved successfully',
                'data' => $puddings
            ], 201);
        } catch (Exception $e) {
            return response([
                'message' => 'Failed to retrieve puddings',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $credentials = $request->validate([
                'seller_id' => 'required',
                'name' => 'required|string',
                'price' => 'required|integer',
                'flavor' => 'required|integer',
                'stock' => 'required|integer'
            ]);

            $pudding = pudding::query()->create($credentials);

            return response([
                'message' => 'Pudding created successfully',
                'data' => $pudding
            ], 201);

        } catch (Exception $e) {
            return response([
                'message' => 'Failed to create pudding',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {

            $pudding = pudding::find($id);

            if (!$pudding) {
                return response([
                    'message' => 'Pudding not found'
                ], 404);
            }

            if ($pudding->seller_id != auth()->user()->id) {
                return response([
                    'message' => 'You are not authorized to view this pudding'
                ], 403);
            }

            return response([
                'message' => 'Pudding retrieved successfully',
                'data' => $pudding
            ], 200);

        } catch (Exception $e) {
            return response([
                'message' => 'Failed to retrieve pudding',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {

            $pudding = pudding::find($id);

            if (!$pudding) {
                return response([
                    'message' => 'Pudding not found'
                ], 404);
            }

            if ($pudding->seller_id != auth()->user()->id) {
                return response([
                    'message' => 'You are not authorized to update this pudding'
                ], 403);
            }

            $credentials = $request->validate([
                'name' => 'string|max:255',
                'price' => 'integer|min:0',
                'flavor' => 'string|max:255',
                'stock' => 'integer|min:0',
            ]);

            $pudding->update($credentials);

            return response([
                'message' => 'Pudding updated successfully',
                'data' => $pudding
            ], 200);

        } catch (Exception $e) {
            return response([
                'message' => 'Failed to update pudding',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {

            $pudding = pudding::find($id);

            if (!$pudding) {
                return response([
                    'message' => 'Pudding not found'
                ], 404);
            }

            if ($pudding->seller_id != auth()->user()->id) {
                return response([
                    'message' => 'You are not authorized to delete this pudding'
                ], 403);
            }

            $pudding->delete();

            return response([
                'message' => 'Pudding deleted successfully'
            ], 200);

        } catch (Exception $e) {
            return response([
                'message' => 'Failed to delete pudding',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
