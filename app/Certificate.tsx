import React from "react";

export default function Certificate({
    cert,
    certUrl,
}: {
    cert: string;
    certUrl: string;
}) {
    return (
        <a href={certUrl}>
            <div
                className=" pb-4  font-semibold  h-60 sm:h-70  w-full bg-contain bg-no-repeat bg-center "
                style={{ backgroundImage: `url(${cert})` }}
            ></div>
        </a>
    );
}
