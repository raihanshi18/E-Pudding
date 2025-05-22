import SideBar from "@/Components/SideBar";
import React from "react";

const Cart = () => {
    return (
        <>
            <SideBar />
            <section className="flex flex-col min-h-[600px] ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]">
                <div className="h-screen flex flex-col items-center">
                    <div className="bg-Secondary h-full w-full flex rounded-xl p-5 shadow-lg">
                        <div className=" w-[90%] rounded-l-lg flex justify-center items-top font-medium">
                            <div className="bg-Tertiary w-[98%] h-[7%] flex rounded-lg shadow-sm">
                                <ul className="flex w-full h-full justify-between items-center pl-10 pr-20">
                                    <li>Product</li>
                                    <li>Price</li>
                                    <li>Quantity</li>
                                    <li>Subtotal</li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-[700px] rounded-r-lg flex h-full justify-center">
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
                                                    10
                                                </p>
                                            </div>
                                            <div className="w-full mt-2 flex justify-between">
                                                <h1 className="flex opacity-40 font-medium">
                                                    Sub Total
                                                </h1>
                                                <p className="flex font-semibold">
                                                    $700
                                                </p>
                                            </div>
                                            <div className="w-full mt-2 flex justify-between">
                                                <h1 className="flex opacity-40 font-medium">
                                                    Shipping
                                                </h1>
                                                <p className="flex font-semibold">
                                                    $0
                                                </p>
                                            </div>
                                            <div className="w-full mt-2 flex justify-between">
                                                <h1 className="flex opacity-40 font-medium">
                                                    Taxes
                                                </h1>
                                                <p className="flex font-semibold">
                                                    $0
                                                </p>
                                            </div>
                                            <div className="w-full mt-2 flex justify-between">
                                                <h1 className="flex opacity-40 font-medium">
                                                    Coupon Discount
                                                </h1>
                                                <p className="flex font-semibold">
                                                    -$700
                                                </p>
                                            </div>
                                        </div>
                                        <div className="absolute left-0 right-0 p-5 bottom-0">
                                            <div className="w-full mt-2 flex justify-between">
                                                <h1 className="flex opacity-40 font-medium">
                                                    Total
                                                </h1>
                                                <p className="flex font-semibold">
                                                    Free
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
                </div>
            </section>
        </>
    );
};

export default Cart;
