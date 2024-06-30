import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

function ContactSection() {
  return (
    <div className='max-w-[1400px] mx-auto text-center md:mt-[200px] mt-[100px] '>

        <h1 className='max-w-[600px] mx-auto leading-[45px] md:text-[50px] text-[40px] text-white font-bebas'>
            Ready to take your dreamed website to the 
            <span className="text-page-purple"> next level</span>?
        </h1>

        <p className='mt-[40px] mx-auto font-fjalla md:text-[20px] text-[15px] leading-[30px] max-w-[900px]
            text-page-white-100'>
            Reach out me today, Let&#39;s build something amazing. Your website awaits.
        </p>

        <button className="p-[3px] relative mt-[20px] font-fjalla">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                Reach to WebDevPro
            </div>
        </button>

        <div className='flex justify-between items-center mt-[130px]'>
            <p className='font-fjalla md:text-[15px] text-[8px]'>copyright &#169; 2024 Chamod Udugama</p>
            <div className='flex items-center gap-[10px]'>
                <Link href=""><FaGithub size={35}/></Link>
                <Link href=""><SiGmail size={35}/></Link>
                <Link href=""><FaLinkedin size={35}/></Link>

            </div>
        </div>

    </div>
    
  )
}

export default ContactSection