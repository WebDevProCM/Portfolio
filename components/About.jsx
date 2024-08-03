"use client";

import React from 'react'
import {motion, useScroll, useTransform} from "framer-motion";

function About() {
  const {scrollY} = useScroll();
  const scaleText = useTransform(scrollY, [0, 650], [1, 2])
  const paragraphOpacity = useTransform(scrollY, [0, 650], [0, 1])

  return (
    <>
    <div className='relative max-w-[1400px] mx-auto text-center md:my-[200px] my-[100px] z-10 overflow-x-hidden' id="about">
      <motion.h1 className='md:text-[50px] text-[40px] text-page-purple font-bebas mt-6'
      style={{scale: scaleText}}
      >
        ABOUT ME</motion.h1>
      <motion.hr 
      className='max-w-[90px] h-[10px] bg-page-purple mx-auto'
      initial={{scaleX: 0}}
      whileInView={{scaleX: 1}}
      viewport={{ once: true }}
      transition={{delay: 0.3, type:"spring"}}
      >
      </motion.hr>
      <motion.p 
      className='mt-[80px] mx-auto font-fjalla md:text-[20px] text-[15px] leading-10 max-w-[900px]'
      style={{opacity: paragraphOpacity}}
      >
          I&#39;m a passionate Full Stack Developer with a strong foundation in JavaScript.I bridge the gap
            between front-end and back-end development, ensuring a cohesive development process.
            Proficiency in core web development technologies like HTML, CSS, and JavaScript and 
            frameworks like React.js for building user-friendly interfaces, Bootstrap for responsive
              design, Node.js/Express.js for robust back-ends and Mongodb/Mongoose for storing data 
              in the database. My expertise extends to building RESTful APIs for seamless data exchange 
              and implementing user authentication and authorization for secure applications. I have used
              handlebars for several projects to render dynamic pages. Experience with socket.io for 
              building real-time applications like chat apps.
      </motion.p> 
    </div>

    </>
  )
}

export default About