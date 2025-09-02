import About from './components/About'
import Particles from './components/particles'
import ProfileCard from './components/ProfileCard'

const App = () => {
  return (

    <div className='text-white min-h-screen items-center flex flex-col relative'>
      <div className='absolute h-screen w-screen -z-10'>
      <Particles
      particleColors={['#341BAC', '#341BAC']}
      particleCount={300}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={110}
      moveParticlesOnHover={true}
      alphaParticles={true}
      disableRotation={true}
      />
      </div>
      <div className='container relative  mx-auto mt-25 md:mt-0 px-1 md:flex-row flex flex-col items-center gap-12 bg-fixed'>

        <div className="flex-1 text-center md:text-left flex-col flex gap-y-4 md:gap-y-7">
          <p className='text-lg text-[#341BAC] font-medium -mb-4'>Hi, Saya</p>
          <h1 className='text-4xl font-bold md:text-6xl '>ROSIZAMHARI <span className='text-[#341BAC]'>Web Developer</span></h1>
          <p className='text-gray-300 max-w-lg md:text-xl md:max-w-max'> Saya seorang Web Developer yang fokus membangun website modern, 
            responsif, dan user-friendly menggunakan teknologi terbaru seperti 
            React, TailwindCSS, dan JavaScript.</p>

            {/* #341BAC */}

            <div className="mt-5 flex items-cente justify-center md:justify-start 
            w-full gap-4">
              <a href="#" className='py-2 md:px-5 md:py-2.5 px-2 border-1 
              items-center rounded-4xl bg-[#341BAC]
               border-[#341BAC] font-bold transition duration-300 shadow-md
                hover:shadow-[#341BAC] '>My Prooject</a>
              <a href="https://drive.google.com/file/d/1yBUEp2EqM71T-5_tcfeAfQ_OfNEMhwrl/view?usp=sharing" className='py-2 md:px-5 md:py-2.5 px-2 border-1 
              items-center rounded-4xl hover:bg-[#341BAC] 
              hover:border-[#341BAC] font-bold transition duration-300 
              shadow-md hover:shadow-[#341BAC]' >Download CV</a>
            </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-center w-screen md:h-screen flex-col items-center ">
           <ProfileCard avatarUrl={'https://k.top4top.io/p_35324vszz1.png'} className='cursor-pointer py-3 z-10'/>
        </div>
      </div>

     <div className="container w-screen min-h-screen rounded-t-4xl bg-black shadow-2xl mt-10 md:rounded-[100px] sticky" id='about'>
      <About/>
     </div>     
    </div>

// #7000D2


  )
}

export default App