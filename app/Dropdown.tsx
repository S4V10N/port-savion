import React from "react";
import Image from "next/image";
import Switch from "./Button";
import Link from "next/link";

type DropdownProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function Dropdown({ isOpen, onClose }: DropdownProps) {
    return (
        <>
            <div
                className={`fixed inset-0 z-20 bg-black/40 transition-opacity duration-300  lg:hidden ${
                    isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
                onClick={onClose}
            />

            <aside
                className={`fixed top-0 left-0 z-30 h-screen w-[80%] max-w-125 bg-(--background) pl-3 pt-5 pr-3 shadow-2xl sm:pl-5 transition-transform duration-1000  sm:right-0 sm:left-0 ease-in-out lg:hidden ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="mb-8 flex items-center justify-between">
                    <Link href="#hero" onClick={onClose}>
                        <Image
                            src="./savion.svg"
                            width={40}
                            height={40}
                            alt="savion-logo"
                            loading="lazy"
                            className="w-12 sm:w-14 md:w-16 xl:w-18 transition-all dark:invert duration-50 ease"
                        />{" "}
                    </Link>

                    <Switch />
                </div>

                <nav className="flex flex-col gap-4 text-[22px] font-semibold text-(--header-text) pl-2 pr-2">
                    <Link href="#hero" onClick={onClose}>
                        Home
                    </Link>
                    <Link href="#about" onClick={onClose}>
                        About
                    </Link>
                    <Link href="#skills" onClick={onClose}>
                        Skills
                    </Link>
                    <Link href="#certifications" onClick={onClose}>
                        Certifications
                    </Link>
                    <Link href="#projects" onClick={onClose}>
                        Projects
                    </Link>
                    <Link href="#opensource" onClick={onClose}>
                        Open Source
                    </Link>
                    <Link href="#contact" onClick={onClose}>
                        Contact
                    </Link>
                    <button className="p-3 pt-2 pb-2 bg-(--primary) rounded-[6] text-(--background) font-bold capitalize tracking-[4%] text-[16px] text-nowrap md:text-[17px] xl:text-[20px] cursor-pointer">
                        <a href="/Didia_Praise_Chimeka_Web_Developer.pdf" target="_blank" rel="noopener noreferrer">
                            see resume
                        </a>
                    </button>
                </nav>
            </aside>
        </>
    );
}
