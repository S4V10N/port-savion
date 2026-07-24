"use client";

import React from "react";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    placeholder: string;
    error?: string;
    isValid?: boolean;
    isTouched?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ id, error, isValid, isTouched, ...rest }, ref) => {
        const showError = isTouched && !!error;
        const showValid = isTouched && isValid && !error;

        const borderClass = showError
            ? "border-red-500"
            : showValid
              ? "border-green-500"
              : "border-(--primary)";

        return (
            <fieldset className="mb-2 -mt-4">
                <div className="relative">
                    <textarea
                        ref={ref}
                        id={id}
                        {...rest}
                        className={`border-2 ${borderClass} w-full rounded-[6] text-[18px] font-semibold pl-2.5 pr-9 pt-3 pb-3 capitalize selected h-40  transition-colors duration-200 resize-none
                        `}
                    />
                    {showError && (
                        <span className="absolute right-2.5 top-3 text-red-500 font-bold cursor-pointer">
                            ✕
                        </span>
                    )}
                    {showValid && (
                        <span className="absolute right-2.5 top-3 text-green-500 font-bold">
                            ✓
                        </span>
                    )}
                </div>
                {showError && (
                    <span className="text-red-500 text-sm block mt-1 font-semibold">
                        {error}
                    </span>
                )}
            </fieldset>
        );
    },
);
TextArea.displayName = "TextArea";
export default TextArea;
