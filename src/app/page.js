import { BannerHeader } from "@/components/bannerHeader/BannerHeader";
import CarrouselBottom from "../components/carrousel/CarrouselBottom";
import CarrouselTop from "../components/carrousel/CarrouselTop";
import {SectionTop} from "../components/sectionTop/sectionTop";
import {SectionBottom} from "../components/sectionBottom/sectionBottom";




export default function Home() {

  return (
    <main className="min-h-screen  font-josefin">
      <BannerHeader/>
      <SectionTop/>
      <CarrouselTop/>
      <SectionBottom/>
      <CarrouselBottom/>
    </main>
  );
}
