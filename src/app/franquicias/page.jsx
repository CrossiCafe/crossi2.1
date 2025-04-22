import { BannerHeader } from "@/components/bannerHeader/BannerHeader";
import './franquicias.css';
import Image from "next/image";
import Crossi from "/public/croissant-text.svg";
import WhatsApp from '@/components/whatsapp/whatsapp';


const FranquiciasPage = () => { 

    return (
        <main className=''>
            <BannerHeader img={"/franquicias/franquicias-banner.svg"} title={"Franquicias"} text={" TU OPORTUNIDAD DE BRILLAR CON"} textImg={'/franquicias/logo-croissant-brown.svg'} classNameText={'sm:bottom-[-120px] lg:bottom-[-170px]'}/>
            
            <div className='w-full flex flex-col items-center justify-center gap-10 mb-20 sm:mt-40 xl:mt-60'>
                <h2 className='font-josefin font-bold text-primary drop-shadow-[0px_6px_6px_rgba(0,0,0,0.3)] text-4xl sm:text-5xl xl:text-6xl uppercase mt-10'>Franquicias</h2>
                <h5 className="font-courier text-rustyRed font-semibold text-xl sm:text-2xl xl:text-4xl text-center px-5 md:px-10 max-w-[1000px]">Al unirte a nuestra franquicia, te convertis en parte de esta familia apasionada. Te ofrecemos un modelo probado, respaldo continuo y la posibilidad de compartir la magia de CROSSI con tu comunidad.</h5>
                <div className="flex flex-col sm:flex-row sm:gap-5">
                    <ul className="custom-ul">
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Clientes fidelizados</li>
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Excelente calidad de producto</li>
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Locales superadores</li>
                    </ul>
                    <ul className="custom-ul">
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Centro de producción propio </li>
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Consumidores foodies </li>
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Diversidad de productos</li>
                    </ul>
                </div>
                <div className="rounded-xl bg-primary p-3 sm:m-4 lg:mx-20">
                    <div className=" flex gap-3 justify-center items-end flex-wrap py-5 sm:py-10 px-2 sm:px-5 font-white">   
                        <h4 className="font-josefin text-white font-semibold text-2xl sm:text-4xl xl:text-5xl">Queres abrir un</h4>
                        <Image 
                                  src={Crossi}
                                  width={299}
                                  height={35.98}
                                  alt="Croissant"
                                  className='mb-2 sm:mb-3 w-2/4 sm:w-1/3 '
                                   />
                        <h4 className="font-josefin text-white font-semibold text-2xl sm:text-4xl xl:text-5xl">en tu ciudad?</h4>
                    </div>
                    <div>

                    <WhatsApp number={'5492235246416'} text={'Dejanos tu consulta aca!'} defaultText={'Hola%21%20Estoy%20interesado%2Fa%20en%20conocer%20m%C3%A1s%20sobre%20las%20franquicias%20de%20Croissant%20Caf%C3%A9%21'}
                    classNameBox={'bg-rustyRed rounded-2xl size-fit px-10 py-4 mx-auto mb-7 text-primary font-josefin text-md sm:text-3xl xl:text-4xl'} classNameImg={'hidden'}/>
                    </div>
                        
                </div>
            </div>
        </main>
    )
}
export default FranquiciasPage;