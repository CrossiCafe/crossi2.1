import React from 'react';
import Image from "next/image";
import Logo from "/public/logo-croissant.png";
import { SocialMedia } from '../social_media/socialMedia';

const socialMediaData =[
  {
      link:'https://www.instagram.com/croissantmdp/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==',
      className: 'w-[47px] h-auto lg:w-[53px]',
      src:'/social_media/ig.png',
      alt:'Instagram',
  },
  {
      link:'https://www.facebook.com/croissantcafemdp',
      className: 'w-[47px] h-auto lg:w-[53px]',
      src:'/social_media/fb.png',
      alt:'Facebook',
  },
  {
      link:'https://www.tiktok.com/@croissantmdp?is_from_webapp=1&sender_device=pc',
      className: 'w-[40px] h-auto lg:w-[45px]',
      src:'/social_media/tiktok.png',
      alt:'TikTok',
  },
  {
      link:'https://www.linkedin.com/company/croissant-cafe/?originalSubdomain=ar',
      className: 'w-[40px] h-auto lg:w-[45px]',
      src:'/social_media/linkedin2.png',
      alt:'LinkedIn',
  }
]

export default function Footer() {
  return (
    <footer className=" grid grid-cols-1 lg:grid-cols-3 gap-4 p-5  min-h-[85px] bg-rustyRed w-full">
        <div className="md:col-span-1 flex justify-center items-center lg:pt-0">
          <Image 
            src={Logo}
            width={150}
            height={20}
            alt="Logo Croissant"
            className='brand-logo'
            priority />
        </div>
        <div className="text-white flex flex-col justify-center items-center gap-3 lg:py-6">
          <p className="align-center invisible lg:visible ">seguinos</p>
          <SocialMedia socialMediaData={socialMediaData}/>
        </div>

        
        <div className="text-white self-center flex justify-center">
            <a href= "mailto:contacto@croissant.com.ar?&subject=Consulta&body=Hola%20Team%20Crossi,%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A">contacto@croissant.com.ar</a>
        </div>
    </footer>
  );
}
