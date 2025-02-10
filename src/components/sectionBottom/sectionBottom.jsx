import Image from 'next/image';

export const SectionBottom = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 max-w-[1000px] mx-auto my-10 md:my-20">
            <div className='flex flex-col md:flex-row justify-center items-center gap-2 '>
                <Image src="/sectionBottom/vasos.png" alt="Vasos Recargables" width={608.4} height={441.14} className="max-w-[350px] md:max-w-inherit md:!w-1/2 h-auto order-2 md:order-1"  />
                <div className='flex flex-col items-center justify-center gap-4 p-4 order-1 md:order-2 md:w-1/2'>
                    <h2 className="text-center uppercase font-josefin font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
                        RECARGATE
                    </h2>
                    <p className='font-josefin text-primary text-center font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl '>Con nuestros vasos facheritos y disfrutá de un buen café. Podes conseguirlos en cualquiera de nuestras sucursales! </p>
                </div>
            </div>

        </div>
    );
}