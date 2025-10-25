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

  const handleCardClick = (person) => {
    const waContact = person.contacts.find((c) => c.type === "whatsapp");
    if (waContact) {
      const phoneNumber = waContact.info.replace(/^0/, "62"); // ubah awalan 0 ke 62
      window.open(`https://wa.me/${phoneNumber}`, "_blank");
    }
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* FAQ */}
          <div className="lg:col-span-1" data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#DA1D2C] mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold">{item.question}</span>
                    <ExpandMoreIcon
                      sx={{ fontSize: 20 }}
                      className={`transition-transform ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 py-4 bg-gray-50 border-t border-gray-200 ${
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
              className="text-2xl sm:text-3xl font-bold text-[#DA1D2C] mb-6"
              data-aos="fade-left"
            >
              Management
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Left Column */}
              <div className="flex flex-col gap-6 h-full">
                {managementData.slice(0, 3).map((person, index) => (
                  <div
                    key={index}
                    onClick={() => handleCardClick(person)}
                    className="relative flex flex-col justify-between h-full bg-white border-2 border-[#000065] rounded-2xl p-5 hover:bg-[#000065] transition-all duration-300 group cursor-pointer"
                    data-aos="fade-left"
                    data-aos-delay={index * 100}
                  >
                    {/* Tooltip dengan gaya khas website */}
                    <span className="absolute top-[-36px] left-1/2 -translate-x-1/2 bg-[#000065] text-white text-[10px] sm:text-xs px-3 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap shadow-md">
                      Klik untuk chat via WhatsApp
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#000065]"></div>
                    </span>

                    <h3 className="font-bold text-base mb-2 group-hover:text-white leading-tight">
                      {person.position}
                    </h3>
                    <p className="text-[#FF8D0A] font-semibold mb-3 text-base">
                      {person.name}
                    </p>

                    <div className="space-y-2">
                      {person.contacts.map((contact, contactIndex) => (
                        <div
                          key={contactIndex}
                          className="flex items-center gap-3 font-bold text-sm group-hover:text-white"
                        >
                          <div className="flex items-center justify-center w-7 h-7 bg-[#000065] text-white rounded-md flex-shrink-0 group-hover:bg-white group-hover:text-[#000065] transition-colors">
                            {contact.icon}
                          </div>
                          <span
                            className={
                              contact.type === "email"
                                ? "break-all text-sm"
                                : "text-sm"
                            }
                          >
                            {contact.info}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6 h-full">
                {managementData.slice(3).map((person, index) => (
                  <div
                    key={index}
                    onClick={() => handleCardClick(person)}
                    className="relative flex flex-col justify-between h-full bg-white border-2 border-[#000065] rounded-2xl p-5 hover:bg-[#000065] transition-all duration-300 group cursor-pointer"
                    data-aos="fade-left"
                    data-aos-delay={(index + 3) * 100}
                  >
                    {/* Tooltip dengan gaya khas website */}
                    <span className="absolute top-[-36px] left-1/2 -translate-x-1/2 bg-[#000065] text-white text-[10px] sm:text-xs px-3 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap shadow-md">
                      Klik untuk chat via WhatsApp
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#000065]"></div>
                    </span>

                    <h3 className="font-bold text-base mb-2 group-hover:text-white leading-tight">
                      {person.position}
                    </h3>
                    <p className="text-[#FF8D0A] font-semibold mb-3 text-base">
                      {person.name}
                    </p>

                    <div className="space-y-2">
                      {person.contacts.map((contact, contactIndex) => (
                        <div
                          key={contactIndex}
                          className="flex items-center gap-3 font-bold text-sm group-hover:text-white"
                        >
                          <div className="flex items-center justify-center w-7 h-7 bg-[#000065] text-white rounded-md flex-shrink-0 group-hover:bg-white group-hover:text-[#000065] transition-colors">
                            {contact.icon}
                          </div>
                          <span
                            className={
                              contact.type === "email"
                                ? "break-all text-sm"
                                : "text-sm"
                            }
                          >
                            {contact.info}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
