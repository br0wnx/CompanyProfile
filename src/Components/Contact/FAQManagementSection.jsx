import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function FAQManagementSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });
  }, []);

  const faqItems = [
    {
      question: "What services does DKM Group provide?",
      answer: "Jawaban untuk pertanyaan 1...",
    },
    {
      question: "Where are DKM Group's depot locations?",
      answer: "Jawaban untuk pertanyaan 2...",
    },
    {
      question: "What are your operation hours?",
      answer: "Jawaban untuk pertanyaan 3...",
    },
    {
      question: "Do you provide emergency repair services?",
      answer: "Jawaban untuk pertanyaan 4...",
    },
  ];

  const MailIcon = () => <EmailIcon sx={{ fontSize: 20 }} />;
  const WhatsAppIconComponent = () => <WhatsAppIcon sx={{ fontSize: 20 }} />;

  const managementData = [
    {
      position: "Executive Director & General Manager",
      name: "Mr. Rio Tanujaya",
      contacts: [
        {
          type: "email",
          info: "rio@dwipakharismamitra.co.id",
          icon: <MailIcon />,
        },
        {
          type: "whatsapp",
          info: "08155001210",
          icon: <WhatsAppIconComponent />,
        },
      ],
    },
    {
      position: "Business & IT Systems",
      name: "Mr. Richard",
      contacts: [
        {
          type: "email",
          info: "richard@dwipakharismamitra.co.id",
          icon: <MailIcon />,
        },
        {
          type: "whatsapp",
          info: "081219199300",
          icon: <WhatsAppIconComponent />,
        },
      ],
    },
    {
      position: "Finance",
      name: "Mrs. Rachel",
      contacts: [
        {
          type: "email",
          info: "rachel@dwipakharismamitra.co.id",
          icon: <MailIcon />,
        },
        {
          type: "whatsapp",
          info: "0811242002",
          icon: <WhatsAppIconComponent />,
        },
      ],
    },
    {
      position: "Tax",
      name: "Mrs. Pedut",
      contacts: [
        {
          type: "email",
          info: "pajak_dkmho@dwipakharismamitra.co.id",
          icon: <MailIcon />,
        },
        {
          type: "whatsapp",
          info: "087818457875",
          icon: <WhatsAppIconComponent />,
        },
      ],
    },
    {
      position: "Maintenance & Repair",
      name: "Mr. Pauking",
      contacts: [
        {
          type: "email",
          info: "ahmad_pauking@dwipakharismamitra.co.id",
          icon: <MailIcon />,
        },
        {
          type: "whatsapp",
          info: "087830597982",
          icon: <WhatsAppIconComponent />,
        },
      ],
    },
    {
      position: "Depot Operations",
      name: "Mr. Aris",
      contacts: [
        {
          type: "email",
          info: "aris_susanto@dwipakharismamitra.co.id",
          icon: <MailIcon />,
        },
        {
          type: "whatsapp",
          info: "081319208270",
          icon: <WhatsAppIconComponent />,
        },
      ],
    },
  ];

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <section
      id="faq"
      className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {/* FAQ */}
          <div className="lg:col-span-1" data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#C6463D] mb-6 sm:mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <button
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold text-sm sm:text-base pr-2">
                      {item.question}
                    </span>
                    <ExpandMoreIcon
                      sx={{ fontSize: { xs: 18, sm: 20 } }}
                      className={`transition-transform flex-shrink-0 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-200 text-sm sm:text-base ${
                      openFAQ === index ? "block" : "hidden"
                    }`}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Management */}
          <div className="lg:col-span-2 relative">
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#C6463D] mb-6 sm:mb-8"
              data-aos="fade-left"
            >
              Management
            </h2>

            {/* Responsive Grid for Management Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {managementData.map((person, index) => (
                <div
                  key={index}
                  className="relative flex flex-col justify-between bg-white border-2 border-[#1F2D4B] rounded-2xl p-4 sm:p-5 hover:shadow-lg transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div>
                    <h3 className="font-bold text-sm sm:text-base mb-2 leading-tight text-[#1F2D4B]">
                      {person.position}
                    </h3>
                    <p className="text-[#42526E] font-semibold mb-3 text-sm sm:text-base">
                      {person.name}
                    </p>
                  </div>

                  {/* Contact Buttons */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
                    {/* WhatsApp Button */}
                    <a
                      href={`https://wa.me/62${person.contacts
                        .find((c) => c.type === "whatsapp")
                        ?.info?.replace(/^0/, "")
                        .replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group flex items-center justify-center w-full py-2 sm:py-2.5 rounded-lg bg-[#1F2D4B] text-white text-xs sm:text-sm font-semibold hover:bg-[#2a3f5f] transition-all"
                    >
                      <WhatsAppIcon
                        sx={{ fontSize: { xs: 16, sm: 18 } }}
                        className="mr-1 sm:mr-2"
                      />
                      <span className="hidden xs:inline">WhatsApp</span>
                      <span className="xs:hidden">Whatsapp</span>

                      {/* Tooltip */}
                      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#1F2D4B] text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md whitespace-nowrap pointer-events-none z-10">
                        Chat via WhatsApp
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1F2D4B]"></div>
                      </span>
                    </a>

                    {/* Email Button */}
                    <a
                      href={`mailto:${
                        person.contacts.find((c) => c.type === "email")?.info
                      }`}
                      className="relative group flex items-center justify-center w-full py-2 sm:py-2.5 rounded-lg bg-[#1F2D4B] text-white text-xs sm:text-sm font-semibold hover:bg-[#2a3f5f] transition-all"
                    >
                      <EmailIcon
                        sx={{ fontSize: { xs: 16, sm: 18 } }}
                        className="mr-1 sm:mr-2"
                      />
                      Email
                      {/* Tooltip */}
                      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#1F2D4B] text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md whitespace-nowrap pointer-events-none z-10">
                        Kirim Email
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1F2D4B]"></div>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
