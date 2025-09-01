
import {  Github, Instagram, Linkedin, Mails } from 'lucide-react'
import React from 'react'
import AnimatedContent from './animatedContent'

const about = () => {
  return (
    <div className='py-30 flex flex-col justify-center items-center'>
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
            <h1 className='text-5xl font-bold mb-4 md:self-start flex items-center '>ABOUT ME</h1>
            </AnimatedContent>
        </div>
        <div className="max-w-4xl px-28">

                <AnimatedContent
                distance={250}
                direction="vertical"
                reverse={false}
                duration={1}
                ease="in-out"
                initialOpacity={0.2}
                animateOpacity
                scale={0}
                threshold={0.2}
                delay={0}
            >
            <sub className='text-2xl  text-gray-400'>
               Hi, my name is **Rosizamhari** 👋  
               I’m a **Web Developer** and **Mobile Developer** who loves building modern, responsive, and impactful applications.  
            </sub>
            </AnimatedContent>
        </div>

        <div className="max-w-2xl mt-4">
                <AnimatedContent
                distance={250}
                direction="vertical"
                reverse={false}
                duration={1}
                ease="in-out"
                initialOpacity={0.2}
                animateOpacity
                scale={0}
                threshold={0.2}
                delay={0}
            >
            <sub className='text-2xl mt-2  text-gray-400'>
                My focus is on creating fast, user-friendly, and accessible digital experiences.  
                With skills in both **web development** and **mobile development**, I enjoy exploring new technologies and turning ideas into real, high-quality products.  

            </sub>
            </AnimatedContent>0
        <div className="w-screen px-130 mt-4 justify-start" >

            <sub className='text-3xl font-medium mt-2  text-gray-400 '><a href="" className='underline'>Let's Connect</a></sub></div>
            <div className='flex flex-3 mt-10 gap-10 w-7xl px-80 flex-wrap'>
                <div className="github flex flex-row items-center justify-center gap-4 text-2xl font-medium">
                    <Github size={40}/> <a href="#" className='underline'>Github</a>
                </div>
                <div className="github flex flex-row items-center justify-center gap-4 text-2xl font-medium">
                    <Instagram size={40}/> <a href="#" className='underline'>@rzmhr.</a>
                </div>
                <div className="github flex flex-row items-center justify-center gap-4 text-2xl font-medium">
                    <Mails size={40}/> <a href="#" className='underline'>rosizamhari@gmail.com</a>
                </div>
                <div className="github flex flex-row items-center justify-center gap-4 text-2xl font-medium">
                    <Linkedin size={40}/> <a href="#" className='underline'>_rzmhrr-</a>
                </div>
           
            </div>
        {/* <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum distinctio nihil itaque adipisci asperiores magni harum neque, dolores aperiam.</P> */}
    </div>
  )
}

export default about