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

function IconsSection() {
  return (
    <>
      <motion.div 
      className='flex flex-row flex-wrap justify-center items-center max-w-[1400px] mx-auto my-[200px]'
      initial={{
        scale:0
      }}
      whileInView={{
        scale:1
      }}
      viewport={{once: true}}
      transition={{
        duration: 1,
        type: "spring"
      }}
      >
        <FaReact size={100} className='md:mx-[40px] mx-[20px] my-[40px]'/>
        <FaHtml5 size={100} className='md:mx-[40px] mx-[20px] my-[40px]'/>
        <FaCss3Alt size={100} className='md:mx-[40px] mx-[20px] my-[40px]'/>
        <TbBrandJavascript size={100} className='md:mx-[40px] mx-[20px] my-[40px]'/>
        <FaBootstrap size={100} className='md:mx-[40px] mx-[20px] my-[40px]'/>
        <RiTailwindCssFill size={100} className='md:mx-[40px] mx-[20px] my-[40px]'/>
        <FaNodeJs size={100} className='md:mx-[40px] mx-[20px] my-[40px]'/>
        <SiExpress size={100} className='md:mx-[40px] mx-[20px] my-[40px]'/>
        <RiNextjsFill size={100} className='md:mx-[40px] mx-[20px] my-[40px]'/>
        <SiPostman size={100} className='md:mx-[40px] mx-[20px] my-[40px]'/>
      </motion.div>

    </>
  )
}

export default IconsSection

