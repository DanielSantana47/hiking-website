import { WiAlien } from "react-icons/wi";
import { VscAccount } from "react-icons/vsc"
import { Reveal } from "./Reveal";

export const Menu = ()=> {

    
    return (
        <nav className="flex font-bold justify-between absolute top-0 right-0 left-0 px-3 md:px-8 xl:px-24 my-8 items-center">
            <Reveal>
                <div className="w-16 h-16 text-6xl cursor-pointer"><WiAlien/></div>
            </Reveal>
            <Reveal>
                <ul className="hidden sm:block">
                    <a className="mr-16 inline-flex items-center py-4 hover:text-yellow-400 hover:-translate-y-1 transition-all cursor-pointer duration-300">Equipment</a>
                    <a className="mr-16 inline-flex items-center py-4 hover:text-yellow-400 hover:-translate-y-1 transition-all cursor-pointer duration-300">About us</a>
                    <a className="inline-flex items-center py-4 hover:text-yellow-400 hover:-translate-y-1 transition-all cursor-pointer duration-300">Blog</a>
                </ul>
            </Reveal>
            <Reveal>
                <div className="hover:text-yellow-400 transition-all duration-300 cursor-pointer"><VscAccount className="inline-block mr-4 text-2xl"/>account</div>
            </Reveal>
        </nav>
    )
}