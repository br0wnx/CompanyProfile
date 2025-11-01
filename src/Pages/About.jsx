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
        <title>About Us | Dwipa Kharisma Mitra</title>
        <meta
          name="description"
          content="Discover Dwipa Kharisma Mitra's mission, values, and journey in delivering efficient logistics and digital transformation."
        />
        <meta
          name="keywords"
          content="about Dwipa Kharisma Mitra, logistics company, company profile, mission, values"
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/about" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="About Dwipa Kharisma Mitra" />
        <meta
          property="og:description"
          content="Learn about our journey and dedication to advancing logistics innovation."
        />
        <meta property="og:url" content="https://profil.dwipakharismamitra.com/about" />
        <meta property="og:image" content="https://profil.dwipakharismamitra.com/assets/og-about.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dwipa Kharisma Mitra" />
        <meta
          name="twitter:description"
          content="Discover our mission and innovation in logistics."
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
