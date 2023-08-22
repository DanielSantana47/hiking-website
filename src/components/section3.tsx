import { BsArrowRight } from "react-icons/bs"
import { Reveal } from "./Reveal"

export const Section3 = ()=> {
    return(
        <section id="section1" className="w-screen h-auto md:h-screen bg-[#0b1d27] py-8">
                <div className="w-full h-full container mx-auto grid grid-cols-1 md:grid-cols-2">
                <div className="px-3 md:px-8 xl:px-28 flex flex-col justify-center relative">
                    <span className="text-[100px] md:text-[200px] text-white/10 font-bold absolute top-20 left-0 lg:left-10">03</span>
                    <Reveal>
                        <div className="flex items-center gap-4">
                            <div className="bg-yellow-400 rounded-full h-1 w-16"></div>
                            <h2 className="text-yellow-400 font-semibold">WHERE YOU GO IS THE KE</h2>
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-4xl md:text-5xl xl:text-6xl pb-2 text-white mt-10">Understand Your Map & Timing</h2>
                    </Reveal>
                    <Reveal>
                        <p className="md:text-base text-sm leading-7 md:leading-8 mt-8">To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..</p>
                    </Reveal>
                    <Reveal>
                        <a className="font-bold mt-8 mb-8 md:mb-0 inline-block hover:text-yellow-400 cursor-pointer transition-all duration-300">read more <BsArrowRight className="inline-block font-bold text-2xl"/></a>
                    </Reveal>
                </div>
                <Reveal>
                    <div className="w-full px-3 md:px-8 xl:px-24 flex items-center justify-center">
                        <div className="md:h-[75vh] sm:h-[60vh] h-[35vh] w-full bg-cover bg-center  bg-[url(https://images.unsplash.com/photo-1600706844152-3a29fce003b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80)]">

                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}