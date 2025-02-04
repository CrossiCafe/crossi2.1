"use client";
import React from "react";
import Link from "next/link";
import WhatsAppImg from "../../../public/whatsapp.svg"
import Image from "next/image";
import { twMerge } from "tailwind-merge";



export default function WhatsApp({ number, classNameBox, className }) {
    const [whatsapp, setWhatsapp] = React.useState('');

    React.useEffect(() => {
        if (screen.width < 768) {
            setWhatsapp(`wa.me/${number}?`);
        } else {
            setWhatsapp(
                `web.whatsapp.com/send?phone=${number}&`,
            );
        }
    }, [number]);

    return (
        <Link
        href={`https://${whatsapp}text=Hola%20Team%20Crossi,%20necesito%20hacerles%20una%20consulta...`}
        target='_blank'
        className={twMerge('flex items-center gap-2', classNameBox)}
        >
            <Image src={WhatsAppImg} width={'35px'} height={'35px'} alt='WhatsApp' className={className}/>
            {number}
        </Link>
    )
}