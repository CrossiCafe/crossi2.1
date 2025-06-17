'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import './carrousel.css';
import Link from 'next/link';
import Image from "next/image";
import Crossi from "/public/franquicias/logo-croissant-brown.svg";
const banners=[
  {
    link:"https://drive.google.com/file/d/1WbD02UCoqIgfjZT2cwwXWjwBCgcKnT7a/view?usp=sharing",
    imgDesktop:"/carrousel_bottom/banner-desk-menu_1.svg",
    imgMobile:"/carrousel_bottom/banner-mobile-menu_1.svg",
    alt: "Menú Ejecutivo 1"
  },
  {
    link:"https://drive.google.com/file/d/1WbD02UCoqIgfjZT2cwwXWjwBCgcKnT7a/view?usp=sharing",
    imgDesktop:"/carrousel_bottom/banner-desk-menu_2.svg",
    imgMobile:"/carrousel_bottom/banner-mobile-menu_2.svg",
    alt: "Menú Ejecutivo 2"
  }
]

export default function CarrouselBottom() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para actualizar el estado según el tamaño de la pantalla
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Llamar a la función inmediatamente y agregar el event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener cuando el componente se desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

    return (

      <div className="max-w-[1100px] mx-auto">
      {isMobile ?
        (<div className='flex flex-col items-center justify-center gap-4 mb-6 md:hidden'>
          <div className=' m-4 mt-8  max-w-[1000px] lg:mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6'>
            <h4 className='font-bold font-josefin text-rustyRed text-center text-3xl lg:text-4xl xl:text-3xl '>
                Almorzá en
            </h4>
            <Image 
              src={Crossi}
              width={299}
              height={35.98}
              alt="Croissant"
              className='mb-2 sm:mb-3 w-2/4 '
                />
          </div>
          <div className='flex flex-col items-center justify-center gap-2 px-3'>
            <p className='font-josefin text-center font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary max-w-[850px] mx-auto'><span className='font-semibold'>MENÚ EJECUTIVO</span> </p>
            <p className='font-josefin text-center font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary max-w-[850px] mx-auto px-3'><span className='font-semibold'>INCLUYE:</span> Plato, Café y Limonada, Pomelada o Agua</p>
            <p className='font-josefin text-center font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary max-w-[850px] mx-auto'><span className='font-semibold'>DÍAS:</span> Lunes a Viernes</p>
            <p className='font-josefin text-center font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary max-w-[850px] mx-auto'><span className='font-semibold'>HORARIO:</span> 11hs a 15hs</p>
            <Link href="https://drive.google.com/file/d/1N9TqTifh9I9juTbQOKfsovTs8e00c9YF/view" target="_blank" className='bg-primary text-white font-josefin font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-4 py-2 rounded-md hover:bg-rustyRed transition-colors duration-300'>
            Mira las opciones aca! 
            </Link>
          </div>

        </div>
        ):
        (<Swiper
        className=""
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        
          {banners.map((banner, index)=>(
            <SwiperSlide key={index} className="flex justify-center items-center">
              <Link href={banner.link} target="_blank">
                <Image src={ banner.imgDesktop} alt={banner.alt}
                width={300} height={300}  className="w-full" />
              </Link>
            </SwiperSlide>
          ))}
          </Swiper>)
      }
      </div>

    );
}