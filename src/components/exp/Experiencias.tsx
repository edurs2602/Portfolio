import { Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";

const Exp = () => {
    return (
        <div data-aos="fade-down" className="h-10vh lg:flex lg:max-xl:flex lg:justify-between lg:gap-16 items-start z-50 text-white lg:py-5 lg:px-20 px-5 py-10 flex-1 lg:mb-40">
            
            <div className="h-full lg:py-40 py-20 flex flex-col justify-start lg:justify-center items-start text-black dark:text-white">
                <h1 className="text-5xl font-semibold leading-11"><span className="text-black dark:text-white">Experiencias</span></h1>
                <h1 className="text-5xl font-semibold leading-11 mb-10 text-primary">Profisionais</h1>
                <div className="lg:w-[32rem]">
                    <Timeline>
                        <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <Typography variant="h6" color="blue-gray" className="leading-none dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Freelancer - 03 / 2022.
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gray" className="font-normal text-gray-600 dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Trabalhei como freelancer no desenvolvimento do backend para o projeto <span className="text-secondary"><a href="https://chasqui-tracker.vercel.app/">Chasqui Express</a></span>, utilizando tecnologias como Django, Docker e Postegresql. Utilizando Django, desenvolvi funcionalidades críticas e escaláveis; com Docker, assegurei a criação de ambientes consistentes e replicáveis; e, através do PostgreSQL, gerenciei o banco de dados, garantindo desempenho e segurança na manipulação dos dados.    
                            </Typography>
                        </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <Typography variant="h6" color="blue-gray" className="leading-none dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Superintendência de Tecnologia da Informação - 06 / 2022.
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gray" className="font-normal text-gray-600 dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Atualmente atuo como desenvolvedor bolsista backend na STI - Superintendência de Tecnologia da Informação (UFRN), utilizando Django para a criação de APIs, PostgreSQL como banco de dados e Bootstrap para o desenvolvimento do frontend.
                            </Typography>
                        </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>

            <div className="h-full lg:py-40 flex flex-col lg:justify-center items-start text-black dark:text-white">
                <h1 className="text-5xl font-semibold leading-11"><span className="text-black dark:text-white">Experiencias</span></h1>
                <h1 className="text-5xl font-semibold leading-11 mb-10 text-primary">Academicas</h1>
                <div className="lg:w-[32rem]">
                    
                <Timeline>
                        <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <Typography variant="h6" color="blue-gray" className="leading-none dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Instituto Federal do Rio Grande do Norte - 04 / 2018.
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gray" className="font-normal text-gray-600 dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Sou formado como técnico em informática pelo Instituto Federal do Rio Grande do Norte (IFRN). Meu percurso começou em 2018, quando ingressei no ensino médio técnico, e concluiu-se em 2021.
                            </Typography>
                        </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <Typography variant="h6" color="blue-gray" className="leading-none dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Universidade Federal do Rio Grande do Norte - 03 / 2022.
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gray" className="font-normal text-gray-600 dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                Em 2022, iniciei meus estudos no ensino superior na Universidade Federal do Rio Grande do Norte, cursando Bacharelado em Tecnologia da Informação. Desde então, estou em um processo constante de aprendizado, adquirindo experiências valiosas e únicas.
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