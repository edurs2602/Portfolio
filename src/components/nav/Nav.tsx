import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci"


const Nav = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const content = <>
        <div className="lg:hidden flex relative top-16 left-0 transition">
            <ul className="text-center text-xl p-10 pt-0 pr-20">
                <Link spy={true} smooth={true} to="Home">
                    <li className="my-4 py-4 border-b border-zinc-800 hover:bg-zinc-800 hover:rounded">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="About">
                    <li className="my-4 py-4 border-b border-zinc-800 hover:bg-zinc-800 hover:rounded">Sobre</li>
                </Link>
                <Link spy={true} smooth={true} to="Exp">
                    <li className="my-4 py-4 border-b border-zinc-800 hover:bg-zinc-800 hover:rounded">Experiencias</li>
                </Link>
                <Link spy={true} smooth={true} to="Projects">
                    <li className="my-4 py-4 border-b border-zinc-800 hover:bg-zinc-800 hover:rounded">Projetos</li>
                </Link>
                <Link spy={true} smooth={true} to="Skills">
                    <li className="my-4 py-4 border-b border-zinc-800 hover:bg-zinc-800 hover:rounded">Skills</li>
                </Link>
                <Link spy={true} smooth={true} to="Contact">
                    <li className="my-4 py-4 border-b border-zinc-800 hover:bg-zinc-800 hover:rounded">Contato</li>
                </Link>
            </ul>
        </div>
    </>

    return (
        <nav>
            <div className="h-10vh flex lg:justify-between items-start justify-start text-black lg:py-5 px-5 lg:px-20 py-4 flex-1">
                <div className="flex lg:items-center items-start justify-start flex-1 font-bold">
                    <span className="text-2x1 font-bold text-black">Eduardo</span>
                    <span className="text-2x1 font-bold text-accent">.</span>
                </div>
                <div className="lg:flex md:flex lg:flex-1 items-center justify-begin font-semibold hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-1xl font-normal text-gray-900">
                            <Link spy={true} smooth={true} to="Home">
                                <li className="hover:text-primary text-zinc-800 transition cursor-pointer">Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="About">
                                <li className="hover:text-primary text-zinc-800 transition cursor-pointer">Sobre</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Exp">
                                <li className="hover:text-primary text-zinc-800 transition cursor-pointer">Experiencias</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Projects">
                                <li className="hover:text-primary text-zinc-800 transition cursor-pointer">Projetos</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Skills">
                                <li className="hover:text-primary text-zinc-800 transition cursor-pointer">Skills</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contact">
                                <li className="hover:text-primary text-zinc-800 transition cursor-pointer">Contato</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className="flex-1">
                    {click && content}

                </div>

                <button className="flex sm:hidden transition text-2xl" onClick={handleClick}>
                    {click ? <FaTimes/> : <CiMenuFries/>}
                </button>
                
            </div>
        </nav>
    );
};

export default Nav;
