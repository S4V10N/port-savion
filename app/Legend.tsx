import React from "react";

export default function Legend(props: { title: string }) {
    return (
        <h3 className="text-(--header-text) text-[36px] tracking-[2%] mb-2 -mt-2">
            {props.title}
        </h3>
    );
}
