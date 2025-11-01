import { CtaSection } from "../Components/Portal/CtaSection";
import { HeroSection } from "../Components/Portal/HeroSection";
import { TrackerSection } from "../Components/Portal/TrackerSection";
import { Helmet } from "react-helmet-async";

export default function Portal() {
  return (
    <>
      <Helmet>
        <title>Customer Portal | DKM Group</title>
        <meta
          name="description"
          content="Access the DKM Group Customer Portal for real-time container tracking and advanced digital logistics tools."
        />
        <meta
          name="keywords"
          content="customer portal, container tracker, logistics dashboard, MiniHub"
        />
        <link rel="canonical" href="https://profil.dwipakharisamitra.com/portal" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Customer Portal | DKM Group" />
        <meta
          property="og:description"
          content="Manage and track your containers in real-time through the MiniHub Customer Portal."
        />
        <meta property="og:url" content="https://profil.dwipakharismamitra.com/portal" />
        <meta property="og:image" content="https://profil.dwipakharismamitra.com/assets/og-portal.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Portal | DKM Group" />
        <meta
          name="twitter:description"
          content="Your gateway to efficient container management and smart logistics."
        />
        <meta
          name="twitter:image"
          content="https://profil.dwipakharismamitra.com/assets/og-portal.jpg"
        />
      </Helmet>
      <HeroSection />
      <TrackerSection />
      <CtaSection />
    </>
  );
}
