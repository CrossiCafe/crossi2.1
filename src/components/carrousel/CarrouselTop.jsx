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
import { banners } from '@/data/carrouselTopBanner';



export default function CarrouselTop() {
  
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
              <div
              style={{ backgroundColor: `var(--${banner.bgColor})` }}
                className={"flex flex-col md:flex-row justify-center items-center max-w-[1000px] mx-2 md:mx-auto rounded-xl my-2 p-2 "}>
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