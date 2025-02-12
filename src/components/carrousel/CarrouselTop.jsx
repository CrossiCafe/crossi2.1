'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import './carrousel.css';
import Image from "next/image";
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';


export default function CarrouselTop() {
  const banners=[
    {
      img:'/carrousel_top/montecristo.svg',
      alt: 'MONTECRISTO',
      title: 'MONTECRISTO',
      titleColor: 'primary',
      bgColor:'sandGold',
      description:'Nuestra joyita registrada. Sandwich de tostadas francesas con provolone y jamón, espolvoreado con azúcar impalpable.'
    },
    {
      img:' /carrousel_top/crossinesa_mac_and_cheese.svg',
      alt: 'crossinesa “mac and cheese”',
      title: 'CROSSINESA “mac and cheese”',
      titleColor: 'oliveGreen',
      bgColor:'oliveGreenLight',
      description:'Milanesa de bife de chorizo con guarnición de mac and cheese.'
    },
    {
      img:'/carrousel_top/scones_rellenos.svg',
      alt: 'scones rellenos',
      title: 'SCONES RELLENOS',
      titleColor: 'white',
      bgColor:'primary',
      description:'Scon de queso relleno de lomito y cheddar.'
    },
    {
      img:'/carrousel_top/tabla_crossineta.svg',
      alt: 'tabla crossineta',
      title: 'tabla crossineta',
      titleColor: 'oliveGreen',
      bgColor:'oliveGreenLight',
      description:'Sorrenfritos, Papas fritas, Dips guacamole, cheddar y alioli, Tartaleta de Carne, Tartaleta de verdura, Bruschetas de jamón crudo y tomate, Scones rellenos, Quesadillas, Pinchos de Langostinos.'
    },
    {
      img:'/carrousel_top/torta_bruce.svg',
      alt: 'torta bruce',
      title: 'torta bruce',
      titleColor: 'primary',
      bgColor:'sandGold',
      description:'Bizcochuelo húmedo de chocolate relleno de crema bariloche. Cubierto en baño de chocolate.'
    }
  ]
    return (
      <div className="max-w-[1100px] mx-auto pt-8">
        <h2 className="p-8 text-center uppercase font-josefin font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
        nuestros platos estrella
        </h2>
        <Swiper
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
        {
          banners.map((banner, index)=>(
            <SwiperSlide key={index} className={"flex justify-center items-center"}>
              <div className={twMerge("flex flex-col md:flex-row justify-center items-center max-w-[1000px] mx-2 md:mx-auto rounded-xl my-2 p-2 ", `!bg-${banner.bgColor ?? 'primary'}`)}>
                <div className='rounded-xl !w-full md:!w-1/2 overflow-hidden'>
                  <Image src={banner.img} alt={banner.alt} width={612} height={441}  className="!w-full" />
                </div>
                <div className='flex flex-col justify-start items-start gap-6 py-4 px-8 !w-full md:!w-1/2 min-h-[350px] sm:min-h-[250px] md:min-h-[335px] lg:min-h-auto'>
                    <h3 className={twMerge('font-anton uppercase text-3xl sm:text-4xl md:text-5xl mt-3',`  text-${banner.bgColor ? banner.titleColor : 'white'}`)}>
                        {banner.title}
                    </h3>
                    <p className="font-courier text-white">
                        {banner.description}
                    </p>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    );
}