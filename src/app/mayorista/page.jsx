import { BannerHeader } from "@/components/bannerHeader/BannerHeader";
import './mayorista.css';
import WhatsApp from '@/components/whatsapp/whatsapp';


const MayoristaPage = () => { 

    return (
        <main className=''>
            <BannerHeader img={"/mayorista/mayorista-banner.png"} title={"Mayorista"} text={"Sumá una amplia variedad de productos de excelente calidad a tu negocio y lleva tu pastelería al siguiente nivel"} classNameText={'sm:bottom-[-120px] lg:bottom-[-140px]'}/>
            
            <div className='w-full flex flex-col items-center justify-center gap-10 mb-20 sm:mt-40 xl:mt-60'>
                <h2 className='font-josefin font-bold text-primary drop-shadow-[0px_6px_6px_rgba(0,0,0,0.3)] text-4xl sm:text-5xl xl:text-6xl uppercase mt-10 text-center'>Venta Mayorista</h2>
                <h5 className="font-courier text-rustyRed font-semibold text-xl sm:text-2xl xl:text-4xl text-center px-5 md:px-10 max-w-[1000px]">En Crossi, sabemos lo importante que es contar con productos de calidad para el éxito de tu negocio. Por eso, te ofrecemos una amplia variedad de productos de produccion propia de pastelería y panificados al por mayor, ideales para panaderías, reposterías y todo tipo de emprendimientos en el rubro.</h5>
                <div className="flex flex-col sm:flex-row sm:gap-5">
                    <ul className="custom-ul">
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Panificados</li>
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Pasteleria</li>
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Medialunas</li>
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Croissants</li>
                    </ul>
                    <ul className="custom-ul">
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Alfajores</li>
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Monoporciones</li>
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Shots</li>
                        <li className="font-josefin text-rustyRed font-semibold text-lg sm:text-xl xl:text-3xl">Tostados</li>
                    </ul>
                </div>
                <div className="rounded-xl bg-primary p-3 sm:m-4 lg:mx-20">
                    <div className=" flex gap-3 justify-center items-end flex-wrap py-5 sm:py-10 px-2 sm:px-5 font-white">   
                        <h4 className="font-josefin text-white font-semibold text-2xl sm:text-4xl xl:text-5xl">Queres consultar por nuestro catálogo?</h4>
                    </div>
                    <div>
                        <WhatsApp number={'5492235246416'} text={'Escribinos al 2235246416'} defaultText={'Hola%21%20Estoy%20interesado%2Fa%20en%20conocer%20m%C3%A1s%20sobre%20la%20venta%20mayorista%20de%20Croissant%20Caf%C3%A9%21%0AMe%20compartir%C3%ADan%20el%20cat%C3%A1logo%20completo%2C%20gracias.'}
                        classNameBox={'bg-rustyRed rounded-2xl size-fit px-10 py-4 mx-auto mb-7 text-primary font-josefin text-md sm:text-3xl xl:text-4xl'} classNameImg={'hidden'}/>
                    </div>
                        
                </div>
            </div>
        </main>
    )
}
export default MayoristaPage;