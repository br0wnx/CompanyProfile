import WhyChooseUs from "../Components/Home/WhyChooseUs";
import HeroSection from "../Components/Home/HeroSection";
import { AboutSection } from "../Components/Home/AboutSection";
import { CustomerSection } from "../Components/Home/CustomerSection";
import { OurServices } from "../Components/Home/OurServices";
import { TrackerSection } from "../Components/Home/TrackerSection";
import { CtaSection } from "../Components/Home/CtaSection";
import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>PT Dwipa Kharisma Mitra | Smart & Reliable Logistics Solutions</title>
        <meta
          name="description"
          content="PT Dwipa Kharisma Mitra provides integrated logistics and container depot solutions across Indonesia. Trusted for smart, reliable, and technology-driven operations since 1988."
        />
        <meta
          name="keywords"
          content="Dwipa Kharisma Mitra, logistics Indonesia, container depot, container tracking, intermodal transport, smart logistics"
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PT Dwipa Kharisma Mitra | Smart & Reliable Logistics Solutions" />
        <meta
          property="og:description"
          content="Providing nationwide logistics, depot management, and container handling solutions with advanced technology and decades of experience."
        />
        <meta property="og:url" content="https://profil.dwipakharismamitra.com/" />
        <meta property="og:image" content="https://profil.dwipakharismamitra.com/assets/og-home.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PT Dwipa Kharisma Mitra | Smart & Reliable Logistics Solutions" />
        <meta
          name="twitter:description"
          content="Nationwide container depot and logistics solutions powered by technology and trusted experience."
        />
        <meta name="twitter:image" content="https://profil.dwipakharismamitra.com/assets/og-home.jpg" />
      </Helmet>
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
