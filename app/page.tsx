import About from "./About";
import Certifications from "./Certifications";
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Opensource from "./Opensource";

import Projects from "./Projects";
import QuoteForm from "./QuoteForm";
import ReviewForm from "./ReviewForm";
import Skills from "./Skills";

export default function Home() {
    return (
        <>
            <Header />
            <main className="pl-4 pr-4 sm:pl-8 sm:pr-8 sm:flex sm:flex-col sm:items-center w-full">
                <Hero />
                <About />
                <Skills />
                <Certifications />
                <Projects />
                <Opensource />
                <Contacts />
                <ContactForm />
                <QuoteForm />
                <ReviewForm />
            </main>
            <Footer />
        </>
    );
}
