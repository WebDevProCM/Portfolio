import React from 'react'
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const ContactSection: React.FC = () =>{
  return (
    <div className='max-w-[1400px] mx-auto text-center md:mt-[200px] mt-[100px]' id="contact">

        <h1 className='max-w-[600px] mx-auto leading-[45px] md:text-[50px] text-[40px] text-white font-bebas'>
            {/* I&#39;m Ready to take your dreamed website to the  */}
            Do you have a 
            <span className="text-page-purple"> job opportunity </span>
            or want to take your dreamed website to the
            <span className="text-page-purple"> next level</span>?
        </h1>

        <p className='mt-[40px] mx-auto font-fjalla md:text-[20px] text-[15px] leading-[30px] max-w-[900px]
            text-page-white-100'>
            Reach out to me today, Let&#39;s build something amazing. Your website awaits.
        </p>

        <button className="p-[3px] relative mt-[20px] font-fjalla">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                <Link href="https://github.com/WebDevProCM">Reach to Chamod Ud</Link>
            </div>
        </button>

        <div className='flex justify-between items-center mt-[130px]'>
            <p className='font-fjalla md:text-[15px] text-[7px]'>copyright &#169; 2024 Chamod Udugama</p>
            <div className='flex items-center gap-[10px]'>
                <Link href="https://github.com/WebDevProCM"><FaGithub size={30}/></Link>
                <Link href="mailto:chamodmenuka320@gmail.com"><SiGmail size={30}/></Link>
                <Link href="http://www.linkedin.com/in/chamod-udugama-344646308"><FaLinkedin size={30}/></Link>

            </div>
        </div>

    </div>
    
  )
}

export default ContactSection