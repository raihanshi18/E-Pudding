import SideBar from "@/Components/SideBar";
import Menus from "@/Components/Menus";
import React from "react";

const Menu = () => {
    return (
        <>
            <SideBar />
            <section className="flex flex-col min-h-[800px] ml-[300px] mr-[20px] my-6 max-sm:mx-[10px] max-sm:mb-[80px]">
              <div className="h-screen flex gap-20">
                <Menus/>
                <Menus/>
                <Menus/>
                <Menus/>
              </div>
            </section>
        </>
    );
};

export default Menu;
