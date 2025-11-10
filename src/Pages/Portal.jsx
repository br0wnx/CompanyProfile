import { CtaSection } from "../Components/Portal/CtaSection";
import { HeroSection } from "../Components/Portal/HeroSection";
import { TrackerSection } from "../Components/Portal/TrackerSection";
import { Helmet } from "react-helmet-async";

export default function Portal() {
  return (
    <>
      <Helmet>
        <title>Customer Portal | PT Dwipa Kharisma Mitra</title>
        <meta
          name="description"
          content="Access PT Dwipa Kharisma Mitra’s Customer Portal for real-time container tracking, depot management, and smart logistics tools — all in one place."
        />
        <meta
          name="keywords"
          content="customer portal, container tracking, depot management, logistics Indonesia, Dwipa Kharisma Mitra"
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/portal" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Customer Portal | PT Dwipa Kharisma Mitra" />
        <meta
          property="og:description"
          content="Track your containers, manage logistics operations, and access real-time depot data through our Customer Portal."
        />
        <meta property="og:url" content="https://profil.dwipakharismamitra.com/portal" />
        <meta property="og:image" content="https://profil.dwipakharismamitra.com/assets/og-portal.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Portal | PT Dwipa Kharisma Mitra" />
        <meta
          name="twitter:description"
          content="Manage and track your containers efficiently through PT Dwipa Kharisma Mitra’s smart logistics platform."
        />
        <meta name="twitter:image" content="https://profil.dwipakharismamitra.com/assets/og-portal.jpg" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "DKM Customer Portal",
            "url": "https://profil.dwipakharismamitra.com/portal",
            "description": "A secure online platform by PT Dwipa Kharisma Mitra that provides real-time container tracking, depot management, and smart logistics tools.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "creator": {
              "@type": "Organization",
              "name": "PT Dwipa Kharisma Mitra",
              "url": "https://profil.dwipakharismamitra.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "IDR",
              "availability": "https://schema.org/InStock"
            },
            "featureList": [
              "Real-time container tracking",
              "Depot operations management",
              "Integrated customer dashboard",
              "Logistics performance insights"
            ],
            "image": "https://profil.dwipakharismamitra.com/assets/og-portal.jpg",
            "datePublished": "2025-01-01",
            "inLanguage": "en"
          }
          `}</script>
      </Helmet>
      <HeroSection />
      <TrackerSection />
      <CtaSection />
    </>
  );
}
