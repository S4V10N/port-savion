import Link from "next/link";
import React from "react";

export default function Nav(props: { section: string; id: string }) {
    return (
        <li className=" font-bold xl:text-[20px]">
            <Link
                href={props.id}
                className="focus:text-(--body-text) cursor-pointer transition tes text-(--header-text)"
            >
                {props.section}
            </Link>
        </li>
    );
}
