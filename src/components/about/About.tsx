const About = () => {
    return (
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1 gap-16">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-black">
                <h1 data-aos="fade-right" className="text-7xl font-semibold leading-11 mb-4">Sobre<span className="text-primary">.</span></h1>  
            </div>
            <div data-aos="fade-left" className="h-full lg:py-40 flex flex-col justify-between lg:items-start items-center text-black">
                <h1 className="text-2xl font-light leading-11 mb-4">Iniciei minha jornada no mundo na tecnologia as 15 anos, quando entrei no ensino médio integrado à informática no IFRN. Tive diversas experiências e me apaixonei por programar e por solucionar problemas com a ajuda da tecnologia.</h1>
                <h1 className="text-2xl font-light leading-11 mb-4">Hoje, formado pelo IFRN e com uma ótima base em desenvolvimento, continuei meus passos e estou no bacharelado em Tecnologia da Informação no Instituto Metropole Digital. Tenho interesse na área de engenharia de software, arquitetura de software, infraestrutura de software e em áreas relacionadas a Blockchain.</h1>
            </div>
        </div>
    );
};

export default About;