import Image from 'next/image';

export const SectionTop = () => {
    return (
        <div className="sm:mt-28">
            <p className="p-3  sm:p-6 font-josefin text-center font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary max-w-[850px] mx-auto">
                En crossi no solo regalamos calidad y mucho amor en nuestros productos,
            </p>
            <h2 className="p-2 sm:px-5 font-josefin text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-primary  max-w-[1100px] mx-auto">
            llevamos todo lo que hacemos a otro nivel para que tu experiencia se convierta en un viaje de ida
            </h2> 


            <div className="mt-6 mb-4 flex flex-col sm:flex-row items-center justify-center max-w-[1000px] mx-auto gap-3">
                <div className="flex flex-col items-center justify-center max-w-[280px] ">
                    <Image src="/home/corazon.png" alt="Estampa de Corazón" width={215} height={245} className="!max-w-[150px] h-auto"  />
                    <h5 className='font-josefin text-center uppercase font-bold text-2xl xl:text-3xl 2xl:text-4xl   text-oliveGreen '>
                        SOMOS RICOS Y ABUNDANTES
                    </h5>
                </div>
                <div className="flex flex-col items-center justify-center max-w-[280px]  ">
                    <Image src="/home/camera.png" alt="Estampa de Camara de Fotos" width={215} height={245} className="!max-w-[160px] h-auto my-1"  />
                    <h5 className='font-josefin text-center uppercase font-bold text-2xl xl:text-3xl 2xl:text-4xl   text-oliveGreen '>
                        Y MUY INSTAGRAMEABLES
                    </h5>
                </div>
            </div>
            <p className="p-3  sm:p-6 font-josefin text-center font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary max-w-[1000px] mx-auto">
            A lo largo de estos años creamos una comunidad enorme y fiel a la que llamamos Crossifans. Para nosotros,  
            <span className="font-bold">
            &#160;LO MAS IMPORTANTE.&#160; 
            </span>
            Te invitamos a ser parte de ella. Compartinos tu experiencia en cualquiera de nuestras estaciones.
            </p>
        </div>
    );
}