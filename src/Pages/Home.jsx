import WhyChooseUs from "../Components/Home/WhyChooseUs";
import HeroSection from "../Components/Home/HeroSection";
import { AboutSection } from "../Components/Home/AboutSection";
import { CustomerSection } from "../Components/Home/CustomerSection";
import { OurServices } from "../Components/Home/OurServices";
import { TrackerSection } from "../Components/Home/TrackerSection";
import { CtaSection } from "../Components/Home/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CustomerSection />
      <WhyChooseUs />
      <OurServices />
      <TrackerSection />
      <CtaSection />
    </>
  );
}
