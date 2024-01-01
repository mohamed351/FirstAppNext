import { StaticImageData } from "next/image";
import Image from 'next/image'

interface Props{
    imageData:StaticImageData,
    imageAlt:string,
    title:string,
    additinalText?:string
}
export default function HeroImage(props:Props){
        return (
            <>
            <h2 className='center-title'> {props.title}  </h2>
            <Image src={props.imageData} alt={props.imageAlt} fill style={{objectFit:"cover", zIndex:"-1"}}></Image>
           {props.additinalText && <p className="additinal-text">{props.additinalText}</p>}
            </>
        )
}