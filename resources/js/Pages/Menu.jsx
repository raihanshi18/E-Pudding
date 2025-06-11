import SideBar from "@/Components/SideBar";
import React from "react";

const Menu = () => {
    return (
        <>
            <SideBar />
            <section className="flex flex-col min-h-[800px] ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]">
                <div className="h-screen flex gap-20">
                    <div className="w-72 h-[300px] bg-Secondary rounded-xl shadow-lg">
                        <div className="w-full h-[190px] bg-Tertiary rounded-t-xl">
                            a
                            <img src="" alt="" />
                        </div>
                        <div className="px-3 py-1 flex flex-col justify-between h-[105px]">
                            <div className="">
                                <h1 className="text-lg font-semibold">Pudding</h1>
                                <p>Enak dan bergizi baik untuk badan</p>
                            </div>
                            <div className="flex justify-end">
                                <button className="py-1 items-end px-5 rounded-md bg-Tertiary">
                                    See Detail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;