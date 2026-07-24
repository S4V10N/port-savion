"use client";
import React, { ReactNode, useState } from "react";
import Heading from "./Heading";
import Textbox from "./Textbox";
import Text from "./Text";
import {
    FaBootstrap,
    FaGitAlt,
    FaGithub,
    FaHtml5,
    FaMarkdown,
    FaReact,
    FaSass,
} from "react-icons/fa";
import { FaCss } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
    SiTypescript,
    SiJquery,
    SiRedux,
    SiVite,
    SiJavascript,
} from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import Icons from "./Icons";

export default function Skills() {
    const skills: ReactNode[] = [
        <FaHtml5 key="html" />,
        <FaCss key="css" />,
        <FaSass key="sass" />,
        <RiTailwindCssFill key="tailwind" />,
        <FaBootstrap key="bootstrap" />,
        <SiJavascript key="javaScript" />,
        <SiTypescript key="typeScript" />,
        <SiJquery key="jQuery" />,
        <SiRedux key="redux" />,
        <FaReact key="react" />,
        <RiNextjsFill key="nextJs" />,
        <SiVite key="vite" />,
    ];
    const designTools: ReactNode[] = [<IoLogoFigma key="figma" />];
    const document: ReactNode[] = [<FaMarkdown key={"markdown"} />];
    const git: ReactNode[] = [<FaGitAlt />, <FaGithub />];
    const skillSet = (item: ReactNode[]) => {
        return item.map((card, index) => (
            <i
                className="text-4xl grid place-content-center p-4 w-full bg-(--accent-light) rounded cursor-pointer"
                key={index}
            >
                {card}
            </i>
        ));
    };
    const frontEnd = skillSet(skills);
    const design = skillSet(designTools);
    const documentation = skillSet(document);
    const sourceControl = skillSet(git);
    return (
        <section id="skills" className="pt-26  capitalize  w-full max-w-300">
            <Heading title="skills" />
            <Text
                span=""
                text="I use modern frameworks and best practices to build fast,
                responsive, and conversion-focused websites."
            />
            <Textbox
                heading="frontend development"
                body=""
                icons={<Icons size={true} test={frontEnd} />}
            />

            <section
                id="certificates"
                className="sm:grid-cols-2  grid  gap-6 lg:grid-cols-3  lg:w-full xl:max-w-300 "
            >
                {" "}
                <Textbox
                    heading="design"
                    body=""
                    size={false}
                    icons={<Icons test={design} />}
                />
                <Textbox
                    heading="documentation"
                    body=""
                    size={false}
                    icons={<Icons test={documentation} />}
                />
                <Textbox
                    heading="source control"
                    size={false}
                    body=""
                    icons={<Icons test={sourceControl} />}
                />
            </section>
        </section>
    );
}
