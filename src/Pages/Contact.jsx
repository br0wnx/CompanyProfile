import { BranchManagerSection } from "../Components/Contact/BranchManagerSection";
import { CustomerServiceSection } from "../Components/Contact/CustomerServicesSection";
import { FAQManagementSection } from "../Components/Contact/FAQManagementSection";
import { HeroSection } from "../Components/Contact/HeroSection";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Dwipa Kharisma Mitra</title>
        <meta
          name="description"
          content="Get in touch with Dwipa Kharisma Mitra for inquiries, partnerships, and customer support. Check our FAQ for common questions."
        />
        <meta
          name="keywords"
          content="contact, Dwipa Kharisma Mitra, support, FAQ, logistics, customer service"
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/contact" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Dwipa Kharisma Mitra" />
        <meta
          property="og:description"
          content="Reach out to Dwipa Kharisma Mitra for business inquiries or support. Find quick answers in our FAQ."
        />
        <meta property="og:url" content="https://profil.dwipakharismamitra.com/contact" />
        <meta property="og:image" content="https://profil.dwipakharismamitra.com/assets/og-contact.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Dwipa Kharisma Mitra" />
        <meta
          name="twitter:description"
          content="Get in touch with Dwipa Kharisma Mitra. Find answers to FAQs or talk to our support team."
        />
        <meta
          name="twitter:image"
          content="https://profil.dwipakharismamitra.com/assets/og-contact.jpg"
        />

        {/* FAQ Schema Markup */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How can I track my container?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can track your container in real-time using our Customer Portal at https://tracker.dwipakharismamitra.com/"
                }
              },
              {
                "@type": "Question",
                "name": "What are your customer service hours?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our customer service team is available Monday to Friday, 08:00 - 17:00 WIB."
                }
              },
              {
                "@type": "Question",
                "name": "Where are your depots located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We operate depots in Jakarta, Surabaya, Lampung, Medan, and Semarang."
                }
              }
            ]
          }
        `}</script>
      </Helmet>
      <HeroSection />
      <CustomerServiceSection />
      <FAQManagementSection />
      <BranchManagerSection />
    </>
  );
}
