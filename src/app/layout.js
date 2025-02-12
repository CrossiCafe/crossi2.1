import "./globals.css";
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Head from 'next/head';

export const metadata = {
  title: 'Croissant Café',
  description: 'Disfrutá de las mejores medialunas, café de calidad y un ambiente único en nuestras tres sucursales de Mar del Plata. Croissant Café, un lugar que te inspira.',
  icons: {
    icon: '/favicon.ico', 
  },
  openGraph: {
    title: 'Croissant Café | Las mejores medialunas en Mar del Plata',
    description: 'Disfrutá de las mejores medialunas, café de calidad y un ambiente único en nuestras tres sucursales de Mar del Plata. Croissant Café, un lugar que te inspira.',
    url: 'https://www.croissant.com.ar/',
    siteName: 'Croissant Café',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: 'https://www.croissant.com.ar/images/og-image.jpg', // Cambia por la URL de tu imagen
        width: 1200,
        height: 630,
        alt: 'Croissant Café - Café que te inspira',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Croissant Café | Las mejores medialunas en Mar del Plata',
    description: 'Disfrutá de las mejores medialunas, café de calidad y un ambiente único en nuestras tres sucursales de Mar del Plata.',
    site: '@CroissantCafe', // Cambia por el usuario de Twitter si lo tienes
    images: [
      'https://www.croissant.com.ar/images/og-image.jpg', // Cambia por la URL de tu imagen
    ],
  },
  keywords: [
    'Croissant',
    'Café',
    'Cafe',
    'Croissant Mar del Plata',
    'Café Mar del Plata',
    'Cafeteria',
    'Catering',
    'croissant cafe', 
    'croissant cafe mar del plata', 
    'cafe croissant', 
    'croissant mar del plata',
    'cafe croissant mar del plata',
    'cafe mar del plata', 
    'cafeteria mar del plata', 
    'cafe mdq', 
    'mejores medialunas mdq', 
    'mejores medialunas mar del plata',
    'mejores medialunas',
    'catering mar del plata', 
    'crossifans', 
    'crossi mar del plata', 
    'crossi cafe',
    'franquisias croissant',
    'medialunas mar del plata',  
    'catering eventos',  
    'cafe en la costa atlantica',  
    'cafe con medialuna',  
    'coffee break mar del plata',  
    'regalos empresariales',  
    'mesa dulce mar del plata',  
    'cafe por guemes',  
    'cafe por constitucion',  
    'las medialunas mas ricas de mar del plata',  
    'cafe de especialidad en mar del plata',  
    'pasteleria mar del plata',  
    'eventos mar del plata',  
    'venta mayorista medialunas',  
    'panificados',  
    'venta mayorista de croissant',  
    'brunch mar del plata',  
    'menu ejecutivo mar del plata'  ],
  robots: 'index, follow', 
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#d4a373',
  category: 'Cafe, Cafeteria ,Café , Cafetería, Catering, Franquicias, Medialunas, Mar del Plata ',
  authors: [{ name: 'Croissant Café', url: 'https://www.croissant.com.ar/' }],
  publisher: 'Croissant Café',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='h-[96px] bg-darkBrown sm:hidden'></div>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
