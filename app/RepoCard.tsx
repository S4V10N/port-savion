import React from "react";
import { FaCodeFork } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import LanguageBar from "./LanguageBar";

export default function RepoCard(props: {
    repo: string;
    repoUrl?: string;
    desc: string;
    task: string;
    stars: number;
    forks: number;
    languages: Record<string, number>;
}) {
    return (
        <div className="text-[18px] bg-(--accent-light) pt-6 pb-6 pl-4 pr-3 font-semibold rounded-[10] border-r-2 border-b-2 border-(--primary-dark) mb-6 h-full flex flex-col">
            <h3 className="text-accent-dark text-[24px] mb-2">
                {props.repoUrl ? (
                    <a
                        href={props.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.repo}
                    </a>
                ) : (
                    props.repo
                )}
            </h3>
            <p className="mb-1 font-normal line-clamp-2 min-h-[2.75rem] leading-[1.375rem]">
                {props.desc}
            </p>
            <span className="text-[16px] italic tracking-[2%] mb-4 block font-normal">
                <q>{props.task}</q>
            </span>

            {/* pushed to bottom */}
            <div className="mt-auto">
                <LanguageBar languages={props.languages} />

                <div className="flex items-center justify-between gap-2">
                    <button className="pt-2 pb-2 text-[14px] bg-(--accent) capitalize w-1/2  rounded-t-[10] rounded-l-none rounded-b-[10] rounded-y-[0] border-r-2 border-b-2 border-(--primary-dark) grid place-content-center">
                        <p className="flex items-center gap-2">
                            {" "}
                            <FaCodeFork /> {props.forks}
                        </p>
                    </button>
                    <button className="pt-2 pb-2 text-[14px] bg-(--accent) capitalize w-1/2  rounded-t-[10] rounded-l-none rounded-b-[10] rounded-y-[0] border-r-2 border-b-2 border-(--primary-dark) grid place-content-center">
                        <p className="flex gap-2 items-center">
                            <FaStar />
                            {props.stars}
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
}
