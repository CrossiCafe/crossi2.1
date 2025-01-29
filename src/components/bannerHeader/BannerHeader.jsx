import Image from "next/image";
import './bannerHeader.css';

export const BannerHeader = () => {
    return (
        <div className="relative ">
            <div className="max-h-[500px] overflow-hidden">
                <Image src="/home/main_banner.svg" alt="Banner Sucursales" width={2560} height={507} style={{ maxWidth: '100%', height: 'auto' }} className=""/>
            </div>
            <div className="banner-text relative top-[-30px] sm:top-[inherit] sm:absolute  sm:bottom-[-60px] z-[1] left-1/2 transform -translate-x-1/2 text-center overflow-hidden w-[270px] sm:w-[370px] md:w-[500px] lg:w-[700px] py-6 px-5 md:px-10 lg:py-10">
                <h1 className="hidden">Croissant Café</h1>
                <h2 className="font-josefin text-rustyRed font-medium text-xl md:text-2xl lg:text-3xl ">Somos el cafecito con más buena onda de Mar del Plata y tenemos las mejores medialunas de la ciudad.</h2>
            </div>
        </div>
    );
} 