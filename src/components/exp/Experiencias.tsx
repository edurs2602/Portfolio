import { Timeline, TimelineBody, TimelineConnector, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";

const Exp = () => {
    return (
        <div data-aos="fade-down" className="h-10vh lg:flex lg:max-xl:flex lg:justify-between lg:gap-16 items-start z-50 text-white lg:py-5 lg:px-20 px-5 py-10 flex-1 lg:mb-40">
            
            <div className="h-full lg:py-40 py-20 flex flex-col justify-start lg:justify-center items-start text-black dark:text-white">
                <h1 className="text-5xl font-semibold leading-11"><span className="text-black dark:text-white">Experiências</span></h1>
                <h1 className="text-5xl font-semibold leading-11 mb-10 text-primary">Profisionais</h1>
                <div className="lg:w-[32rem]">
                    <Timeline>
                        <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <div>
                                <Typography variant="h6" color="blue-gray" className="leading-none dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    Freelancer
                                </Typography>
                                <Typography variant="small" color="blue-gray" className="dark:text-gray-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    03 / 2022.
                                </Typography>
                            </div>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gray" className="font-normal text-gray-600 dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <strong>Desenvolvedor Backend Freelancer</strong> - Desenvolvi o backend do projeto <a href="https://chasqui-tracker.vercel.app/" class="text-secondary">Chasqui Express</a> utilizando Django, Docker e PostgreSQL. Criei funcionalidades críticas e escaláveis, gerenciei ambientes com Docker e otimizei o banco de dados para desempenho e segurança.    
                            </Typography>
                        </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <div>
                                <Typography variant="h6" color="blue-gray" className="leading-none dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    Superintendência de Tecnologia da Informação
                                </Typography>
                                <Typography variant="small" color="blue-gray" className="dark:text-gray-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    07 / 2022 - 08 / 2024
                                </Typography>
                            </div>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gray" className="font-normal text-gray-600 dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <strong>Desenvolvedor Backend</strong> - Atuei na STI (UFRN), desenvolvendo APIs com Django e PostgreSQL, e utilizando Bootstrap para criar interfaces frontend.    
                            </Typography>
                        </TimelineBody>
                        </TimelineItem>
                        <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader className="h-3">
                            <TimelineIcon />
                            <div>
                                <Typography variant="h6" color="blue-gray" className="leading-none dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    Fiscallize
                                </Typography>
                                <Typography variant="small" color="blue-gray" className="dark:text-gray-400" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                    08 / 2024 - Presente
                                </Typography>
                            </div>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gray" className="font-normal text-gray-600 dark:text-white" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                                <strong>Desenvolvedor Fullstack</strong> - Crio APIs REST com Django e PostgreSQL, utilizando Docker para gerenciar ambientes e GitHub Actions para pipelines de CI/CD. Executo testes automatizados com Pytest e utilizo templates do Django com Tailwind para interfaces responsivas.
                            </Typography>
                        </TimelineBody>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>

            <div className="h-full lg:py-40 flex flex-col lg:justify-center items-start text-black dark:text-white">
                <h1 className="text-5xl font-semibold leading-11"><span className="text-black dark:text-white">Experiências</span></h1>
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
