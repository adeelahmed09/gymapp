"use client"
import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className='bg-[#0D0D0D] border-[1px] border-solid border-[#62BF04]  text-[#62BF04] flex items-center justify-around font-semibold sm:w-[40vw] w-[90vw] sm:h-[10vh] h-[7vh] rounded-3xl'>
      <Link className=' hover:scale-[1.1] hover:text-white' href={"#hero"}>Home</Link>
      <Link className=' hover:scale-[1.1] hover:text-white' href={"#about-us"}>About Us</Link>
      <Link className=' hover:scale-[1.1] hover:text-white' href={"#contact-us"}>Contact Us</Link>
    </div>
  )
}

export default Nav
