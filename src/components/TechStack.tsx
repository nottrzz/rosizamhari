import { FileCode2 } from "lucide-react"

const TechStack = () => {
  return (
    <div className="w-full flex flex-1 items-center justify-center h-screen">
        <div className="container w-3xl h-[80%] flex flex-col items-center justify-between">
          <div className="container w-full h-20 flex items-end justify-end flex-col">
            <h1 className="md:text-5xl text-3xl font-bold mb-2 md:mb-4 md:self-start flex items-center px-10 md:px-0 ">Tech Stack</h1>
          </div>
          <div className="container w-full  h-[80%] flex gap-4 flex-row flex-wrap">
            <div className="html flex flex-col py-10 px-10 bg-black cursor-pointer active:hover:bg-[#341BAC] transition-all duration-500 ease-in-out">
              <FileCode2 size={60}/>
              <sub>HTML</sub>
              </div>
            <div className="html flex flex-col py-10 px-10 bg-black cursor-pointer">
              <img src="../../assets/svg/css.svg" width={60} alt="" />
              <sub>Css</sub>
            </div>
            <div className="html flex flex-col py-10 px-10 bg-black">
              <img src="../../assets/svg/reactjs.svg" width={60} alt="" className="backdrop-brightness-50"/>
              <sub>React Js</sub>
            </div>
            <div className="html flex flex-col py-10 px-10 bg-black">
              <img src="../../assets/svg/next.svg" width={60} alt="" className="backdrop-brightness-50"/>
              <sub>Next Js</sub>
            </div>
            <div className="html flex flex-col py-10 px-10 bg-black">
              <img src="../../assets/svg/tailwind.svg" width={60} alt="" className="backdrop-brightness-50"/>
              <sub>Tailwind</sub>
            </div>
            <div className="html flex flex-col py-10 px-10 bg-black">
              <img src="../../assets/svg/bootstrap.svg" width={60} alt="" className="backdrop-brightness-50"/>
              <sub>Bootstrap</sub>
            </div>
            <div className="html flex flex-col py-10 px-10 bg-black">
              <img src="../../assets/svg/vite.svg" width={60} alt="" className="backdrop-brightness-50"/>
              <sub>Vite</sub>
            </div>
            <div className="html flex flex-col py-10 px-10 bg-black">
              <img src="../../assets/svg/mysql.svg" width={60} alt="" className="backdrop-brightness-50"/>
              <sub>mysql</sub>
            </div>
            <div className="html flex flex-col py-10 px-10 bg-black">
              <img src="../../assets/svg/git.svg" width={60} alt="" className="backdrop-brightness-50"/>
              <sub>git</sub>
            </div>
            <div className="html flex flex-col py-10 px-10 bg-black">
              <img src="../../assets/svg/javascript.svg" width={60} alt="" className="backdrop-brightness-50"/>
              <sub>javascript</sub>
            </div>
            <div className="html flex flex-col py-10 px-10 bg-black">
              <img src="../../assets/svg/react-n.svg" width={60} alt="" className="backdrop-brightness-50"/>
              <sub>React Native</sub>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TechStack