"use client";
import { BackgroundGradient } from "./ui/BorderGradient";
import { Progress } from "./ui/progress";
import { motion } from "framer-motion";

const Skills: React.FC = () =>{
  const skills = ["javascript", "html/css", "nodejs", "expressjs", "reactjs", "nextjs", "css frameworks", "authentication/ authorization"]
  return (
    <div 
    className="flex lg:flex-row flex-col justify-around gap-14 items-center max-w-[1400px] mx-auto text-center my-[200px]">
        
        <BackgroundGradient 
        containerClassName="sm:w-[350px] w-[260px] sm:h-[350px] h-[260px] rounded-[175px] flex justify-center items-center"
        >
        <div className="
         bg-[#00010a] sm:w-[350px] w-[260px] sm:h-[350px] h-[260px] border-2 border-white rounded-full flex justify-center items-center">
          <motion.h1 className="text-[4rem] font-bebas text-page-purple uppercase"
          initial={{scaleX: 0}}
          whileInView={{scaleX: 1}}
          viewport={{once: true}}
          transition={{delay: 0.2}}
          >top SKILLS</motion.h1>
        </div>
        </BackgroundGradient>
        <div className="flex flex-wrap gap-12 justify-center items-center"
          variants={{
          visible: {transition: {staggerChildren: 0.05}}
        }}
        >
          {skills.map((skill, index) =>{
            return(          
            <div key={index} className="text-left">
              <motion.p className="sm:text-lg text-[13px] text-page-white font-bold block uppercase"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{delay: 0.3}}
              >
                {skill}
              </motion.p>
            <Progress value={95} className="sm:w-[350px] w-[280px]" />
            </div>)
          })
          }

        </div>
    </div>
  )
}

export default Skills