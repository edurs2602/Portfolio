import chasquiImg from "../../assets/chasqui.jpeg" 
import todoListImg from "../../assets/todolist.jpeg"
import bookImg from "../../assets/book.jpeg"

import { Button, Carousel, Typography } from "@material-tailwind/react";

const Projects = () => {
    const next = () => {}
    const previous = () => {}

    return (
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1 gap-16 mb-40">
            <div className="h-full flex flex-col justify-center lg:items-start items-center text-black">
                <h1 data-aos="fade-right" className="text-7xl font-semibold leading-11 mb-7">Projetos<span className="text-primary">.</span></h1>
                <div data-aos="fade-up" className="flex w-max gap-4">
                    <a href="https://drive.google.com/file/d/1PtjrlwGu4uc_27bJl0Asd4k2cwUDgme6/view?usp=sharing" className="bg-secondary hover:bg-primary text-black font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span><a href="https://drive.google.com/file/d/1PtjrlwGu4uc_27bJl0Asd4k2cwUDgme6/view?usp=sharing"></a>Download CV</span>
                    </a>
                </div>    
            </div>

            <Carousel data-aos="fade-left" 
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            className="rounded-xl" loop={true} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <div className="relative h-full w-full">
                    <img
                        src={chasquiImg}
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                        variant="h1"
                                        color="white"
                                        className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                            Chasqui Express
                            </Typography>
                            <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} children={undefined}                    ></Typography>
                            <div className="flex justify-center gap-2">
                                <a href="https://chasqui-tracker.vercel.app/">
                                    <Button size="sm" color="white" variant="gradient" className="flex items-center gap-2" placeholder={undefined} ripple={true} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Visite
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                        </svg>
                                    </Button>
                                </a>
                            </div>  
                        </div>
                    </div>
                </div>
                
                <div className="relative h-full w-full">
                    <img
                        src={bookImg}
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                        variant="h1"
                                        color="white"
                                        className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                            Book <br /> Review
                            </Typography>
                            <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} children={undefined}                    ></Typography>
                            <div className="flex justify-center gap-2">
                                <a href="http://143.198.228.70:50">
                                    <Button size="sm" color="white" variant="gradient" className="flex items-center gap-2" placeholder={undefined} ripple={true} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Visite
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                        </svg>
                                    </Button>
                                </a>
                                <a href="https://github.com/edurs2602/Review-Book-Blog">
                                    <Button size="sm" color="white" variant="outlined" className="flex items-center gap-2" placeholder={undefined} ripple={true} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Repositorio
                                    </Button>
                                </a>
                            </div>  
                        </div>
                    </div>
                </div>

                <div className="relative h-full w-full">
                    <img
                        src={todoListImg}
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                        variant="h1"
                                        color="white"
                                        className="mb-4 text-3xl md:text-4xl lg:text-5xl" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                            Todo <br /> List
                            </Typography>
                            <Typography
                                        variant="lead"
                                        color="white"
                                        className="mb-12 opacity-80" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} children={undefined}                    ></Typography>
                            <div className="flex justify-center gap-2">
                                <a href="http://143.198.228.70:60">
                                    <Button size="sm" color="white" variant="gradient" className="flex items-center gap-2" placeholder={undefined} ripple={true} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Visite
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                        </svg>
                                    </Button>
                                </a>
                                <a href="https://github.com/edurs2602/flasktodolist">
                                    <Button size="sm" color="white" variant="outlined" className="flex items-center gap-2" placeholder={undefined} ripple={true} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                        Repositorio
                                    </Button>
                                </a>
                            </div>  
                        </div>
                    </div>
                </div>

            </Carousel>

            
        </div>
    );
};

export default Projects;