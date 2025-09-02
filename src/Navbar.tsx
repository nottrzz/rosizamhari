import { Menu, Ribbon, X, ZapOff } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)
  // const [isFixed, setIsFixed] = useState(false);

  // useEffect(()=>{
  //   const handleScroll = () =>{
  //     if(window.scrollY > 50 ){
  //       setIsFixed(true);
  //     }else{
  //       setIsFixed(false)
  //     }
  //   }
  //   window.addEventListener("scroll",handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll)
  // },[])
  //  <nav
  //     className={`w-full px-6 py-4 transition-all duration-300 
  //       ${isFixed ? "fixed top-0 left-0 bg-gray-900 text-white shadow-lg" : 
  //         "relative bg-transparent text-black"}
  //     `}
  //   >
  return (
    <div className='fixed w-full left-0 shadow-md top-0 text-amber-50 backdrop-blur-3xl z-50 '>
    {/* // <div className={`w-full left-0 shadow-md top-0 text-amber-50 backdrop-blur-3xl md:${isFixed ?"backdrop-blur-sm fixed top-0 left-0 z-50" : "flex" } ${isFixed ?"backdrop-blur-sm fixed top-0 left-0" : "" }`}> */}
      <div className="container flex mx-auto py-4 px-4  items-center justify-between">
        <h1 className='text-xl font-bold md:bg-transparent bg-[#341BAC] md:text-2xl'>ROSIZAMHARI</h1>

        <ul className="hidden md:flex font-bold gap-10">
          <li>
            <a href="#" className='hover:text-[#341BAC] active:opacity-40 transition duration-300 ease-in-out font-bold'>Home</a>
          </li>
          <li>
            <a href="#about" className='hover:text-[#341BAC] transition duration-300 ease-in-out font-bold'>About</a>
          </li>
          <li>
            <a href="#" className='hover:text-[#341BAC] transition duration-300 ease-in-out font-bold'>Project</a>
          </li>
          <li>
            <a href="#" className='hover:text-[#341BAC] transition duration-300 ease-in-out font-bold'>Contact</a>
          </li>
        </ul>
        
        <div className="navExtra">
          <button className='py-1 px-4 border-2 text-[#341BAC] hidden md:flex hover:bg-[#341BAC] transition duration-300 ease-in-out rounded-full'><a href="https://github.com/nottrzz" className='text-white font-bold hover:text-black'>Github</a></button>
          <button onClick={() => setIsOpen(!isOpen)} className='md:hidden cursor-pointer hover:text-[#341BAC]  transition duration-300 ease-in-out'>
            <div className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
            {isOpen ? <X size={30}/> : <Menu size={30}/> }
            </div>
          </button>
        </div>

      </div>

      {isOpen &&(
        <div className="md:hidden backdrop-blur-3xl py-7 z-50">
          <Ribbon size={50} className='absolute left-10 opacity-10 hover:text-[#341BAC] hover:opacity-100' />
          <ul className='flex flex-col gap-5 px-3 items-center'>
          <li>
            <a href="#" className='hover:text-[#341BAC] active:opacity-40 transition duration-300 ease-in-out font-bold'>Home</a>
          </li>
          <li>
            <a href="#about" className='hover:text-[#341BAC] transition duration-300 ease-in-out font-bold'>About</a>
          </li>
          <li>
            <a href="#" className='hover:text-[#341BAC] transition duration-300 ease-in-out font-bold'>Project</a>
          </li>
          <li>
            <a href="#" className='hover:text-[#341BAC] transition duration-300 ease-in-out font-bold'>Contact</a>
          </li>
          </ul>
          <ZapOff size={50} className='absolute right-10 bottom-13 opacity-5  hover:text-[#341BAC] hover:opacity-100' />
        </div>
      )}

    </div>
  )
}
// border-[#7000D2]
// #7000D2
export default Navbar

// container mx-auto flex items-center justify-between px-6 py-4