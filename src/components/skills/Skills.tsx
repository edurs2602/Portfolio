const Skills = () => {
    return (
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1 gap-16">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-black">
                <h1 data-aos="fade-right" className="text-7xl font-semibold leading-11 mb-4">Skills<span className="text-primary">.</span></h1>  
            </div>
            <div data-aos="fade-left" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-black">
                <h1 className="text-5xl font-semibold leading-11">Front<span className="text-primary">end</span></h1>  
                <div className="h-full lg:py-10 flex flex-col justify-center lg:items-start items-start text-gray-700">
                    <h1 className="text-3xl font-light leading-11">Javascript</h1>
                    <h1 className="text-3xl font-light leading-11">Typescript</h1>
                    <h1 className="text-3xl font-light leading-11">React</h1>
                    <h1 className="text-3xl font-light leading-11">Nestjs</h1>
                    <h1 className="text-3xl font-light leading-11">Bootstrap</h1>
                    <h1 className="text-3xl font-light leading-11">Tailwind</h1>
                </div>
            </div>
            <div data-aos="fade-left" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-black">
                <h1 className="text-5xl font-semibold leading-11 mb-4">Back<span className="text-primary">end</span></h1>  
                <div className="h-full lg:py-10 flex flex-col justify-center lg:items-start items-start text-gray-700">
                    <h1 className="text-3xl font-light leading-11">Django</h1>
                    <h1 className="text-3xl font-light leading-11">Flask</h1>
                    <h1 className="text-3xl font-light leading-11">Spring</h1>
                    <h1 className="text-3xl font-light leading-11">Postgresql</h1>
                    <h1 className="text-3xl font-light leading-11">Mysql</h1>
                    <h1 className="text-3xl font-light leading-11">Docker</h1>
                </div>
            </div>
        </div>
    );
};

export default Skills;