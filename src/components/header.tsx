import { BsArrowDown } from "react-icons/bs";
import { Menu } from "./Menu";
import { Reveal } from "./Reveal";

export const Header = ()=> {
    return(
        <header className="h-[120vh] w-screen bg-no-repeat bg-cover bg-fixed bg-bottom bg-[url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80)]">
            <div className="h-full px-3 md:px-8 w-full  bg-gradient-to-b from-transparent from-50% to-[#0b1d27] flex items-center">
                <Menu/>
                <div className="container mx-auto flex flex-col justify-center mb-24">
                    <Reveal>
                    <div className="flex items-center gap-4">
                        <div className="bg-yellow-400 rounded-full h-1  w-16"></div>
                            <h2 className="text-yellow-400 font-semibold">A HICKING GUIDE</h2>
                        </div>
                    </Reveal>
                    <Reveal>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl mt-10 pb-2">Be Prepared For The <br /> Mountains And Beyond!</h1>
                    </Reveal>
                    <Reveal>
                        <a href="#section1" className="font-bold mt-8 inline-block hover:text-yellow-400 cursor-pointer transition-all duration-300">scroll down <BsArrowDown className="inline-block font-bold text-2xl"/></a>
                    </Reveal>
                </div>
            </div>
        </header>
    )
}