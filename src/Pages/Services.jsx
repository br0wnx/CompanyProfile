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
        <title>Our Services | DKM Group</title>
        <meta
          name="description"
          content="Explore DKM Group’s logistics services — container tracking, freight forwarding, and depot management designed for efficiency."
        />
        <meta
          name="keywords"
          content="logistics services, container management, tracking, freight forwarding, MiniHub"
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/services" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="DKM Group Services" />
        <meta
          property="og:description"
          content="Smarter logistics services powered by technology and innovation."
        />
        <meta property="og:url" content="https://profil.dwipakharismamitra.com/services" />
        <meta property="og:image" content="https://profil.dwipakharismamitra.com/assets/og-services.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DKM Group Services" />
        <meta
          name="twitter:description"
          content="Efficient and technology-powered logistics solutions."
        />
        <meta
          name="twitter:image"
          content="https://profil.dwipakharismamitra.com/assets/og-services.jpg"
        />
      </Helmet>
      <HeroSection />
      <CoreServices />
      <OperationalSection />
      <TariffSection />
      <CtaSection />
    </>
  );
}
