import scaleImage from "../../../public/scale.jpg";
import HeroImage from "@/components/HeroImage";

export default function ScalePage(){
    return (
        <>
        <HeroImage imageAlt='The Car Factory Scale Application' 
         imageData={scaleImage} 
         title='You can Scale you application'
         additinalText="you can scale and get free containers "></HeroImage>
        </>
    )
}