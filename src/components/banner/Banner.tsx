import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import img from "../../assets/eufundobw.png"
import AOS from 'aos' 
import 'aos/dist/aos.css'

const Banner = () => {
    AOS.init({
        easing: 'ease-out-quart',
        delay: 0,
        duration: 900,
    })

    return (
        <div data-aos="fade-up" className="h-10vh lg:flex lg:max-xl:flex lg:justify-between z-50 text-white lg:py-5 lg:px-30 px-5 py-10 gap-10 flex-1">
            <div className="h-full lg:py-40 lg:flex-col lg:justify-center justify-start items-start text-black dark:text-white">
                <h3 className="text-2xl font-light mb-2">Hey, sou Eduardo👋🏼</h3>
                <h1 className="text-7xl font-semibold leading-11"><span className="text-primary">Back</span>end</h1>
                <h1 className="text-7xl font-semibold leading-11 mb-6">Developer</h1>
                <h3 className="text-2xl font-light">Sou um desenvolvedor backend pronto para ajudar na construção de websites incríveis, feitos para encantar os usuários.</h3>
                <div className="flex mt-4 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://github.com/edurs2602" className="text-accent hover:text-primary rounded-full glow p-2">
                                <AiFillGithub className="text-4xl"></AiFillGithub>
                            </a>
                            <a href="https://www.linkedin.com/in/edurs2602/" className="text-accent hover:text-primary rounded-full glow p-2">
                                <AiFillLinkedin className="text-4xl"></AiFillLinkedin>
                            </a>
                            <a href="https://www.instagram.com/ribeiro.eduardo_/" className="text-accent hover:text-primary rounded-full glow p-2">
                                <AiFillInstagram className="text-4xl"></AiFillInstagram>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-90 lg:content-center flex justify-center items-center">
                <div className="">
                    <img src={img} className="rounded-full aspect-square border-2 p-10 border-primary w-full h-full object-cover" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;