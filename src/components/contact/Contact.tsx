import { Button } from "@material-tailwind/react";

const Contact = () => {
    return (
        <div className="h-10vh lg:flex justify-between z-50 text-white lg:py-5 lg:px-20 px-5 py-10 flex-1 gap-16">
            <div className="h-full lg:py-40 flex flex-col lg:justify-center items-start text-black">
                <h1 data-aos="fade-right" className="text-7xl font-semibold leading-11 mb-4">Contato<span className="text-primary">.</span></h1>  
            </div>
            <div className="h-full lg:py-15 flex flex-col justify-between lg:items-start items-center text-black">
                <section className="bg-white dark:bg-gray-900">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <p className="mb-8 lg:mb-16 font-light text-start text-black dark:text-gray-400 sm:text-xl">
                            Precisa de um desenvolvedor de software para seu projeto? Entre em contato pelo formulário abaixo ou envie um e-mail para edurs.2602@gmail.com.
                        </p>
                        <form action="#" className="space-y-8">
                            <div>
                                <label 
                                    htmlFor="email" 
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Seu email
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#3991d0] focus:border-[#3991d0] hover:border-[#3991d0] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3991d0] dark:focus:border-[#3991d0] dark:hover:border-[#3991d0] dark:shadow-sm-light" 
                                    placeholder="email@email.com" 
                                    required 
                                />
                            </div>
                            <div>
                                <label 
                                    htmlFor="subject" 
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                >
                                    Titulo
                                </label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-[#3991d0] focus:border-[#3991d0] hover:border-[#3991d0] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3991d0] dark:focus:border-[#3991d0] dark:hover:border-[#3991d0] dark:shadow-sm-light" 
                                    placeholder="Titulo da mensagem" 
                                    required 
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label 
                                    htmlFor="message" 
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                                >
                                    Sua Mensagem
                                </label>
                                <textarea 
                                    id="message" 
                                    rows={6} 
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#3991d0] focus:border-[#3991d0] hover:border-[#3991d0] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#3991d0] dark:focus:border-[#3991d0] dark:hover:border-[#3991d0]" 
                                    placeholder="Deixe uma mensagem..."
                                ></textarea>
                            </div>
                            <Button 
                                fullWidth
                                type="submit"
                                className="" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                            >
                                Enviar
                            </Button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
