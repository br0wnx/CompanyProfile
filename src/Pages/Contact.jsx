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
          content="Contact Dwipa Kharisma Mitra for logistics inquiries, business collaborations, or container support. Explore our FAQ for quick assistance."
        />
        <meta
          name="keywords"
          content="contact Dwipa Kharisma Mitra, logistics Indonesia, container depot, customer service, partnership"
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/contact" />



        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Dwipa Kharisma Mitra" />
        <meta
          property="og:description"
          content="Reach out to Dwipa Kharisma Mitra for business inquiries, depot information, or customer support. Visit our FAQ for quick answers."
        />
        <meta property="og:url" content="https://profil.dwipakharismamitra.com/contact" />
        <meta property="og:image" content="https://profil.dwipakharismamitra.com/assets/og-contact.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Dwipa Kharisma Mitra" />
        <meta
          name="twitter:description"
          content="Connect with our logistics support team or visit our FAQ for quick help regarding container and depot operations."
        />
        <meta name="twitter:image" content="https://profil.dwipakharismamitra.com/assets/og-contact.jpg" />

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
                  "text": "You can track your container in real-time via our Customer Portal at https://tracker.dwipakharismamitra.com/"
                }
              },
              {
                "@type": "Question",
                "name": "What are your customer service hours?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our customer service operates Monday to Friday, from 08:00 to 17:00 WIB."
                }
              },
              {
                "@type": "Question",
                "name": "Where are your depots located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PT Dwipa Kharisma Mitra operates container depots in Surabaya, Jakarta, Semarang, and Belawan."
                }
              }
            ]
          }
        `}</script>
      </Helmet>
      {/* Customer Service */}
      <Helmet>
        <title>Customer Service | Dwipa Kharisma Mitra</title>
        <meta
          name="description"
          content="Contact our customer service team for inquiries, support, or partnership opportunities with Dwipa Kharisma Mitra."
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/contact#customerservice" />
      </Helmet>

      {/* FAQ */}
      <Helmet>
        <title>FAQ | Dwipa Kharisma Mitra</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Dwipa Kharisma Mitra's logistics services, operations, and partnerships."
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/contact#faq" />
      </Helmet>

      {/* Management */}
      <Helmet>
        <title>Management | Dwipa Kharisma Mitra</title>
        <meta
          name="description"
          content="Meet the management team behind Dwipa Kharisma Mitra — professionals dedicated to advancing logistics excellence in Indonesia."
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/contact#management" />
      </Helmet>

      {/* Branch Manager */}
      <Helmet>
        <title>Branch Managers | Dwipa Kharisma Mitra</title>
        <meta
          name="description"
          content="Reach our branch managers across Indonesia for depot operations, logistics coordination, and customer support."
        />
        <link rel="canonical" href="https://profil.dwipakharismamitra.com/contact#branchmanager" />
      </Helmet>
      <HeroSection />
      <CustomerServiceSection />
      <FAQManagementSection />
      <BranchManagerSection />
    </>
  );
}
