"use client";
import { BackgroundGradient } from "./ui/BorderGradient";
import Progess from "./ui/progess"

function Skills() {
  return (
    <div 
    className="flex flex-wrap justify-around items-center max-w-[1400px] mx-auto text-center my-[200px]">
        
        <BackgroundGradient 
        containerClassName="w-[350px] h-[350px] rounded-[175px] flex justify-center items-center"
        >

        <div className="
         bg-[#00010a] w-[350px] h-[350px] border-2 border-white rounded-full flex justify-center items-center">
          <h1 className="text-[4rem] font-bebas text-page-purple">SKILLS</h1>
        </div>
          </BackgroundGradient>
        <div className="flex flex-wrap justify-around items-center">
          <Progess skill="JAVASCRIPT"/>
          <Progess skill="NODEJS"/>
          <Progess skill="EXPRESSJS"/>
          <Progess skill="REACTJS"/>
          <Progess skill="NEXTJS"/>
          <Progess skill="AUTH"/>
        </div>
    </div>
  )
}

export default Skills