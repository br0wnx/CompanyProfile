import { HeroSection } from "../Components/About/HeroSection";
import { CertificationSection } from "../Components/About/CertificationSection";
import { CtaSection } from "../Components/About/CtaSection";
import { JourneyGroupSection } from "../Components/About/JourneyGroupSection";
import { NationWideSection } from "../Components/About/NationWideSection";
import { WhoWeAreSection } from "../Components/About/WhoWeAreSection";
import { WhatDriveUsSection } from "../Components/About/WhatDriveUsSection";

export default function About() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <WhatDriveUsSection />
      <JourneyGroupSection />
      <NationWideSection />
      <CertificationSection />
      <CtaSection />
    </>
  );
}
