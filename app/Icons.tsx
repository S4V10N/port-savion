import React, { ReactNode } from "react";

export default function Icons(props) {
    return props.size ? (
        <div className="w-full grid grid-cols-4 sm:grid-cols-10 xl:grid-cols-12  place-content-center gap-4">
            {props.test}
        </div>
    ) : (
        <div className="w-full grid-cols-5 grid  gap-4 xl:grid-cols-4">
            {props.test}
        </div>
    );
}
