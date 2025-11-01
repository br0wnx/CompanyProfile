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
        <title>Home | DKM Group</title>
        <meta
          name="description"
          content="MiniHub Company provides reliable and technology-driven logistics services. Explore our smart solutions for efficient container operations."
        />
        <meta
          name="keywords"
          content="MiniHub Company, logistics, container tracking, shipping, depot management"
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DKM Group - Smart Logistics Solutions" />
        <meta
          property="og:description"
          content="Technology-driven logistics solutions with real-time container tracking and integrated tools."
        />
        <meta property="og:url" content="https://profil.dwipakharismamitra.com/" />
        <meta property="og:image" content="https://profil.dwipakharismamitra.com/assets/og-home.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DKM Group - Smart Logistics Solutions" />
        <meta
          name="twitter:description"
          content="Efficient and technology-driven logistics services for modern businesses."
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
