import Image from 'next/image';
import WhatsApp from '@/components/whatsapp/whatsapp';

const consultas =[
    {
        src:"/sectionBottom/cumple.png",
        title:"CUMPLES CROSSI",
        description:"Disfrutá, decorá, divertite en tu cumple y compartí lo más rico de Crossi.",
        buttonText:"Festejemos",
        number:"2235033700",
        bgColor:"sandGold",
        buttonColor:"primary",
        wappText:"Hola%20Team%20Crossi%2C%0A%0AEstoy%20interesada%20en%20festejar%20un%20cumplea%C3%B1os..%0A%0ADia%3A%0AHora%3A%0ACantidad%20de%20personas%3A%0AComentarios%20extras%3A",
    },
    {
        src:"/sectionBottom/eventos.png",
        title:"EVENTOS",
        description:"Contanos de que se trata tu evento, nosotros nos encargamos de acesorarte y brindarte el mejor servicio de catering.",
        buttonText:"Consultanos",
        number:"2235033700",
        bgColor:"primary",
        buttonColor:"rustyRed",
        wappText:"Hola%20Team%20Crossi%2C%0A%0AEstoy%20interesada%20en%20hacer%20un%20evento...%0A%0ADia%3A%0AHora%3A%0ACantidad%20de%20personas%3A%0AComentarios%20extras%3A",

    },
    {
        src:"/sectionBottom/regala.png",
        title:"REGALÁ CROSSI",
        description:"Regalá o hacete un mimo a vos mismo, con nuestro merch!",
        buttonText:"Pedí el catálogo",
        number:"2235033700",
        bgColor:"rustyRed",
        buttonColor:"sandGold",
        wappText:"Hola%20Team%20Crossi%2C%0A%0AEstoy%20interesada%20en..."
    }
]

export const SectionBottom = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 max-w-[1100px] mx-auto my-10 md:my-20">
            <div className='flex flex-col md:flex-row justify-center items-center gap-2 '>
                <Image src="/sectionBottom/vasos.png" alt="Vasos Recargables" width={608.4} height={441.14} className="max-w-[350px] md:max-w-inherit md:!w-1/2 h-auto order-2 md:order-1"  />
                <div className='flex flex-col items-center justify-center gap-4 p-4 order-1 md:order-2 md:w-1/2'>
                    <h2 className="text-center uppercase font-josefin font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
                        RECARGATE
                    </h2>
                    <p className='font-josefin text-primary text-center font-normal text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl '>Con nuestros vasos facheritos y disfrutá de un buen café. Podes conseguirlos en cualquiera de nuestras sucursales! </p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center lg:justify-between max-w-[1100px] lg:w-full'>
                {consultas.map((consulta, index) => (
                    <div key={index}
                    style={{ backgroundColor: `var(--${consulta.bgColor})` }}
                    className={` m-2 mt-32 rounded-2xl p-6 pt-40 max-w-[300px] xl:max-w-[320px] lg:mx-auto flex flex-col items-center justify-center lg:justify-between gap-3 lg:gap-6 relative`}>
                        <Image src={consulta.src} alt={consulta.title} width={252} height={252} className="!max-w-[230px] h-auto absolute top-[-95px]"  />
                        <h4 className='font-anton uppercase text-white text-center text-2xl lg:text-3xl xl:text-4xl '>
                            {consulta.title}
                        </h4>
                        <p className={`font-courier text-white text-center font-normal  text-base md:text-md lg:text-lg xl:text-xl lg:mb-auto`}>{consulta.description}</p>
                        <WhatsApp 
                            number={consulta.number} 
                            classNameBox={`font-courier text-white text-center  p-2 px-5 rounded-xl text-md md:text-lg lg:text-xl xl:text-2xl `} 
                            stylesBox={{backgroundColor: `var(--${consulta.buttonColor})`}}
                            classNameImg={`hidden`} 
                            text={consulta.buttonText} 
                            defaultText={consulta.wappText}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}