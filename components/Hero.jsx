"use client";

import Image from "next/image"
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-hightlight";
import profile from "@/public/images/profile.png";

const Hero = () => {
  return (
    <div className={"relative max-w-[1400px] md:px-5 mx-auto"}>

      <div className="flex md:flex-row flex-col justify-center items-center h-full">     

        <div className="lg:shrink-0 shrink z-20 md:mt-[0] mt-[40px]">
          <motion.h1 
          className='block xl:text-6xl lg:text-5xl text-4xl font-fjalla text-page-black-300'
          initial={{
            scale:"0%"
          }}
          animate={{
            scale:"100%"
          }}
          transition={{
            duration:1
          }}
          >
            Hello There!
            </motion.h1>
          <motion.h1 
          className={"block xl:text-9xl lg:text-8xl text-6xl font-fjalla my-[20px]"}
          initial={{
            opacity:0
          }}
          animate={{
            opacity:1
          }}
          transition={{
            duration:2,
            delay:0.5
          }}
          >
            I`m CHAMOD...
          </motion.h1>
        </div>

        <motion.div 
        className="flex shrink justify-center items-start z-20"
        initial={{
          opacity:0
        }}
        animate={{
          opacity:1
        }}
        transition={{
          duration:0.5
        }}
        >
          
          <Image src={profile} width={430} priority className="md:max-w-full max-w-[300px]" alt="Profile picture"/>
        </motion.div>

      </div>
      
      <motion.h1 
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 2,
          ease: [0.4, 0.0, 0.2, 1],
        }}
      className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bebas text-center text-page-white-100 
      absolute bottom-0 z-20 leading-8 sm:leading-8 md:leading-[43px] lg:leading-[50px]"
      >
          <Highlight>
          I&#39;m ready to transform your imagined website into reality through a attractive
          website And Tell me your ideas in words, I will bring you a real
          world website which gets you results...
          </Highlight>
      </motion.h1>

      <div className="h-full w-full dark:bg-[#00010a] bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.4] absolute top-0 flex items-center justify-center z-2">
      
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#00010a] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
  
    </div>
  )
}

export default Hero