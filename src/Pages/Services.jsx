import { HeroSection } from "../Components/Services/HeroSection";
import { CoreServices } from "../Components/Services/CoreServices";
import { OperationalSection } from "../Components/Services/OperationalSection";
import { TariffSection } from "../Components/Services/TariffSection";
import { CtaSection } from "../Components/Services/CtaSection";

export default function Services() {
  return (
    <>
      <HeroSection />
      <CoreServices />
      <OperationalSection />
      <TariffSection />
      <CtaSection />
    </>
  );
}
