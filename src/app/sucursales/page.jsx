import Image from 'next/image';
import { sucursales } from '@/data/sucursales';
import { Sucursal } from '@/components/sucursal/Sucursal';

const SucursalesPage = () => { 

  return (
    <main className=''>
    <div className='max-h-[500px] overflow-hidden relative'>
          <h1 className='font-josefin absolute text-white drop-shadow-[3px_5px_5px_rgba(0,0,0)] left-1/2 top-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl xl:text-8xl'>Sucursales</h1>
          <Image src='/sucursales/sucursales-banner.png' alt='Banner Medialuas' width={2560} height={507} style={{ maxWidth: '100%', height: 'auto' }} className=''/>
      </div>
      <div className='w-full flex flex-col items-center justify-center gap-10 my-10'>
        {sucursales.map((item) => (
          <Sucursal key={item.name} item={item} />
        ))}
      </div>
    </main>
  );
};

export default SucursalesPage;
