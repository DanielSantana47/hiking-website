import { BsArrowRight } from "react-icons/bs"
import { Reveal } from "./Reveal"

export const Section1 = ()=> {
    return(
        <section  className="w-screen bg-[#0b1d27] py-8 ">
                <div id="section1" className="w-full h-full container mx-auto grid grid-cols-1 md:grid-cols-2 ">
                <div className="px-3 md:px-8 xl:px-28 flex flex-col justify-center relative">
                        <span  className="text-[100px] md:text-[200px] text-white/10 font-bold absolute top-0 left-0 lg:left-10">01</span>
                    <Reveal>
                        <div className="flex items-center gap-4">
                            <div className="bg-yellow-400 rounded-full h-1 w-16"></div>
                                <h2 className="text-yellow-400 font-semibold">GET STARTED</h2>
                        </div>
                    </Reveal>
                    <Reveal>
                        <h2 className="text-4xl md:text-5xl xl:text-6xl pb-2 text-white mt-10">What level of  hiker are you?</h2>
                    </Reveal>
                    <Reveal>
                        <p className="md:text-base text-sm leading-7 md:leading-8 mt-8">Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?</p>
                    </Reveal>
                    <Reveal>
                        <a className="font-bold mt-8 mb-8 md:mb-0 inline-block hover:text-yellow-400 cursor-pointer transition-all duration-300">read more <BsArrowRight className="inline-block font-bold text-2xl"/></a>
                    </Reveal>
                </div>
                <Reveal>
                    <div className="w-full px-3 md:px-8 xl:px-24 flex items-center justify-center">
                            <div className="md:h-[75vh] sm:h-[60vh] h-[35vh] w-full bg-cover bg-bottom  bg-[url(https://images.unsplash.com/photo-1533240332313-0db49b459ad6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)]">

                            </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}