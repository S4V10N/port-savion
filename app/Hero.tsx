import React from "react";
import Image from "next/image";
import bg from "../public/star-of-the-show.png";
export default function Hero() {
    return (
        <section
            id="hero"
            className="md:h-screen  pt-30  capitalize font-semibold h-[800px] relative overflow-x-clip  overflow-y-visible "
        >
            <div>
                <div>
                    <h1 className="text-[56px] xl:text-8xl xl:text-center mb-6  font-bold text-(--header-text) leading-tight">
                        From idea to launch <br /> in 2–4 weeks
                    </h1>

                    <p className=" text-[20px] md:text-xl mb-4 xl:text-center xl:text-[24px] xl:mb-8">
                        Get UX-led websites built to increase leads, with
                        measurable impact and transparent timelines.
                    </p>

                    <div className="flex items-center  gap-6 xl:ml-auto xl:mr-auto w-fit">
                        <button className=" bg-(--primary-dark) font-semibold pt-2 pb-2 pl-4 pr-4 rounded-[6] text-[18px]  text-(--background) tracking-[2%]  capitalize">
                            <a href="#quote">get free quote</a>
                        </button>
                        <button className=" font-semibold pt-2 pb-2 pl-4 pr-4 rounded-[6] text-[18px]  border-(--secondary) tracking-[2%]  capitalize text-(--header-text) border-2 ">
                            <a href="#review">site review</a>
                        </button>
                    </div>
                </div>
            </div>
            <Image
                src={bg}
                width={800}
                height={800}
                alt="hero-star-of-the-show"
                className="absolute md:-bottom-[30%] border md:-right-[10%] xl:w-[850px] xl:h-[850px] xl:-right-[10%] -bottom-[15%] right-0  -z-10 scale-145 md:scale-100"
            />
        </section>
    );
}
