import React from "react";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export default function ProjectCard(props: {
    title: string;
    lang: string;
    url: string;
    repo: string;
    link: string;
}) {
    console.log(props.url);
    return (
        <div className="text-[20px] bg-(--accent-light) overflow-hidden pb-4  font-semibold rounded-[10] border-r-2 border-b-2 border-(--primary-dark) mb-6 w-full transition ease">
            <div
                className="w-full   h-48 mb-4 bg-cover bg-center hover:scale-105 transition duration-1000"
                style={{ backgroundImage: `url(${props.url})` }}
            ></div>
            <h3 className="text-accent-dark mb-4  pl-4 text-[22px]">
                {props.title}
            </h3>

            <div className="flex items-center pr-4 pl-4 gap-2">
                <button className="pt-2 pb-2 text-[18px] bg-(--accent) capitalize w-1/2  rounded-t-[10] rounded-l-none rounded-b-[10] rounded-y-[0] border-r-2 border-b-2 border-(--primary-dark) grid place-content-center">
                    <a href={props.link} target="_blank">
                        <p className="flex items-center gap-2">
                            {" "}
                            preview
                            <LuSquareArrowOutUpRight />
                        </p>
                    </a>
                </button>
                <button className="pt-2 pb-2 text-[18px] bg-(--accent) capitalize w-1/2  rounded-t-[10] rounded-l-none rounded-b-[10] rounded-y-[0] border-r-2 border-b-2 border-(--primary-dark) grid place-content-center">
                    <a href={props.repo} target="_blank">
                        <p className="flex items-center gap-2">
                            code <LuSquareArrowOutUpRight />
                        </p>
                    </a>
                </button>
            </div>
        </div>
    );
}
