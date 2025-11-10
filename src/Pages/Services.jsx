import { HeroSection } from "../Components/Services/HeroSection";
import { CoreServices } from "../Components/Services/CoreServices";
import { OperationalSection } from "../Components/Services/OperationalSection";
import { TariffSection } from "../Components/Services/TariffSection";
import { CtaSection } from "../Components/Services/CtaSection";
import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | Dwipa Kharisma Mitra</title>
        <meta
          name="description"
          content="Discover Dwipa Kharisma Mitra’s comprehensive logistics solutions — from full container depot services and repair, to freight forwarding and inventory management across Indonesia."
        />
        <meta
          name="keywords"
          content="Dwipa Kharisma Mitra services, container depot, logistics Indonesia, freight forwarding, container repair, container tracking"
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/services" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dwipa Kharisma Mitra – Logistics & Container Services" />
        <meta
          property="og:description"
          content="Reliable logistics services including container depot, maintenance, and forwarding solutions throughout Indonesia."
        />
        <meta property="og:url" content="https://profil.dwipakharismamitra.com/services" />
        <meta property="og:image" content="https://profil.dwipakharismamitra.com/assets/og-services.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dwipa Kharisma Mitra – Logistics & Container Services" />
        <meta
          name="twitter:description"
          content="Technology-driven logistics and container depot services designed for efficiency and reliability."
        />
        <meta name="twitter:image" content="https://profil.dwipakharismamitra.com/assets/og-services.jpg" />
      </Helmet>
      <HeroSection />
      <CoreServices />
      <OperationalSection />
      <TariffSection />
      <CtaSection />
    </>
  );
}
