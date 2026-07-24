"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Switch = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const isDark = theme === "dark";

    return (
        <label className="relative inline-block h-[2em] w-[3.5em] cursor-pointer scale-130">
            <input
                type="checkbox"
                className="peer sr-only"
                checked={isDark}
                onChange={() => setTheme(isDark ? "light" : "dark")}
            />

            <span className="absolute inset-0 rounded-[30px] bg-transparent transition duration-500 peer-checked:bg-transparent dark:bg-transparent dark:peer-checked:bg-transparent before:absolute before:bottom-[15%] before:left-[10%] before:h-[1.4em] before:w-[1.4em] before:rounded-full before:content-[''] before:shadow-[inset_8px_-4px_0px_0px_#fff000] before:transition before:duration-500 peer-checked:before:translate-x-full peer-checked:before:shadow-[inset_15px_-4px_0px_15px_#fff000] dark:before:bg-transparent" />
        </label>
    );
};

export default Switch;
