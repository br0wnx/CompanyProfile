import { HeroSection } from "../Components/About/HeroSection";
import { CertificationSection } from "../Components/About/CertificationSection";
import { CtaSection } from "../Components/About/CtaSection";
import { JourneyGroupSection } from "../Components/About/JourneyGroupSection";
import { NationWideSection } from "../Components/About/NationWideSection";
import { WhoWeAreSection } from "../Components/About/WhoWeAreSection";
import { WhatDriveUsSection } from "../Components/About/WhatDriveUsSection";
import { Helmet } from "react-helmet-async";

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Dwipa Kharisma Mitra",
    "url": "https://profil.dwipakharismamitra.com/about",
    "description":
      "Learn about Dwipa Kharisma Mitra — a trusted logistics and container depot company in Indonesia since 1988. Discover our mission, values, and commitment to innovation.",
    "hasPart": [
      {
        "@type": "WebPageElement",
        "name": "Our Journey",
        "url": "https://profil.dwipakharismamitra.com/about#journey",
        "description":
          "Discover Dwipa Kharisma Mitra’s journey from humble beginnings to becoming a trusted logistics and container depot company in Indonesia.",
      },
      {
        "@type": "WebPageElement",
        "name": "Location",
        "url": "https://profil.dwipakharismamitra.com/about#location",
        "description":
          "Our nationwide logistics network connects major ports and industrial areas across Indonesia, ensuring efficient container and logistics services.",
      },
      {
        "@type": "WebPageElement",
        "name": "Certifications & Standards",
        "url": "https://profil.dwipakharismamitra.com/about#certification",
        "description":
          "Dwipa Kharisma Mitra is certified with ISO and other logistics standards to ensure safety, reliability, and quality in all operations.",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>About Us | Dwipa Kharisma Mitra</title>
        <meta
          name="description"
          content="Learn about Dwipa Kharisma Mitra — a trusted logistics and container depot company in Indonesia since 1988. Discover our mission, values, and commitment to innovation in logistics."
        />
        <meta
          name="keywords"
          content="Dwipa Kharisma Mitra, logistics Indonesia, container depot company, company profile, logistics innovation, about DKM"
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/about" />

        {/* Section anchors */}
        <link
          rel="alternate"
          href="https://profil.dwipakharismamitra.com/about#journey"
        />
        <link
          rel="alternate"
          href="https://profil.dwipakharismamitra.com/about#location"
        />
        <link
          rel="alternate"
          href="https://profil.dwipakharismamitra.com/about#certification"
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="About Dwipa Kharisma Mitra" />
        <meta
          property="og:description"
          content="Established in 1988, Dwipa Kharisma Mitra continues to deliver innovative and reliable logistics and container solutions across Indonesia."
        />
        <meta property="og:url" content="https://profil.dwipakharismamitra.com/about" />
        <meta property="og:image" content="https://profil.dwipakharismamitra.com/assets/og-about.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dwipa Kharisma Mitra" />
        <meta
          name="twitter:description"
          content="Discover the story, mission, and innovation behind one of Indonesia’s leading logistics companies."
        />
        <meta name="twitter:image" content="https://profil.dwipakharismamitra.com/assets/og-about.jpg" />
      
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
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
