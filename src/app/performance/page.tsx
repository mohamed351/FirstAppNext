import HeroImage from "@/components/HeroImage";
import preformaceImage from "../../../public/performance.jpg";

export default function PerformancePage(){
    return (
        <>
      <HeroImage imageAlt='The Car Factory Peforamace' 
       imageData={preformaceImage}
        title='The Performance is key for our success'
        additinalText="performance and monitoring the service to see more .."></HeroImage>

        </>
    )
}