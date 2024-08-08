"use client";

import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiPostman } from "react-icons/si";
import { motion } from 'framer-motion';
import { SparklesCore } from "./ui/sparkles";

const IconsSection: React.FC = () =>{
  const iconsArray = [
    <FaReact size={100} key={1} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
    <FaHtml5 size={100} key={2} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
    <FaCss3Alt size={100} key={3} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
    <TbBrandJavascript size={100} key={4} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
    <FaBootstrap size={100} key={5} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
    <RiTailwindCssFill size={100} key={6} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
    <FaNodeJs size={100} key={7} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
    <SiExpress size={100} key={8} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
    <RiNextjsFill size={100} key={9} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
    <SiPostman size={100} key={10} className='md:mx-[40px] mx-[20px] my-[40px]'/>,
  ];

  return (
    
    <>
      <div 
      className='relative overflow-hidden flex flex-row flex-wrap justify-center items-center max-w-[1400px] mx-auto my-[200px]'>
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        {iconsArray.map((icon, i) =>{
          return(
            <motion.div
            className='relative z-20'
            key={i}
            initial={{opacity: 0}}
            viewport={{once: true}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            >
              {icon}
            </motion.div>
          )
        })}
      </div>

    </>
  )
}

export default IconsSection

