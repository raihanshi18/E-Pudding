import SideBar from "@/Components/SideBar";
import { Trash2, ShoppingBag, Heart, Plus } from 'lucide-react';
import React, { useEffect, useState } from "react";

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const IMAGE_BASE_URL = "/storage/"; // Sesuaikan

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(cart);
    }, []);

    const removeFromCart = (id) => {
        const updated = cartItems.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(updated));
        setCartItems(updated);
    };
    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const shipping = 7000;
    const tax = subtotal * 0.11;
    const total = subtotal + shipping + tax;
    return (
        <>
            <SideBar />
            <div className="min-h-screen flex flex-col ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Header */}
                    <div className="flex items-center mb-8">
                        <ShoppingBag className="w-8 h-8 text-black mr-3" />
                        <h1 className="text-3xl font-bold text-gray-800">Keranjang Belanja</h1>
                        <span className="ml-3 bg-Secondary text-black px-3 py-1 rounded-full text-sm font-medium">
                            {cartItems.length} item
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                                {cartItems.length === 0 ? (
                                    <div className="p-12 text-center">
                                        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                        <h3 className="text-xl font-medium text-gray-500 mb-2">Keranjang kosong</h3>
                                        <p className="text-gray-400">Silakan tambahkan produk ke keranjang</p>
                                    </div>
                                ) : (
                                    <div className="divide-y divide-gray-200">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                                                <div className="flex items-center space-x-4">
                                                    {/* Product Image */}
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            src={`${IMAGE_BASE_URL}${item.image}`}
                                                            alt={item.name}
                                                            className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                                                        />
                                                    </div>

                                                    {/* Product Info */}
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                                            {item.name}
                                                        </h3>
                                                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                                                            <span>Rasa: {item.flavor}</span>
                                                        </div>
                                                        <p className="text-xl font-bold text-black">
                                                            {formatPrice(item.price)}
                                                        </p>
                                                    </div>

                                                    {/* Actions */}
                                                    <div className="flex items-center space-x-2">
                                                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                                                            <Heart className="w-5 h-5" />
                                                        </button>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                        >
                                                            <Trash2 className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
                                <h2 className="text-xl font-semibold text-gray-800 mb-6">Ringkasan Pesanan</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal ({cartItems.length} item)</span>
                                        <span>{formatPrice(subtotal)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Ongkos Kirim</span>
                                        <span>{formatPrice(shipping)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Pajak (11%)</span>
                                        <span>{formatPrice(tax)}</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <div className="flex justify-between text-lg font-semibold text-gray-800">
                                            <span>Total</span>
                                            <span>{formatPrice(total)}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <button className="bg-Tertiary hover:bg-Secondary text-black w-full px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Transaction
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Continue Shopping */}
                    <div className="mt-8 text-center">
                        <button className="text-black hover:text-black font-medium">
                            ← Lanjutkan Belanja
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;

{/* {cartItems.length === 0 ? (
                            <p className="text-4xl font-bold">Keranjang masih kosong.</p>
                        ) : (
                            <div className="grid gap-4">
                                {cartItems.map((item) => (
                                    <div className=" flex justify-between">
                                        <div key={item.id} className="flex bg-Tertiary w-[350px] h-32 gap-4 items-center border p-4 rounded-lg shadow">
                                            <img
                                                src={`${IMAGE_BASE_URL}${item.image}`}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                            <div className="flex-1">
                                                <h2 className="font-semibold">{item.name}</h2>
                                                <p className="text-sm text-gray-500 capitalize">Rasa: {item.flavor}</p>
                                                <p className="text-sm">Rp {item.price.toLocaleString()}</p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded"
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                        <div className="absolute right-0 top-0 w-[400px] rounded-r-lg flex h-full justify-center">
                                            <div className="flex justify-center w-full">
                                                <div className="w-full h-full rounded-xl border border-black border-opacity-10 bg-Tertiary shadow-sm">
                                                    <div className="w-full h-full p-4 relative">
                                                        <h1 className="border-black border-b-[0.5px] pb-3 border-opacity-10 font-semibold">
                                                            Order Summary
                                                        </h1>
                                                        <div className="mt-3 border-black border-b-[0.5px] pb-3 border-opacity-10">
                                                            <div className="w-full flex justify-between">
                                                                <h1 className="flex opacity-40 font-medium">
                                                                    Items
                                                                </h1>
                                                                <p className="flex font-semibold">
                                                                    1
                                                                </p>
                                                            </div>
                                                            <div className="w-full flex justify-between">
                                                                <h1 className="flex opacity-40 font-medium">
                                                                    Price
                                                                </h1>
                                                                <p className="flex font-semibold">
                                                                    Rp {item.price.toLocaleString()}
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="absolute left-0 right-0 p-5 bottom-0">
                                                            <div className="w-full mt-2 flex justify-between">
                                                                <h1 className="flex opacity-40 font-medium">
                                                                    Total
                                                                </h1>
                                                                <p className="flex font-semibold">
                                                                    Rp {total.toLocaleString()}
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <button className="bg-Secondary w-full h-10 mt-3 rounded-3xl shadow text-sm font-semibold text-black hover:bg-[#fcd3a5] transition-all duration-200 ease-in-out hover:shadow-md">
                                                                    Proceed to Checkout
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )} */}