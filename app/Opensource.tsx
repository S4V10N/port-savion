"use client";
import React, { useState } from "react";
import Heading from "./Heading";
import Text from "./Text";
import RepoCard from "./RepoCard";
import { name } from "assert";

export default function Opensource() {
    const openSourceWork = [
        {
            name: "escrow-frontend",
            description:
                "Next.js frontend for Soroban milestone escrow — connect wallet, fund jobs, approve milestones",
            task: "Added subtle CSS micro-animations to improve polish and user experience",
            repo: "https://github.com/Goldii-locks/escrow-frontend",
            stars: 4,
            forks: 3,
            languages: { TypeScript: 95.7, JavaScript: 2.3, CSS: 2.0 },
        },
        {
            name: "escrow-backend",
            description:
                "Node.js + Express + TypeScript backend for Soroban milestone escrow",
            task: "Documented all API endpoints in the README with request and response examples",
            repo: "https://github.com/Goldii-locks/escrow-backend",
            stars: 5,
            forks: 29,
            languages: { TypeScript: 100.0 },
        },
        {
            name: "akkuea",
            description: "Real Estate (RWA) + DeFi = The future",
            task: "Replaced inline color styles with a cleaner Tailwind-based styling system",
            repo: "https://github.com/akkuea/akkuea",
            stars: 42,
            forks: 207,
            languages: {
                TypeScript: 81.9,
                Rust: 16.4,
                CSS: 0.8,
                PLpgSQL: 0.5,
                Shell: 0.3,
                JavaScript: 0.1,
            },
        },
        {
            name: "stellar-work-",
            description:
                "StellarWork is an open-source decentralized freelance marketplace on Stellar. Payments are held in Soroban escrow and released by state transitions, not platform custody logic.",
            task: "Added a CODE_OF_CONDUCT.md to support community standards and contributor guidance",
            repo: "https://github.com/anumukul/Stellar-work-",
            stars: 4,
            forks: 63,
            languages: {
                TypeScript: 73.6,
                Rust: 21.3,
                HCL: 1.7,
                JavaScript: 1.6,
                Shell: 1.1,
                CSS: 0.4,
                Other: 0.3,
            },
        },
        {
            name: "swiftchain_frontend",
            description:
                "SwiftChain-Frontend is the user interface for the SwiftChain logistics platform, built with Next.js, TypeScript, and TailwindCSS. It enables users and administrators to manage deliveries, shipments, and drivers while interacting with backend APIs and Stellar blockchain escrow services for secure logistics transactions.",
            task: "Built a marketing landing page to present the platform clearly and professionally",
            repo: "https://github.com/SwiftChainn/SwiftChain_Frontend",
            stars: 0,
            forks: 32,
            languages: { JavaScript: 88.2, TypeScript: 11.6, Other: 0.2 },
        },
        {
            name: "stellar-micropay",
            description:
                "Stellar-MicroPay: Streaming Payment Channels using Soroban — a smart contract allowing a payer to deposit XLM and stream it to a recipient at a defined rate, claimable any time.",
            task: "Added a payment-success confetti animation to make transactions feel more rewarding",
            repo: "https://github.com/Emmy123222/Stellar-MicroPay",
            stars: 1,
            forks: 50,
            languages: {
                TypeScript: 75.6,
                JavaScript: 13.7,
                Rust: 6.7,
                Shell: 1.3,
                CSS: 1.2,
                Python: 0.8,
                Other: 0.7,
            },
        },
        {
            name: "teachlink_web",
            description:
                "Frontend: Teachlink is a platform for technocrat where knowlege, skills, ideas, and information that can bring about development and improvement can be shared, dissected, you can also earn from it.",
            task: "Cleaned up console.log statements to improve code quality and production readiness",
            repo: "https://github.com/rinafcode/teachLink_web",
            stars: 14,
            forks: 140,
            languages: { TypeScript: 99.0, Other: 1.0 },
        },
        {
            name: "creditra-frontend",
            description:
                "Decentralized, risk-priced credit on Stellar — without overcollateralization. Creditra evaluates on-chain behavior to underwrite credit lines and price them dynamically.",
            task: "Created a help and documentation page to improve onboarding and user support",
            repo: "https://github.com/Creditra/Creditra-Frontend",
            stars: 0,
            forks: 74,
            languages: { TypeScript: 81.3, CSS: 18.1, Other: 0.6 },
        },
        {
            name: "trustup-frontend",
            description:
                "Cross-platform mobile application for Buy Now Pay Later (BNPL) on Stellar Network",
            task: "Built a reusable app loader component for a smoother and more consistent experience",
            repo: "https://github.com/TrustUp-app/TrustUp-Frontend",
            stars: 4,
            forks: 22,
            languages: { TypeScript: 98.3, JavaScript: 1.7 },
        },
        {
            name: "acbu-frontend",
            description:
                "A modern, mobile-first fintech application built with Next.js 16 and React 19, featuring a comprehensive suite of financial services built exclusively around the native ACBU (AFK) currency.",
            task: "Removed leftover console.log statements to keep production code clean and maintainable",
            repo: "https://github.com/Pi-Defi-world/acbu-frontend",
            stars: 1,
            forks: 85,
            languages: { TypeScript: 98.5, CSS: 1.3, JavaScript: 0.2 },
        },
        {
            name: "creditra-frontend",
            description:
                "Decentralized, risk-priced credit on Stellar — without overcollateralization. Creditra evaluates on-chain behavior to underwrite credit lines and price them dynamically.",
            task: "Designed a focused landing page to improve first impressions and product clarity",
            repo: "https://github.com/Creditra/Creditra-Frontend",
            stars: 0,
            forks: 74,
            languages: { TypeScript: 81.3, CSS: 18.1, Other: 0.6 },
        },
        {
            name: "stellabill-frontend",
            description:
                "Web app for Stellabill — subscription billing and management. React + Vite + TypeScript frontend talking to the Stellabill backend API for plans, subscriptions, and metrics.",
            task: "Implemented merchant dashboard KPI cards to highlight key metrics at a glance",
            repo: "https://github.com/Stellabill/stellabill-frontend",
            stars: 3,
            forks: 67,
            languages: {
                TypeScript: 78.7,
                CSS: 19.4,
                JavaScript: 1.8,
                HTML: 0.1,
            },
        },
        {
            name: "stellabill-frontend",
            description:
                "Web app for Stellabill — subscription billing and management. React + Vite + TypeScript frontend talking to the Stellabill backend API for plans, subscriptions, and metrics.",
            task: "Designed the merchant onboarding welcome flow and step indicator for better guidance",
            repo: "https://github.com/Stellabill/stellabill-frontend",
            stars: 3,
            forks: 67,
            languages: {
                TypeScript: 78.7,
                CSS: 19.4,
                JavaScript: 1.8,
                HTML: 0.1,
            },
        },
        {
            name: "stellabill-frontend",
            description:
                "Web app for Stellabill — subscription billing and management. React + Vite + TypeScript frontend talking to the Stellabill backend API for plans, subscriptions, and metrics.",
            task: "Implemented a top-up balance modal to streamline account funding",
            repo: "https://github.com/Stellabill/stellabill-frontend",
            stars: 3,
            forks: 67,
            languages: {
                TypeScript: 78.7,
                CSS: 19.4,
                JavaScript: 1.8,
                HTML: 0.1,
            },
        },
    ];
    const [visibleCount, setVisibleCount] = useState(4);
    const [loading, setLoading] = useState(false);

    const handleSeeMore = () => {
        if (loading || visibleCount >= openSourceWork.length) return;

        setLoading(true);
        setTimeout(() => {
            setVisibleCount((prev) =>
                Math.min(prev + 3, openSourceWork.length),
            );
            setLoading(false);
        }, 1000);
    };
    return (
        <section id="opensource" className=" pt-26 capitalize max-w-300 w-full">
            <Heading title="open source" />
            <Text
                text="Here are some of my recent open source contributions — a few examples of the pages, and interfaces I’ve built for the community."
                span=""
            />

            <section
                id="certificates"
                className="sm:grid-cols-2  grid  gap-6 lg:grid-cols-3  lg:w-full xl:max-w-300 mb-5"
            >
                {openSourceWork.slice(0, visibleCount).map((item, i) => (
                    <RepoCard
                        key={`${item.name}-${item.task}-${i}`}
                        repo={item.name}
                        repoUrl={item.repo}
                        desc={item.description}
                        task={item.task}
                        stars={item.stars}
                        forks={item.forks}
                        languages={item.languages}
                    />
                ))}
            </section>
            <div className="flex items-center  justify-between font-semibold">
                <button
                    className="pt-2 pb-2 text-[18px] bg-none capitalize w-fit  rounded-t-[10] rounded-l-none rounded-b-[10] rounded-y-[0]  border-(--accent) border-2 pl-4 pr-4 cursor-pointer"
                    onClick={handleSeeMore}
                    disabled={loading || visibleCount >= openSourceWork.length}
                >
                    {loading ? "Loading..." : "See More"}
                </button>
                <button className="pt-2 pb-2 text-[18px] bg-(--accent) capitalize w-fit  rounded-t-[10] rounded-l-none rounded-br-[10] rounded-b-[10] border-r-2 border-b-2 border-(--primary-dark) pr-4 pl-4 cursor-pointer">
                    visit my github
                </button>
            </div>
        </section>
    );
}
