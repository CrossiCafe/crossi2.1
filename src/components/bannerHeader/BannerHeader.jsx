import Image from "next/image";
import './bannerHeader.css';
import { twMerge } from 'tailwind-merge'

export const BannerHeader = ({img, title, text, textImg, classNameText}) => {
    console.log('title: ', title);
    return (
        <div className="relative ">
            <div className="max-h-[500px] overflow-hidden">
                <Image src={img} alt="Banner Medialuas" width={2560} height={507} style={{ maxWidth: '100%', height: 'auto' }} className=""/>
            </div>
            <div className={twMerge("banner-text relative top-[-30px] sm:top-[inherit] sm:absolute  sm:bottom-[-60px] z-[1] left-1/2 transform -translate-x-1/2 text-center overflow-hidden w-[270px] sm:w-[370px] md:w-[500px] lg:w-[700px] py-6 px-5 md:px-10 lg:py-10",classNameText)}>
                <h1 className="hidden">{title}</h1>
                <h2 className="font-josefin text-rustyRed font-medium text-xl md:text-2xl lg:text-3xl ">{text}</h2>
                {textImg && <Image src={textImg} alt="Crossi" width={530.28} height={104.89} style={{ maxWidth: '100%', height: 'auto' }} className="mt-3 mx-auto"/>}
            </div>
        </div>
    );
} 