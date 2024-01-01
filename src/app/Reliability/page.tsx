import HeroImage from "@/components/HeroImage";
import relaiblityImage from "../../../public/reliability.jpg";

export default function ReliabilityPage(){
    return (<>
            <HeroImage imageAlt='The Car Factory Realiability'  
            imageData={relaiblityImage} 
            title='You can Rely on Us'
            additinalText="you can rely on service 24 for hours "></HeroImage>

    </>)
}