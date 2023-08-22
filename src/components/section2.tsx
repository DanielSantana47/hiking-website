import { BsArrowRight } from "react-icons/bs"
import { Reveal } from "./Reveal"

export const Section2 = ()=> {
    return(
        <section id="section1" className="w-screen h-auto md:h-screen bg-[#0b1d27] py-8">
                <div className="w-full h-full container mx-auto grid grid-cols-1 md:grid-cols-2">
                    <Reveal>
                        <div className="w-full h-full px-3 md:px-8 xl:px-24 flex items-center justify-center">
                            <div className="md:h-[75vh] sm:h-[60vh] h-[35vh] mb-8 w-full bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1522850067562-a4c60453058d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80)]">

                            </div>
                        </div>  
                    </Reveal>
                <div className="px-3 md:px-8 xl:px-28 flex flex-col justify-center relative">
                    <span className="text-[100px] md:text-[200px] text-white/10 font-bold absolute lg:top-20 top-0 left-0 lg:left-10">02</span>
                    <Reveal>
                        <div className="flex items-center gap-4">
                            <div className="bg-yellow-400 rounded-full h-1 w-16"></div>
                            <h2 className="text-yellow-400 font-semibold">HIKING ESSENTIALS</h2>
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-4xl md:text-5xl xl:text-6xl pb-2 text-white mt-10">Picking the right Hiking Gear!</h2>
                    </Reveal>
                    <Reveal>
                        <p className="md:text-base text-sm leading-7 md:leading-8 mt-8">The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.</p>
                    </Reveal>
                    <Reveal>
                        <a className="font-bold mt-8 inline-block hover:text-yellow-400 cursor-pointer transition-all duration-300">read more <BsArrowRight className="inline-block font-bold text-2xl"/></a>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}