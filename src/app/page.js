"use client"

import Link from "next/link";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";

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
    </main>
  );
}
