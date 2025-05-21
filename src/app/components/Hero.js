"use client"
import React from 'react'
import Link from 'next/link'
function Hero() {
    return (
        <>
            <img src="/heroimg.jpg" className=" w-full absolute h-full object-cover object-center -z-10 brightness-40" alt="" />
            <h1 className="sm:text-6xl text-6xl tracking-tighter sm:w-[50vw] w-[80vw] text-center sm:font-bold font-semibold text-[#99D959]">Stronger Every Day. Start Today.</h1>
            <h2 className="sm:text-xl  sm:w-[50vw] w-[90vw] text-center sm:font-semibold text-[#F2F2F2]">Join a community dedicated to strength, endurance, and transformation.</h2>
            <Link href={"#"} className="bg-[#62BF04] hover:bg-black hover:scale-[] text-white text-[16px] px-5 py-2 rounded-2xl font-semibold"> Join Now</Link>
        </>
    )
}

export default Hero
