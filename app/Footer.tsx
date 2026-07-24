import React from "react";

export default function Footer() {
    return (
        <footer className=" pt-10">
            <h3 className="uppercase text-[96px] lg:text-[128px] text-(--primary) pl-4 sm:pl-8 -mb-10 lg:-mb-14">
                savion
            </h3>
            <div className="bg-(--primary) w-full h-40 pl-4 sm:pl-8 pt-2 relative">
                <p className="text-[32px] tracking[2%] font-light">
                    function with flair
                </p>
                <p className="absolute bottom-2 font-bold">
                    <b className="text-[16px]">&copy;</b> 2026 Savion all rights
                    reserved
                </p>
            </div>
        </footer>
    );
}
