import React from "react";

export default function Heading({ title }: { title: string }) {
    return (
        <div className="flex gap-1 mb-3  w-fit items-center">
            <svg
                width="25"
                height="29"
                viewBox="0 0 25 29"
                className=".header -translate-y-0.5 dark:invert"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M17.3249 1.49028C19.9651 -1.74991 25.1796 0.719893 24.3453 4.8154L20.2408 24.9651C19.8613 26.8282 18.2226 28.1667 16.3213 28.1667H4.00758C0.636843 28.1667 -1.22257 24.2531 0.906637 21.64L17.3249 1.49028Z" />
            </svg>{" "}
            <h2 className="text-[32px]  text-(--header-text)">{title}</h2>
        </div>
    );
}
