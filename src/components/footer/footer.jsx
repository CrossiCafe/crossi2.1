import React from 'react';
import './footer.css';
import { Container } from '@mui/material';
import Link from 'next/link';
import Image from "next/image";
import Logo from "/public/logo-croissant.png";
import Insta from "/public/social_media/ig.png";
import Face from "/public/social_media/fb.png";
import TikTok from "/public/social_media/tiktok.png";
import linkedin2 from "/public/social_media/linkedin2.png"


export default function Footer() {
  return (
    <footer className=" grid grid-cols-1 lg:grid-cols-3 gap-4 p-5  ">
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
          <div className="flex justify-center gap-3">
            <Link href={"https://www.instagram.com/croissantmdp/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="}  rel="noopener noreferrer" target="_blank">
              <Image 
                src={Insta}
                width={52}
                height={41}
                alt="Instagram"
                className='social'
                priority />
            </Link>
            <Link href={"https://www.facebook.com/croissantcafemdp"} rel="noopener noreferrer" target="_blank">
              <Image 
                src={Face}
                width={52}
                height={41}
                alt="Facebook"
                className='social'
                priority />
            </Link>
            <Link href={"https://www.tiktok.com/@croissantmdp?is_from_webapp=1&sender_device=pc"} rel="noopener noreferrer" target="_blank">
              <Image 
                src={TikTok}
                width={46}
                height={44}
                alt="TikTok"
                className='social social-tiktok'
                priority />
            </Link>
            <Link href={"https://www.linkedin.com/company/croissant-cafe/?originalSubdomain=ar"} rel="noopener noreferrer" target="_blank">
              <Image 
                src={linkedin2}
                width={48}
                height={50}
                alt="LinkedIn"
                className='social social-linkedin'
                priority />
            </Link>
          </div>
        </div>

        
        <div className="text-white self-center flex justify-center">
            <a href= "mailto:contacto@croissant.com.ar?&subject=Consulta&body=Hola%20Team%20Crossi,%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A">contacto@croissant.com.ar</a>
        </div>
    </footer>
  );
}
