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

const contactSchema = z.object({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Enter a valid email address"),
    message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
        "idle",
    );

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, touchedFields, dirtyFields },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onChange",
    });

    const values = watch();

    const onSubmit = async (data: ContactFormData) => {
        setStatus("sending");
        try {
            const res = await fetch("https://formspree.io/f/mgvyylae", {
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
        <section
            id="contactform"
            className="pt-6 pb-6 capitalize w-full max-w-300"
        >
            <form
                className="max-w-112.5"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <Legend title="Send Me a Message" />

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
                    label="message"
                    type="hidden"
                    id="message"
                    placeholder=""
                />
                <TextArea
                    placeholder="hello, would you be interested in working on my open source project ?"
                    id="message"
                    error={errors.message?.message}
                    isTouched={touchedFields.message || dirtyFields.message}
                    isValid={!!values.message && !errors.message}
                    {...register("message")}
                />

                <Submit
                    name={status === "sending" ? "sending..." : "send message"}
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
