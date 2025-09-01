// src/components/FlipCard.jsx

import { Ribbon } from "lucide-react";

// import me from "../../assets/img/me.jpg"
function FlipCard() {
  return (
    <div className="w-64 h-80 [perspective:1000px] md:w-80 md:h-100 cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        
        {/* Front Side */}
        <div className="overflow-y-hidden absolute inset-0 bg-transparent border-[#7000D2]
         border-2 text-white flex-col flex items-center justify-center rounded-2xl 
         shadow-xl [backface-visibility:hidden] backdrop-blur-3xl">
          <Ribbon size={100} className="absolute bottom-15 hover:text-[#7000d2] md:bottom-20 opacity-10 text-gray-400 -z-1" />
          <img src="../../assets/img/me.jpg" alt="the king" className="p-10 rounded-full grayscale-75" />
          <h1 className="font-bold text-xl md:text-3xl">ROSIZAMHARI</h1>
          <div className="container mx-auto px-5 flex gap-3 flex-1">
          
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-gray-200 text-gray-800 flex items-center justify-center rounded-2xl shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h2 className="text-xl font-bold">Back Side</h2>
        </div>
      </div>
    </div>
  );
}
// #7000D2

export default FlipCard;
