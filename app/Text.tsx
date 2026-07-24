import React from "react";

export default function Text(props: { text: string; span: string }) {
    return (
        <p className="text-[20px] tracking-[2%] font-semibold mb-4   lg:text-[22px] ">
            <span className="text-(--primary-dark) ">{props.span}</span>{" "}
            {props.text}
        </p>
    );
}
