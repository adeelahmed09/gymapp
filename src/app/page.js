"use client"

import Link from "next/link";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <main className=" relative w-full min-h-screen ">
      <nav className=" fixed flex justify-center items-center h-[15vh] z-10 w-full">
        <Nav />
      </nav>
      <section id="hero" className="w-full flex gap-4 flex-col justify-center relative items-center h-screen ">
        <Hero />
      </section>
      <section id="about-us" className="w-full flex gap-3.5 flex-col justify-center relative items-center ">
        <AboutUs />
      </section>
      <section id="contact-us"  className="w-full bg-[#0D0D0D] border-t-2 border-[#85A6A2] flex gap-3.5 flex-col justify-center relative items-center ">
        <ContactUs/>
      </section>
    </main>
  );
}
