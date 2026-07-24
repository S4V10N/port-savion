import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const metadata: Metadata = {
    title: "Savion | Frontend Developer Portfolio",
    description:
        "I’m a software engineering student and frontend developer based in Onitsha, Nigeria. I build responsive websites with React, TypeScript, Tailwind CSS, and modern UI patterns. I also contribute to open source and enjoy turning Figma designs into polished, production-ready interfaces.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
