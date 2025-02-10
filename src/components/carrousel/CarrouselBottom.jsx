'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import './carrousel.css';
import Link from 'next/link';
import Image from "next/image";


export default function CarrouselBottom() {
  const banners=[
    {
      link:"https://drive.google.com/file/d/1WbD02UCoqIgfjZT2cwwXWjwBCgcKnT7a/view?usp=sharing",
      img:"/carrousel_bottom/banner-desk-menu_1.svg",
      alt: "Menú Ejecutivo 1"
    },
    {
      link:"https://drive.google.com/file/d/1WbD02UCoqIgfjZT2cwwXWjwBCgcKnT7a/view?usp=sharing",
      img:"/carrousel_bottom/banner-desk-menu_2.svg",
      alt: "Menú Ejecutivo 2"
    }
  ]
    return (
        <Swiper
        className=""
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          banners.map((banner, index)=>(
            <SwiperSlide key={index} className="flex justify-center items-center">
              <Link href={banner.link} target="_blank">
                <Image src={banner.img} alt={banner.alt}
                width={300} height={300}  className="w-full" />
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
    );
}