
import Link from 'next/link';
import Image from "next/image"; 



export const SocialMedia = ({socialMediaData}) => {
    return (
        <div className="flex justify-center gap-3">
            { socialMediaData.map((item, index) => (
                <Link key={index} href={item.link} rel="noopener noreferrer" target="_blank">
                    <Image 
                        src={item.src}
                        width={52}
                        height={41}
                        alt={item.alt}
                        className={item.className}
                        priority />
                </Link>
            ))
            }
        </div>

    )
}