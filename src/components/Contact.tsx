import { MessageCircleMore } from "lucide-react"

const contact = () => {
  return (
     <div className='md:py-30 flex flex-col justify-center items-center py-10 h-full'>
        <i className="md:px-30 md:text-3xl md:py-20 text-center py-32 px-20">“Once, I was broken. But instead of drowning in the pain, I turned it into code. Every line I write is proof that heartbreak doesn’t have to destroy you—it can build something new.”</i>
        <button className="py-3 px-20 bg-[#341BAC] text-amber-50 font-bold flex flex-row cursor-pointer gap-4 rounded-xl"><MessageCircleMore /><a href="https://wa.me/6281779802449?text=Halo,%20saya%20tertarik%20dengan%20portofolio%20Anda.">Contact</a></button>
     </div>
  )
}

export default contact