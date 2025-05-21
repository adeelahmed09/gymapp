"use client"
import { Instagram , Locate, Mail, Phone } from 'lucide-react'
import React from 'react'

function ContactUs() {
  return (
    <div className='w-full  px-[5vw] py-[5vh] flex flex-col gap-[1vw]'>
        <h1 className='text-[#85A6A2] text-4xl font-bold'>Contact  Us:</h1>
      <div className='flex pl-5 gap-2 items-center '>
        <Phone size={20} color="#f0f0f0" />
        <p className='text-[#f0f0f0]'>050-250-500</p>
      </div>
      <div className='flex pl-5 gap-2 items-center '>
        <Mail size={20} color="#f0f0f0" />
        <p className='text-[#f0f0f0]'>forgegym@gmail.com</p>
      </div>
      <div className='flex pl-5 gap-2 items-center '>
        <Instagram size={20} color="#f0f0f0" />
        <p className='text-[#f0f0f0]'>@forgegym14</p>
      </div>
      <div className='flex gap-2 px-5 items-center'>
        <Locate size={24} color="#f0f0f0" />
        <p className='text-[#f0f0f0] text'>1st Floor, Sapphire Arcade, Block C, Gulberg III, Lahore, Punjab  54660</p>
      </div>
    </div>
  )
}

export default ContactUs
