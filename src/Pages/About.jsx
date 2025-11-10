import { HeroSection } from "../Components/About/HeroSection";
import { CertificationSection } from "../Components/About/CertificationSection";
import { CtaSection } from "../Components/About/CtaSection";
import { JourneyGroupSection } from "../Components/About/JourneyGroupSection";
import { NationWideSection } from "../Components/About/NationWideSection";
import { WhoWeAreSection } from "../Components/About/WhoWeAreSection";
import { WhatDriveUsSection } from "../Components/About/WhatDriveUsSection";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | PT Dwipa Kharisma Mitra</title>
        <meta
          name="description"
          content="Learn about PT Dwipa Kharisma Mitra — a trusted logistics and container depot company in Indonesia since 1988. Discover our mission, values, and commitment to innovation in logistics."
        />
        <meta
          name="keywords"
          content="PT Dwipa Kharisma Mitra, logistics Indonesia, container depot company, company profile, logistics innovation, about DKM"
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/about" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="About PT Dwipa Kharisma Mitra" />
        <meta
          property="og:description"
          content="Established in 1988, PT Dwipa Kharisma Mitra continues to deliver innovative and reliable logistics and container solutions across Indonesia."
        />
        <meta property="og:url" content="https://profil.dwipakharismamitra.com/about" />
        <meta property="og:image" content="https://profil.dwipakharismamitra.com/assets/og-about.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About PT Dwipa Kharisma Mitra" />
        <meta
          name="twitter:description"
          content="Discover the story, mission, and innovation behind one of Indonesia’s leading logistics companies."
        />
        <meta name="twitter:image" content="https://profil.dwipakharismamitra.com/assets/og-about.jpg" />
      </Helmet>
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
