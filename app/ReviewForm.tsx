"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Heading from "./Heading";
import Input from "./Input";
import Legend from "./Legend";
import TextArea from "./TextArea";
import Submit from "./Submit";

const reviewSchema = z.object({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Enter a valid email address"),
    domain: z.string().url("Enter a valid URL, e.g. https://yourdomain.com"),
    focus: z.string().min(2, "Let me know what to focus on"),
    concerns: z.string().min(10, "Share a bit more detail"),
});

type ReviewFormData = z.infer<typeof reviewSchema>;

export default function ReviewForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle",
    );

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, touchedFields, dirtyFields },
    } = useForm<ReviewFormData>({
        resolver: zodResolver(reviewSchema),
        mode: "onChange",
    });

    const values = watch();

    const onSubmit = async (data: ReviewFormData) => {
        setStatus("sending");
        try {
            const res = await fetch("https://formspree.io/f/mqerlywl", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("sent");
            reset();
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="review" className="w-full max-w-300 pt-26 capitalize">
            <Heading title="review" />
            <form
                className="max-w-112.5"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <Legend title="Get Free Site Review" />

                <Input
                    label="name"
                    type="text"
                    id="name"
                    placeholder="john doe"
                    error={errors.name?.message}
                    isTouched={touchedFields.name || dirtyFields.name}
                    isValid={!!values.name && !errors.name}
                    {...register("name")}
                />
                <Input
                    label="email"
                    type="email"
                    id="email"
                    placeholder="johndoe@example.com"
                    error={errors.email?.message}
                    isTouched={touchedFields.email || dirtyFields.email}
                    isValid={!!values.email && !errors.email}
                    {...register("email")}
                />
                <Input
                    label="your site url"
                    type="url"
                    id="domain"
                    placeholder="https://yourdomain.com"
                    error={errors.domain?.message}
                    isTouched={touchedFields.domain || dirtyFields.domain}
                    isValid={!!values.domain && !errors.domain}
                    {...register("domain")}
                />
                <Input
                    label="what would you like me to focus on?"
                    type="text"
                    id="focus"
                    placeholder="Speed & Performance | SEO & Search Rankings | Conversion & Leads | Design & UX"
                    error={errors.focus?.message}
                    isTouched={touchedFields.focus || dirtyFields.focus}
                    isValid={!!values.focus && !errors.focus}
                    {...register("focus")}
                />
                <Input
                    label="any specific questions or concerns ?"
                    type="hidden"
                    id="message"
                    placeholder=""
                />
                <TextArea
                    placeholder="share what's bothering you or what you want to improve"
                    id="concerns"
                    error={errors.concerns?.message}
                    isTouched={touchedFields.concerns || dirtyFields.concerns}
                    isValid={!!values.concerns && !errors.concerns}
                    {...register("concerns")}
                />

                <Submit
                    name={status === "sending" ? "sending..." : "get review"}
                />

                {status === "sent" && (
                    <p className="text-green-600 font-semibold text-[14px]  text-center">
                        Message sent — thanks!
                    </p>
                )}
                {status === "error" && (
                    <p className="text-red-500 font-semibold text-[14px]  text-center  ">
                        Something went wrong. Try again.
                    </p>
                )}
            </form>
        </section>
    );
}
