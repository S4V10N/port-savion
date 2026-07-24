"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    error?: string;
    isValid?: boolean; // true once the field has a value and passes validation
    isTouched?: boolean; // whether the user has interacted with it yet
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ id, label, error, isValid, isTouched, ...rest }, ref) => {
        const showError = isTouched && !!error;
        const showValid = isTouched && isValid && !error;

        const borderClass = showError
            ? "border-red-500"
            : showValid
              ? "border-green-500"
              : "border-(--primary)";

        return (
            <fieldset className="mb-4 ">
                <label
                    htmlFor={id}
                    className="text-[24px] text-(--header-text) block mb-2 max-w-75"
                >
                    {label}
                </label>
                <div className="relative">
                    <input
                        ref={ref}
                        id={id}
                        {...rest}
                        className={`border-2 ${borderClass} w-full rounded-[6] text-[18px] font-semibold pl-2.5 pr-9 pt-3 pb-3 capitalize selected transition-colors duration-1000 ease-in-out`}
                    />

                    {showError && (
                        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-red-500 font-bold cursor-pointer  duration-1000 ease-in-out transition">
                            ✕
                        </span>
                    )}
                    {showValid && (
                        <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-green-500 font-bold  duration-1000 ease-in-out transition">
                            ✓
                        </span>
                    )}
                </div>
                {showError && (
                    <span className="text-red-500 text-sm block mt-1  duration-1000 ease-in-out transition font-semibold">
                        {error}
                    </span>
                )}
            </fieldset>
        );
    },
);
Input.displayName = "Input";
export default Input;
