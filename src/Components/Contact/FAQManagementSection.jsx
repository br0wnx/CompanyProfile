import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export function FAQManagementSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ Data
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

  // Icons untuk contact
  const MailIcon = () => <EmailIcon sx={{ fontSize: 20 }} />;

  const PhoneIconComponent = () => <PhoneIcon sx={{ fontSize: 20 }} />;

  // Management Data
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
        { type: "phone", info: "081331146858", icon: <PhoneIconComponent /> },
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
        { type: "phone", info: "081331146858", icon: <PhoneIconComponent /> },
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
        { type: "phone", info: "081331146858", icon: <PhoneIconComponent /> },
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
        { type: "phone", info: "081331146858", icon: <PhoneIconComponent /> },
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
        { type: "phone", info: "081331146858", icon: <PhoneIconComponent /> },
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: Frequently Asked Questions - 1 kolom */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#DA1D2C] mb-8">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg overflow-hidden"
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
                  {/* Answer section */}
                  <div
                    className={`px-6 py-4 bg-gray-50 border-t border-gray-200 ${
                      openFAQ === index ? "block" : "hidden"
                    }`}
                  >
                    <p className="">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Management */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#DA1D2C] mb-6">
              Management
            </h2>

            {/* Grid Management */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              {/* Kolom Kiri */}
              <div className="space-y-4 flex flex-col">
                {managementData.slice(0, 3).map((person, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between h-full bg-white border-2 border-[#000065] rounded-2xl p-4 hover:bg-[#000065] transition-all duration-300 group cursor-pointer"
                  >
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
                          className="flex items-center gap-2 font-bold text-sm group-hover:text-white"
                        >
                          <div className="bg-[#000065] text-white p-1 rounded flex-shrink-0 group-hover:bg-white group-hover:text-[#000065] transition-colors">
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

              {/* Kolom Kanan */}
              <div className="space-y-4 flex flex-col">
                {managementData.slice(3).map((person, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between h-full bg-white border-2 border-[#000065] rounded-2xl p-4 hover:bg-[#000065] transition-all duration-300 group cursor-pointer"
                  >
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
                          className="flex items-center gap-2 font-bold text-sm group-hover:text-white"
                        >
                          <div className="bg-[#000065] text-white p-1 rounded flex-shrink-0 group-hover:bg-white group-hover:text-[#000065] transition-colors">
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
