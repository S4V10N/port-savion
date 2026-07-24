import React from "react";

export default function Textbox(props: {
    heading: string;
    body: string | string[];
    icons: Element[];
}) {
    return (
        <div className="text-[20px] bg-(--accent-light) pt-8 pb-8 pl-4 pr-3 font-semibold rounded-[10] border-r-2 border-b-2 border-(--primary-dark) mb-6">
            <h3 className="text-accent-dark mb-2 text-[24px]">
                {props.heading}
            </h3>
            <p>{props.body}</p>
            {props.icons}
        </div>
    );
}
