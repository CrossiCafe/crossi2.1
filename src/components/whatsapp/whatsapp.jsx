"use client";
import React from "react";
import Link from "next/link";
import WhatsAppImg from "../../../public/whatsapp.svg"
import Image from "next/image";
import { twMerge } from "tailwind-merge";



export default function WhatsApp({ number, classNameBox, classNameImg, text , defaultText}) {
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
        href={`https://${whatsapp}text=${defaultText}`}
        target='_blank'
        className={twMerge('flex items-center gap-2', classNameBox)}
        >
            <Image src={WhatsAppImg} width={'35px'} height={'35px'} alt='WhatsApp' className={classNameImg}/>
            {text ?? number}
        </Link>
    )
}