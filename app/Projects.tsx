"use client";
import { useState } from "react";
import Heading from "./Heading";
import Text from "./Text";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const projects = {
        calculator: {
            name: "Calculator App",
            link: "https://s4-calculator.vercel.app/",
            img: "/projects/calculator-app.png",
            repo: "https://github.com/S4V10N/calculator-app-main.git",
        },
        mdPreviewer: {
            name: "Markdown Previewer",
            link: "https://markdown-preview-app-eight.vercel.app/",
            img: "/projects/markdown-preview-app.png",
            repo: "https://github.com/S4V10N/markdown-preview-app.git",
        },
        ticketGenerator: {
            name: "Conference Ticket Generator",
            link: "https://conference-ticket-generator-main-liart.vercel.app/",
            img: "/projects/ticket-generator.png",
            repo: "https://github.com/S4V10N/conference-ticket-generator-main.git",
        },
        creatureSearch: {
            name: "RPG Creature Search",
            link: "https://rpg-creature-search-app-eta.vercel.app/",
            img: "/projects/creature-search.png",
            repo: "https://github.com/S4V10N/rpg-creature-search-app.git",
        },
        billSpliter: {
            name: "Tip Calculator",
            link: "https://tip-calculator-app-main-delta-six.vercel.app/",
            img: "/projects/bill-spliter.png",
            repo: "https://github.com/S4V10N/tip-calculator-app-main.git",
        },
        palindrome: {
            name: "Palindrome Checker",
            link: "https://palindrome-checker-s4.vercel.app/",
            img: "/projects/palindrome-checker.png",
            repo: "https://github.com/S4V10N/palindrome-checker.git",
        },
        timeTrackingDashboard: {
            name: "Time Tracking Dashboard",
            link: "https://time-tracking-dashboard-main-gamma-ten.vercel.app/",
            img: "/projects/time-tracking-dashboard.png",
            repo: "https://github.com/S4V10N/time-tracking-dashboard-main.git",
        },
        weatherApp: {
            name: "Weather App",
            link: "https://weather-app-orpin-chi-75.vercel.app/",
            img: "/projects/weather-app.png",
            repo: "https://github.com/S4V10N/weather-app-main.git",
        },
        chatApp: {
            name: "Chat App",
            link: "https://chat-app-omega-khaki.vercel.app/",
            img: "/projects/chat-app.png",
            repo: "https://github.com/S4V10N/Chat-app.git",
        },
        resultsSummary: {
            name: "Results Summary",
            link: "https://results-summary-site.vercel.app/",
            img: "/projects/results-summary.png",
            repo: "https://github.com/S4V10N/results-summary-site.git",
        },
        newsLetter: {
            name: "Newsletter Sign-Up",
            link: "https://newsletter-sign-up-with-success-message-main-two-alpha.vercel.app/",
            img: "/projects/newsletter-signup-page.png",
            repo: "https://github.com/S4V10N/newsletter-sign-up-with-success-message-main.git",
        },
        ageCalculator: {
            name: "Age Calculator",
            link: "https://age-calculator-app-main-gray.vercel.app/",
            img: "/projects/age-calculator.png",
            repo: "https://github.com/S4V10N/age-calculator-app-main.git",
        },
        productPreview: {
            name: "Product Preview Card",
            link: "https://product-preview-card-component-main-ivory-two.vercel.app/",
            img: "/projects/product-preview-component.png",
            repo: "https://github.com/S4V10N/product-preview-card-component-main.git",
        },
        huddleLanding: {
            name: "Huddle Landing Page",
            link: "https://huddle-landing-page-with-alternatin-git-e9ca0b-s4v10ns-projects.vercel.app/",
            img: "/projects/huddle-landing-page.png",
            repo: "https://github.com/S4V10N/huddle-landing-page-with-alternating-feature-blocks-master.git",
        },
        recipePage: {
            name: "Recipe Page",
            link: "https://recipe-page-main-omega-two.vercel.app/",
            img: "/projects/recipe-page.png",
            repo: "https://github.com/S4V10N/recipe-page-main.git",
        },
        productCart: {
            name: "Product List with Cart",
            link: "https://s4-product-list-with-cart.vercel.app/",
            img: "/projects/product-cart.png",
            repo: "https://github.com/S4V10N/product-list-with-cart-main.git",
        },
        pomodoroClock: {
            name: "Pomodoro Clock",
            link: "https://25-5-clock-peach-six.vercel.app/",
            img: "/projects/pomodoro-clock.png",
            repo: "https://github.com/S4V10N/25---5-clock.git",
        },
    };

    const [visibleCount, setVisibleCount] = useState(4);
    const [loading, setLoading] = useState(false);

    const handleSeeMore = () => {
        if (loading || visibleCount >= Object.keys(projects).length) return;

        setLoading(true);
        setTimeout(() => {
            setVisibleCount((prev) =>
                Math.min(prev + 3, Object.keys(projects).length),
            );
            setLoading(false);
        }, 1000);
    };

    return (
        <section id="projects" className="pt-26  capitalize max-w-300 w-full">
            <Heading title="projects" />
            <Text
                text="Here are some of my recent projects — a few examples of the sites and interfaces I’ve built."
                span=""
            />

            <section
                id="certificates"
                className="sm:grid-cols-2  grid  gap-6 lg:grid-cols-3  lg:w-full xl:max-w-300"
            >
                {Object.values(projects)
                    .slice(0, visibleCount)
                    .map((project) => (
                        <ProjectCard
                            key={project.name}
                            title={project.name}
                            url={project.img}
                            link={project.link}
                            repo={project.repo}
                            lang="HTML CSS JavaScript"
                        />
                    ))}
            </section>
            <p className="capitalize text-[16px] tracking-[2%] font-semibold mb-4">
                Want to see more? <br /> I also contribute to open source
            </p>
            <div className="flex items-center  justify-between font-semibold">
                <button
                    className="cursor-pointer pt-2 pb-2 text-[18px] bg-none capitalize w-fit  rounded-t-[10] rounded-l-none rounded-b-[10] rounded-y-[0]  border-(--accent) border-2 pl-4 pr-4"
                    onClick={handleSeeMore}
                    disabled={loading}
                >
                    {loading ? "Loading..." : "See More"}
                </button>
                <button className="cursor-pointer pt-2 pb-2 text-[18px] bg-(--accent) capitalize w-fit  rounded-t-[10] rounded-l-none rounded-br-[10] rounded-b-[10] border-r-2 border-b-2 border-(--primary-dark) pr-4 pl-4">
                    visit my github
                </button>
            </div>
        </section>
    );
}
