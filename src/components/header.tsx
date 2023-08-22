import { BsArrowDown } from "react-icons/bs";
import { Menu } from "./Menu";
import { Reveal } from "./Reveal";

export const Header = ()=> {
    return(
        <header className="h-[120vh] w-screen bg-no-repeat bg-cover bg-fixed bg-bottom bg-[url(https://img.freepik.com/fotos-gratis/cordilheira-majestosa-reflete-cena-tranquila-na-agua-gerada-por-ia_188544-18340.jpg?w=1380&t=st=1692655816~exp=1692656416~hmac=80945bf9787ab82499ba62447fef92e5d3e74fbfa1427987f1445ca7c3f6f43a)]">
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