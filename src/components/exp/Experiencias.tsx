import { Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";

const Exp = () => {
    return (
        <div data-aos="fade-down" className="h-10vh flex justify-between gap-16 items-start z-50 text-white lg:py-5 px-20 py-4 flex-1 mb-40">
            
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-black">
                <h1 className="text-5xl font-semibold leading-11"><span className="text-black">Experiencias</span></h1>
                <h1 className="text-5xl font-semibold leading-11 mb-10 text-primary">Profisionais</h1>
                <div className="w-[32rem]">
                    <Timeline>
                        <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Freelancer - 03 / 2022.
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Freelancer backend para o projeto <span className="text-secondary"><a href="https://chasqui-tracker.vercel.app/">Chasqui Express</a></span> usando as tecnologias: Django, Docker, Bootstrap.
                            </Typography>
                        </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Superintendência de Tecnologia da Informação - 06 / 2022.
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Desenvolvedor backend na STI, usando Django para criação de api's.
                            </Typography>
                        </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>

            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-black">
                <h1 className="text-5xl font-semibold leading-11"><span className="text-black">Experiencias</span></h1>
                <h1 className="text-5xl font-semibold leading-11 mb-10 text-primary">Academicas</h1>
                <div className="w-[32rem]">
                    
                <Timeline>
                        <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Instituto Federal do Rio Grande do Norte - 04 / 2018.
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Tecnico em Informatica
                            </Typography>
                        </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <Typography variant="h6" color="blue-gray" className="leading-none" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Universidade Federal do Rio Grande do Norte - 03 / 2022.
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gray" className="font-normal text-gray-600" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Bacharelando em Tecnologia da Informação
                            </Typography>
                        </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default Exp;