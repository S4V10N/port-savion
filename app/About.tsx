import React from "react";
import Heading from "./Heading";
import Textbox from "./Textbox";
import Text from "./Text";

export default function About() {
    return (
        <section className=" pt-26  capitalize max-w-300" id="about">
            <Heading title="about" />

            <Text
                span="I’m a front-end developer and open source contributor
                "
                text=" with a passion for building clean, functional, and visually engaging digital experiences."
            />
            <button className="w-full bg-(--primary-dark) font-semibold p-2 rounded-[6] text-[18px]  text-(--background) tracking-[2%] mb-10 capitalize">
                <a href="#projects">See projects</a>
            </button>
            <Textbox
                heading=""
                body="“ I’ve built personal projects, contributed to 10+ open source
                projects, completed multiple frontend mentor challenges, and
                shipped FCC certification projects. This hands-on work has given
                me deep practical skills in turning Figma designs into fast,
                responsive, and accessible websites. ”"
            />
        </section>
    );
}
