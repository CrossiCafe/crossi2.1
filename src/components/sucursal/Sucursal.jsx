import WhatsApp from '@/components/whatsapp/whatsapp';
import Link from 'next/link';
import Image from 'next/image';

export const Sucursal = ({ item }) => {
    return (
        <div className='xl:flex xl:w-full xl:flex-row xl:gap-4 xl:items-center xl:justify-center'> 
            <div className='w-full overflow-hidden rounded-xl drop-shadow-2xl xl:w-[409px]'>
                <Image src={`/sucursales/${item.name}.png`} alt={item.name} width={409} height={246} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className='flex flex-col gap-1 p-4 xl:w-[409px]'> 
                <p className='font-bold text-xl'>{`${item.zone}`}</p>
                <p>{`${item.address}`}</p>
                {item.time.map((time, index) => (
                    <p key={index}>{time}</p>
                ))}
                <WhatsApp number={item.contact} classNameImg='w-[22px] h-[22xpx] my-1' defaultText={item.wappText}/>
                <Link href={item.pedidos} target='_blank' className='flex items-center gap-2 my-1'>
                    <Image src='/sucursales/pedidosya.png' alt='PedidosYa' width={20} height={20} className='w-[22px] h-[22xpx]'/>
                    PedidosYa
                </Link>
            </div>
            <div className='w-full overflow-hidden rounded-xl drop-shadow-2xl xl:w-[409px]'>
                <iframe
                    className='w-full h-[265px] '
                    src={item.maps}
                    style={{ border: 0 }}
                    allowFullScreen={{}}
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
            </div>
        </div>
    )
}