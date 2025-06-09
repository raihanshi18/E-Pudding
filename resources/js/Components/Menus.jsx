import React from "react";

const Menus = () => {
    return (
        <div className="w-[350px] h-[300px] bg-Secondary rounded-xl shadow-lg">
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
    );
};

export default Menus;
