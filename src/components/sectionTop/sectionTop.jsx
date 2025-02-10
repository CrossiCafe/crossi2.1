import Image from 'next/image';
import { SocialMedia } from '../social_media/socialMedia';

const socialMediaData =[
    {
        link:'https://www.instagram.com/croissantmdp/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==',
        className: 'w-[47px] h-auto lg:w-[53px] pt-[0.8px] lg:pt-[1.4px]',
        src:'/social_media/ig.png',
        alt:'Instagram',
    },
    {
        link:'https://www.facebook.com/croissantcafemdp',
        className: 'w-[47px] h-auto lg:w-[53px] pt-[0.8px] lg:pt-[1.4px]',
        src:'/social_media/fb.png',
        alt:'Facebook',
    },
    {
        link:'https://www.tiktok.com/@croissantmdp?is_from_webapp=1&sender_device=pc',
        className: 'w-[40px] h-auto lg:w-[45px] pt-[0.8px] lg:pt-[1.4px]',
        src:'/social_media/tiktok.png',
        alt:'TikTok',
    },
    {
        link:'https://www.linkedin.com/company/croissant-cafe/?originalSubdomain=ar',
        className: 'w-[40px] h-auto lg:w-[45px]',
        src:'/social_media/linkedin.png',
        alt:'LinkedIn',
    }
] 
export const SectionTop = () => {
    return (
        <div className="sm:mt-28">
            <p className="p-3  sm:p-6 font-josefin text-center font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary max-w-[850px] mx-auto">
                En crossi no solo regalamos calidad y mucho amor en nuestros productos,
            </p>
            <h2 className="p-2 sm:px-5 font-josefin text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl  text-primary  max-w-[1100px] mx-auto">
            llevamos todo lo que hacemos a otro nivel para que tu experiencia se convierta en un viaje de ida
            </h2> 


            <div className="pt-6 pb-4 flex flex-col sm:flex-row items-center justify-center max-w-[1000px] mx-auto gap-3">
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
            <div className=' bg-primary m-4 mt-8 rounded-xl p-4 pt-5 max-w-[1000px] lg:mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6'>
                <h4 className='font-bold uppercase text-white text-center text-xl lg:text-2xl xl:text-3xl '>
                    SUMATE A LA COMUNIDAD CROSSI!
                </h4>
                <SocialMedia socialMediaData={socialMediaData}/>
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