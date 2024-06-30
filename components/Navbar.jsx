"use client"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar(){
    return(
        <motion.div 
        className="flex flex-row justify-between pt-6 max-w-screen-2xl mx-auto my-0"
        initial={{
            opacity:0
        }}
        animate={{
            opacity:1
        }}
        transition={{
            duration:1
        }}
        >
            <h2 className="text-page-white-200 font-bebas text-3xl">WebDevPro</h2>
            <ul className="flex flex-row justify-between items-start text-xl">
                <li className="text-page-white-200 md:px-8 px-2 font-bebas">
                <Link href="https://github.com/WebDevProCM"><FaGithub size={25}/></Link>
                </li>
                <li className="text-page-white-200 md:px-8 px-2 font-bebas">
                <Link href=""><SiGmail size={25}/></Link>
                </li>
                <li className="text-page-white-200 md:px-8 px-2 font-bebas">
                <Link href=""><FaLinkedin size={25}/></Link>
                </li>
            </ul>
        </motion.div>
    )
}