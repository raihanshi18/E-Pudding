<?php

namespace App\Http\Controllers;

use App\Models\transaction;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Carbon\Carbon;

class TransactionController extends Controller
{
    /**
     * Display a listing of transactions with filtering options
     */
    public function index(Request $request): JsonResponse
    {
        $query = transaction::with(['user', 'transactionDetails.pudding']);
        
        // Filter by date range
        if ($request->has('filter') && $request->filter) {
            $now = Carbon::now();
            
            switch ($request->filter) {
                case '24_hours':
                    $query->where('created_at', '>=', $now->subHours(24));
                    break;
                case '1_day':
                    $query->where('created_at', '>=', $now->subDay());
                    break;
                case '1_month':
                    $query->where('created_at', '>=', $now->subMonth());
                    break;
                case '1_year':
                    $query->where('created_at', '>=', $now->subYear());
                    break;
            }
        }
        
        // Filter by specific date range
        if ($request->has('start_date') && $request->has('end_date')) {
            $query->whereBetween('date', [$request->start_date, $request->end_date]);
        }
        
        // Search by user name or payment method
        if ($request->has('search') && $request->search) {
            $query->whereHas('user', function($q) use ($request) {
                $q->where('name', 'like', '%' . $request->search . '%');
            })->orWhere('payment_method', 'like', '%' . $request->search . '%');
        }
        
        // Pagination
        $perPage = $request->get('per_page', 15);
        $transactions = $query->orderBy('created_at', 'desc')->paginate($perPage);
        
        // Add formatted data to each transaction
        $transactionsData = $transactions->items();
        foreach ($transactionsData as $transaction) {
            $transaction->formatted_price = 'Rp.' . number_format($transaction->total_price, 0, ',', '.');
            $transaction->formatted_date = $transaction->date->format('d/m/Y');
            $transaction->formatted_pickup_date = $transaction->pickup_date->format('d/m/Y');
            
            // Get product names from transaction details
            $products = [];
            foreach ($transaction->transactionDetails as $detail) {
                if ($detail->pudding) {
                    $products[] = $detail->pudding->name . ' (x' . $detail->quantity . ')';
                }
            }
            $transaction->products_summary = implode(', ', $products);
        }
        
        return response()->json([
            'success' => true,
            'data' => $transactionsData,
            'pagination' => [
                'current_page' => $transactions->currentPage(),
                'last_page' => $transactions->lastPage(),
                'per_page' => $transactions->perPage(),
                'total' => $transactions->total(),
                'from' => $transactions->firstItem(),
                'to' => $transactions->lastItem(),
            ]
        ]);
    }
    
    /**
     * Display the specified transaction
     */
    public function show($id): JsonResponse
    {
        $transaction = transaction::with(['user', 'transactionDetails.pudding'])->find($id);
        
        if (!$transaction) {
            return response()->json([
                'success' => false,
                'message' => 'Transaction not found'
            ], 404);
        }
        
        // Add formatted data
        $transaction->formatted_price = 'Rp.' . number_format($transaction->total_price, 0, ',', '.');
        $transaction->formatted_date = $transaction->date->format('d/m/Y');
        $transaction->formatted_pickup_date = $transaction->pickup_date->format('d/m/Y');
        
        return response()->json([
            'success' => true,
            'data' => $transaction
        ]);
    }
    
    /**
     * Store a newly created transaction
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'date' => 'required|date',
            'pickup_date' => 'required|date',
            'total_price' => 'required|integer|min:0',
            'payment_method' => 'required|string|max:255',
            'status' => 'required|string|max:255'
        ]);
        
        $transaction = transaction::create($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Transaction created successfully',
            'data' => $transaction->load(['user', 'transactionDetails.pudding'])
        ], 201);
    }
    
    /**
     * Update the specified transaction
     */
    public function update(Request $request, $id): JsonResponse
    {
        $transaction = transaction::find($id);
        
        if (!$transaction) {
            return response()->json([
                'success' => false,
                'message' => 'Transaction not found'
            ], 404);
        }
        
        $validated = $request->validate([
            'user_id' => 'sometimes|exists:users,id',
            'date' => 'sometimes|date',
            'pickup_date' => 'sometimes|date',
            'total_price' => 'sometimes|integer|min:0',
            'payment_method' => 'sometimes|string|max:255',
            'status' => 'sometimes|string|max:255'
        ]);
        
        $transaction->update($validated);
        
        return response()->json([
            'success' => true,
            'message' => 'Transaction updated successfully',
            'data' => $transaction->load(['user', 'transactionDetails.pudding'])
        ]);
    }
    
    /**
     * Remove the specified transaction
     */
    public function destroy($id): JsonResponse
    {
        $transaction = transaction::find($id);
        
        if (!$transaction) {
            return response()->json([
                'success' => false,
                'message' => 'Transaction not found'
            ], 404);
        }
        
        $transaction->delete();
        
        return response()->json([
            'success' => true,
            'message' => 'Transaction deleted successfully'
        ]);
    }
}