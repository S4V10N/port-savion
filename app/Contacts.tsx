import React from "react";
import Heading from "./Heading";
import Text from "./Text";
import { FaGithubAlt, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

export default function Contacts() {
    return (
        <section id="contact" className="pt-26 capitalize max-w-300 w-full">
            <Heading title="contacts" />
            <h3 className="text-[50px] tracking-[2%] font-semibold mb-2 text-(--header-text) leading-16">
                Let’s Work Together
            </h3>
            <Text
                text="Ready to launch your site? I’m here to answer  your questions, review your project needs, and give you a clear quote with no obligation."
                span=""
            />
            <a href="#quote">
                <button className="w-full bg-(--primary-dark) font-semibold p-2 rounded-[6] text-[18px]  text-(--background) tracking-[2%] mb-4 capitalize cursor-pointer">
                    get free quote
                </button>
            </a>
            <a href="#review">
                <button className="w-full font-semibold p-2 rounded-[6] text-[18px]  border-(--secondary) tracking-[2%]  capitalize text-(--header-text) border-2 mb-10 cursor-pointer">
                    request site review
                </button>
            </a>
            <p className="tracking-[2%] font-semibold mb-4">
                Whether you want a quick quote, a free site review, or just want
                to chat about your project — I’d love to hear from you
            </p>
            <h3 className="text-(--header-text) text-[24px] tracking-[2%] mb-2">
                Connect on Socials
            </h3>
            <div className="w-full h-12 flex items-center gap-2">
                <a
                    href="https://www.instagram.com/saviondotdev?igsh=dHk1N202cnh3a2Zy&utm_source=qr"
                    target="_blank"
                >
                    <FaInstagram className="text-4xl text-(--header-text) hover:text-(--body-text) transition hover:scale-110" />
                </a>
                <a href="https://x.com/saviondotdev?s=21" target="_blanch">
                    <FaSquareXTwitter className="text-4xl text-(--header-text) hover:text-(--body-text) transition hover:scale-110 " />
                </a>
                <a
                    href="https://www.linkedin.com/in/didia-praise-260682343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                >
                    <FaLinkedin className="text-4xl text-(--header-text) hover:text-(--body-text) transition hover:scale-110" />
                </a>
                <a
                    href="https://discord.com/users/954871638636249089"
                    target="_blank"
                >
                    <FaDiscord className="text-4xl text-(--header-text) hover:text-(--body-text) transition hover:scale-110" />
                </a>
                <a href="https://github.com/S4V10N" target="_blank">
                    <FaGithubAlt className="text-4xl text-(--header-text) hover:text-(--body-text) transition hover:scale-110" />
                </a>
            </div>
        </section>
    );
}
