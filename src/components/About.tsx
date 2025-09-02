
import {  Github, Instagram, Linkedin, Mails } from 'lucide-react'
import React from 'react'
import AnimatedContent from './animatedContent'

const about = () => {
  return (
    <div className='md:py-30 flex flex-col justify-center items-center py-10'>
        <div className="max-w-2xl items-start flex w-screen flex-1">
            <AnimatedContent
              distance={150}
                direction="horizontal"
                reverse={false}
                duration={1.2}
                ease="bounce.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.3}
            >
            <h1 className='md:text-5xl bg-[#341BAC] text-3xl font-bold mb-2 md:mb-4 md:self-start flex items-center px-10 md:px-0 '>ABOUT ME</h1>
            </AnimatedContent>
        </div>
        <div className="max-w-4xl px-10 md:px-28">
            <sub className='text-2xl  text-gray-400'>
               Hi, my name is **Rosizamhari** 👋  
               I’m a **Web Developer** and **Mobile Developer** who loves building modern, responsive, and impactful applications.  
            </sub>
        </div>
        <div className="max-w-4xl px-10 md:px-28 md:mt-3">
            <sub className='text-2xl  text-gray-400'>
                My focus is on creating fast, user-friendly, and accessible digital experiences.  
                With skills in both **web development** and **mobile development**, I enjoy exploring 
                new technologies and turning ideas into real, high-quality products.   
            </sub>
        </div>


        
            <div className="w-screen md:px-107 md:mt-6 mt-6 px-10 justify-start" >
            <sub className='md:text-3xl text-xl font-medium mt-3  text-gray-400 '><a href="" className='underline'>Let's Connect</a></sub></div>
            <div className='flex flex-3 md:mt-10 mt-5 px-10 md:gap-10 md:w-7xl w-screen gap-3 md:px-80 flex-wrap'>
                <div className="github flex flex-row items-center justify-center gap-4 md:text-2xl font-medium">
                    <Github  className='text-20'/> <a href="#" className='underline'>Github</a>
                </div>
                <div className="github flex flex-row items-center  justify-center gap-4 md:text-2xl font-medium">
                    <Instagram className='text-20'/> <a href="#" className='underline'>@rzmhr.</a>
                </div>
                <div className="github flex flex-row items-center justify-center gap-4 md:text-2xl font-medium">
                    <Mails className='text-20'/> <a href="#" className='underline'>rosizamhari@gmail.com</a>
                </div>
                <div className="github flex flex-row items-center justify-center gap-4 md:text-2xl font-medium">
                    <Linkedin className='text-20'/> <a href="#" className='underline'>_rzmhrr-</a>
                </div>
           
            </div>
        </div>
  )
}

export default about