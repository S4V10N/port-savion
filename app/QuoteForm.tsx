"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Heading from "./Heading";
import Legend from "./Legend";
import Input from "./Input";
import TextArea from "./TextArea";
import Submit from "./Submit";

const quoteSchema = z.object({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Enter a valid email address"),
    siteType: z.string().min(2, "Let me know what type of site you need"),
    developmentTime: z.string().min(2, "Let me know your timeline"),
    budget: z.string().min(1, "Let me know your budget range"),
    projectDetails: z.string().min(10, "Tell me a bit more about your project"),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle",
    );

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, touchedFields, dirtyFields },
    } = useForm<QuoteFormData>({
        resolver: zodResolver(quoteSchema),
        mode: "onChange",
    });

    const values = watch();

    const onSubmit = async (data: QuoteFormData) => {
        setStatus("sending");
        try {
            const res = await fetch("https://formspree.io/f/xjgnoapy", {
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
        <section id="quote" className="pt-26 capitalize w-full max-w-300 ">
            <Heading title="quote" />
            <form
                className="max-w-112.5"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <Legend title="Get Free Quote" />

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
                    label="what type of site do you need?"
                    type="text"
                    id="siteType"
                    placeholder="blog | business website | school"
                    error={errors.siteType?.message}
                    isTouched={touchedFields.siteType || dirtyFields.siteType}
                    isValid={!!values.siteType && !errors.siteType}
                    {...register("siteType")}
                />
                <Input
                    label="when do you need it launched?"
                    type="text"
                    id="developmentTime"
                    placeholder="As soon as possible | 2–4 weeks | 1–2 months | Flexible"
                    error={errors.developmentTime?.message}
                    isTouched={
                        touchedFields.developmentTime ||
                        dirtyFields.developmentTime
                    }
                    isValid={
                        !!values.developmentTime && !errors.developmentTime
                    }
                    {...register("developmentTime")}
                />
                <Input
                    label="what's your budget range?"
                    type="text"
                    id="budget"
                    placeholder="Under ₦200,000 | ₦200,000 – ₦500,000 | ₦500,000 – ₦1,000,000 | Over ₦1,000,000 | Not sure yet"
                    error={errors.budget?.message}
                    isTouched={touchedFields.budget || dirtyFields.budget}
                    isValid={!!values.budget && !errors.budget}
                    {...register("budget")}
                />
                <Input
                    label="tell me about your project"
                    type="hidden"
                    id="message"
                    placeholder=""
                />
                <TextArea
                    placeholder="Describe your goals, features needed, and any preferences…"
                    id="projectDetails"
                    error={errors.projectDetails?.message}
                    isTouched={
                        touchedFields.projectDetails ||
                        dirtyFields.projectDetails
                    }
                    isValid={!!values.projectDetails && !errors.projectDetails}
                    {...register("projectDetails")}
                />

                <Submit
                    name={status === "sending" ? "sending..." : "get quote"}
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
