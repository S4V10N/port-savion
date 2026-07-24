import React from "react";
import Heading from "./Heading";
import Text from "./Text";
import Certificate from "./Certificate";

export default function Certifications() {
    return (
        <section id="certifications" className=" pt-26 capitalize max-w-300">
            <Heading title="certifications" />
            <Text
                span=""
                text="I completed the full freeCodeCamp frontend development
                curriculum, which validates my skills in responsive design,
                accessibility, and modern web development best practices."
            />

            <section
                id="certificates"
                className="sm:grid-cols-2  grid w-full gap-6 lg:grid-cols-3  lg:w-full xl:max-w-300"
            >
                <Certificate
                    certUrl="https://www.freecodecamp.org/certification/s4v10n/responsive-web-design"
                    cert="/responsive-web-design.png"
                />
                <Certificate
                    certUrl="https://www.freecodecamp.org/certification/s4v10n/javascript-algorithms-and-data-structures-v8"
                    cert="/javascript-algorithms-and-data-structures.png"
                />
                <Certificate
                    certUrl="https://www.freecodecamp.org/certification/s4v10n/front-end-development-libraries"
                    cert="/frontend-libraries.png"
                />
            </section>
        </section>
    );
}
