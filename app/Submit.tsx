import React from "react";

export default function Submit(props: { name: string }) {
    return (
        <div className=" w-full ">
            <button
                type="submit"
                className="w-full bg-(--primary-dark) font-semibold p-2 rounded-[6] text-[18px]  text-(--background) tracking-[2%] mb-4 capitalize  mt-6 cursor-pointer"
            >
                {props.name}
            </button>
            <span className="font-semibold text-[14px] text-center block ">
                No obligation. I’ll respond within 24 hours.
            </span>
        </div>
    );
}
