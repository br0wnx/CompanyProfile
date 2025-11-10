import { HeroSection } from "../Components/Services/HeroSection";
import { CoreServices } from "../Components/Services/CoreServices";
import { OperationalSection } from "../Components/Services/OperationalSection";
import { TariffSection } from "../Components/Services/TariffSection";
import { CtaSection } from "../Components/Services/CtaSection";
import { Helmet } from "react-helmet-async";

export default function Services() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Services - Dwipa Kharisma Mitra",
    "url": "https://profil.dwipakharismamitra.com/services",
    "description":
      "Explore Dwipa Kharisma Mitra's logistics and container services including depot management, trucking, and repair solutions with reliable operational services and competitive pricing.",
    "provider": {
      "@type": "Organization",
      "name": "Dwipa Kharisma Mitra",
      "url": "https://profil.dwipakharismamitra.com",
      "logo": "https://profil.dwipakharismamitra.com/assets/logo.png"
    },
    "hasPart": [
      {
        "@type": "WebPageElement",
        "name": "Core Services",
        "url": "https://profil.dwipakharismamitra.com/services#core",
        "description":
          "Comprehensive logistics solutions including container storage, repair, cleaning, and trucking operations provided by Dwipa Kharisma Mitra."
      },
      {
        "@type": "WebPageElement",
        "name": "Operational Services",
        "url": "https://profil.dwipakharismamitra.com/services#operational",
        "description":
          "Professional operational services including container handling, maintenance, and depot management ensuring high efficiency and safety standards."
      },
      {
        "@type": "WebPageElement",
        "name": "Pricing",
        "url": "https://profil.dwipakharismamitra.com/services#pricing",
        "description":
          "Transparent and competitive pricing structure designed to meet client needs while ensuring quality and efficiency in logistics operations."
      }
    ]
  };

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

        {/* Section anchors */}
        <link
          rel="alternate"
          href="https://profil.dwipakharismamitra.com/services#core"
        />
        <link
          rel="alternate"
          href="https://profil.dwipakharismamitra.com/services#operational"
        />
        <link
          rel="alternate"
          href="https://profil.dwipakharismamitra.com/services#pricing"
        />

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
      
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <HeroSection />
      <CoreServices />
      <OperationalSection />
      <TariffSection />
      <CtaSection />
    </>
  );
}
