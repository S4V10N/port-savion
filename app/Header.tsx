"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import Nav from "./Nav";
import { useState } from "react";
import Switch from "./Button";
import Dropdown from "./Dropdown";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const showNav = () => {
        setIsOpen((prev) => !prev);
    };
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const closeL = isOpen
        ? {
              transform:
                  "rotate(-55deg) translateY(50%) scaleX(1.1) translateX(-7px)",
              fill: "var(--accent)",
          }
        : {
              transform: "rotate(0deg) translateY(0%) scaleX(1) translateX(0)",
              fill: "var(--secondary)",
          };

    const closeR = isOpen
        ? {
              transform:
                  "rotate(55deg) translateY(40%) scaleX(1.1) translateX(8px)",
              fill: "var(--red-accent)",
          }
        : {
              transform: "rotate(0deg) translateY(0%) scaleX(1) translateX(0)",
              fill: "var(--secondary)",
          };

    const closeB = isOpen
        ? {
              opacity: "0",

              transform: "rotate(55deg) translateX(-5px)",
              backgroundColor: "var(--accent-light)",
          }
        : {
              opacity: "1",

              transform: "rotate(0deg) translateX(0px)",
              backgroundColor: "var(--accent)",
          };
    return (
        <header className="flex w-screen justify-between  pl-3 pr-5 pt-5 pb-4 fixed top-0  z-2  sm:pl-5 bg-(--background)">
            <Link href="#hero">
                <Image
                    src="/savion.svg"
                    width={40}
                    height={40}
                    alt="savion-logo"
                    loading="lazy"
                    className="w-12 sm:w-14 md:w-16 xl:w-18 transition dark:invert"
                />{" "}
            </Link>

            <ul className="hidden lg:flex  gap-6 items-center flex-wrap justify-center h-fit self-center">
                <Nav section="home" id="#hero" />
                <Nav section="about" id="#about" />
                <Nav section="skills" id="#skills" />
                <Nav section="certifications" id="#certifications" />
                <Nav section="projects" id="#projects" />
                <Nav section="open source" id="#opensource" />
                <Nav section="contact" id="#contact" />
            </ul>

            <div className="flex gap-4 items-center ">
                {!isOpen ? (
                    <button className="p-3 pt-2 pb-2 bg-(--primary) rounded-[6] text-(--background) font-bold capitalize tracking-[4%] text-[16px] text-nowrap md:text-[17px] xl:text-[20px] cursor-pointer">
                        <a
                            href="/Didia_Praise_Chimeka_Web_Developer.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            see resume
                        </a>
                    </button>
                ) : null}

                <div className="hidden lg:block">
                    <Switch />
                </div>

                <div
                    aria-label="hamburger-menu"
                    className="lg:hidden hamburger cursor-pointer relative z-4"
                    id="hamburger"
                    onClick={showNav}
                >
                    <svg
                        viewBox="0 0 36 13"
                        className="fill w-10  transition ease duration-500 transition-discrete"
                        style={closeL}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M2.13615 5.47722C-1.09404 4.70952 -0.496473 -0.0535634 2.82325 0.000448614L29.5653 0.435542C30.5866 0.452158 31.5163 1.02827 31.9858 1.93546L35.4791 8.68619C36.5705 10.7953 34.682 13.2121 32.3716 12.663L2.13615 5.47722Z" />
                    </svg>
                    <div
                        className="h-[6] w-10 rotate-13 rounded bg-(--accent) transition ease duration-500 transition-discrete"
                        style={closeB}
                    ></div>
                    <svg
                        viewBox="0 0 36 13"
                        xmlns="http://www.w3.org/2000/svg"
                        style={closeR}
                        className=" rotate-180 fill w-10 transition ease duration-500 transition-discrete"
                    >
                        <path d="M2.13615 5.47722C-1.09404 4.70952 -0.496473 -0.0535634 2.82325 0.000448614L29.5653 0.435542C30.5866 0.452158 31.5163 1.02827 31.9858 1.93546L35.4791 8.68619C36.5705 10.7953 34.682 13.2121 32.3716 12.663L2.13615 5.47722Z" />
                    </svg>
                </div>
            </div>
            {isOpen && (
                <Dropdown isOpen={isOpen} onClose={() => setIsOpen(false)} />
            )}
        </header>
    );
}
