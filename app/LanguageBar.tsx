"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

const LANGUAGE_COLORS: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    CSS: "#563d7c",
    HTML: "#e34c26",
    Rust: "#dea584",
    Python: "#3572A5",
    Shell: "#89e051",
    PLpgSQL: "#336790",
    HCL: "#844FBA",
    Other: "#ededed",
};

function LanguageLegendItem({
    name,
    percent,
}: {
    name: string;
    percent: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isTruncated, setIsTruncated] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        setIsTruncated(ref.current.scrollWidth > ref.current.clientWidth);
    }, [name, percent]);

    if (isTruncated) return null;

    return (
        <div
            ref={ref}
            className="group relative flex items-center gap-2 whitespace-nowrap rounded px-1 py-0.5"
        >
            <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: LANGUAGE_COLORS[name] ?? "#ededed" }}
            />
            <span className="text-[12px] font-medium text-slate-700">
                {name}
            </span>

            <div className="pointer-events-none absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 -translate-y-[calc(100%+8px)] whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs text-white shadow-lg group-hover:block">
                <span
                    className="inline-block h-2 w-2 rounded-full mr-2 align-middle"
                    style={{
                        backgroundColor: LANGUAGE_COLORS[name] ?? "#ededed",
                    }}
                />
                {name} {percent.toFixed(1)}%
            </div>
        </div>
    );
}

export default function LanguageBar({
    languages,
}: {
    languages: Record<string, number>;
}) {
    const entries = Object.entries(languages);
    const total = entries.reduce((sum, [, value]) => sum + value, 0);

    const sorted = useMemo(
        () =>
            entries
                .map(([name, value]) => [name, (value / total) * 100] as const)
                .sort((a, b) => b[1] - a[1]),
        [entries, total],
    );

    return (
        <div className="mb-4">
            <div className="w-full h-3 rounded overflow-hidden flex mb-2">
                {sorted.map(([name, percent]) => (
                    <div
                        key={name}
                        className="relative group flex-shrink-0 cursor-pointer"
                        style={{
                            width: `${percent}%`,
                            backgroundColor: LANGUAGE_COLORS[name] ?? "#ededed",
                        }}
                    />
                ))}
            </div>

            <div className="flex flex-wrap gap-x-3 gap-y-2 cursor-pointer">
                {sorted.map(([name, percent]) => (
                    <LanguageLegendItem
                        key={name}
                        name={name}
                        percent={percent}
                    />
                ))}
            </div>
        </div>
    );
}
