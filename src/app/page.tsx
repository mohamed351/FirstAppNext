import Image from 'next/image'
import homeImage from "../../public/home.jpg";
import HeroImage from '@/components/HeroImage';
export default function Home() {
  return (
    <>
    <HeroImage imageAlt='The Car Factory'  imageData={homeImage}
     title='The Home Page for Cloud'
     additinalText='There is more about to find'
    ></HeroImage>
    </>
  )
}
