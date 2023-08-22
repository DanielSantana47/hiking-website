import { WiAlien } from "react-icons/wi"
import { Reveal } from "./Reveal"

export const Footer = ()=> {
    return(
        <footer className="bg-[#0b1d27] pb-8 md:pb-24 w-screen">
            <div className="container px-3 md:px-8 mx-auto gap-8 md:gap-0 grid md:grid-cols-2 grid-cols-1">
                <div className="pr-8 xl:px-28">
                    <Reveal>
                        <WiAlien className="text-7xl mb-0 lg:mb-6 -ml-5 md:-ml-6 pl-2"/>
                    </Reveal>
                    <Reveal>
                        <p className="text-sm leading-7 lg:text-base lg:leading-8">Get out there & discover your next <br /> slope, mountain & destination!</p>
                    </Reveal>
                    <Reveal>
                        <p className="mt-4 lg:mt-10 text-sm leading-7 lg:text-base lg:leading-8 text-white/50">Copyright 2020 MNTN, Inc. Terms & Privacy <br /> A concept by <a href="https://krystonschwarze.com" target="_blank" className="underline hover:text-yellow-400/50">Kryston Schwarze</a></p>
                    </Reveal>
                </div>
                <div className="flex  md:justify-center gap-16">
                    <div>
                        <Reveal>
                            <h3 className="text-xl lg:text-2xl font-semibold text-yellow-400">More on The Blog</h3>
                        </Reveal>
                        <Reveal>
                            <ul className="flex flex-col gap-2 lg:gap-4 mt-4 lg:mt-8 text-base">
                                <a href="" className="hover:text-yellow-400 transition-all duration-300">About us</a>
                                <a href="" className="hover:text-yellow-400 transition-all duration-300">Contributors & Writers</a>
                                <a href="" className="hover:text-yellow-400 transition-all duration-300">Write For Us</a>
                                <a href="" className="hover:text-yellow-400 transition-all duration-300">Contact Us</a>
                                <a href="" className="hover:text-yellow-400 transition-all duration-300">Privacy Policy</a>
                            </ul>
                        </Reveal>
                    </div>

                    <div className="px-8">
                        <Reveal>
                            <h3 className="text-xl lg:text-2xl font-semibold text-yellow-400">More</h3>
                        </Reveal>
                        <Reveal>
                            <ul className="flex flex-col gap-2 lg:gap-4 mt-4 lg:mt-8 text-base">
                                <a href="" className="hover:text-yellow-400 transition-all duration-300">The Team</a>
                                <a href="" className="hover:text-yellow-400 transition-all duration-300">Jobs</a>
                                <a href="" className="hover:text-yellow-400 transition-all duration-300">Press</a>
                            </ul>
                        </Reveal>
                    </div>
                </div>
            </div>
        </footer>
    )
}