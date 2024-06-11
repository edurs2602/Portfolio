const About = () => {
    return (
        <div className="h-10vh lg:flex justify-between z-50 text-white lg:py-5 lg:px-20 px-5 py-10 gap-10 flex-1 lg:gap-16">
            <div className="h-full lg:py-40 flex flex-col lg:justify-center lg:items-start items-start text-black dark:text-white">
                <h1 data-aos="fade-right" className="text-7xl font-semibold leading-11 mb-4">Sobre<span className="text-primary">.</span></h1>  
            </div>
            <div data-aos="fade-left" className="h-full lg:py-40 flex flex-col justify-between lg:items-start items-center text-black dark:text-white">
                <h1 className="text-2xl font-light leading-11 mb-4">Sou Luís Eduardo, desenvolvedor Python com foco em aplicações web utilizando Django. Minha jornada na área de tecnologia começou no Instituto Federal do Rio Grande do Norte, onde me formei como Técnico em Informática entre 2018 e 2021. Essa formação sólida me proporcionou uma base técnica robusta e um profundo interesse por desenvolvimento de software.</h1>
                <h1 className="text-2xl font-light leading-11 mb-4">Atualmente, estou cursando bacharelado em Tecnologia da Informação na Universidade Federal do Rio Grande do Norte, uma continuidade natural do meu entusiasmo e dedicação à área desde jovem. Minha paixão por tecnologia sempre me motivou a buscar conhecimento e aprimorar minhas habilidades constantemente.</h1>
                <h1 className="text-2xl font-light leading-11">Como desenvolvedor, minha experiência se concentra principalmente no desenvolvimento de aplicações web com Django, onde procuro criar soluções eficientes e escaláveis. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente e contribuir para projetos inovadores.</h1>
            </div>
        </div>
    );
};

export default About;