import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Contact() {
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

  // Icons untuk contact - menggunakan MUI icons
  const MailIcon = () => (
    <EmailIcon sx={{ fontSize: 20 }} /> // w-3 h-3 equivalent
  );

  const PhoneIconComponent = () => (
    <PhoneIcon sx={{ fontSize: 20 }} /> // w-3 h-3 equivalent
  );

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

  // Komponen ContactItem untuk reusable contact info
  const ContactItem = ({ type, info }) => (
    <div className="flex items-center gap-2 text-xs group-hover:text-white">
      <div className="bg-[#000065] text-white p-1 rounded flex-shrink-0 group-hover:bg-white group-hover:text-[#000065] transition-colors">
        {type === "email" ? <MailIcon /> : <PhoneIconComponent />}
      </div>
      <span className={type === "email" ? "break-all text-xs" : "text-xs"}>
        {info}
      </span>
    </div>
  );

  return (
    <>
      {/* Hero Section About */}
      <section
        className="w-full h-[75vh] flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/contact.jpg')" }}
      >
        {/* Right Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-xl sm:text-2xl md:text-4xl font-bold">
            Get In Touch
          </p>
          <span className="block text-xl sm:text-2xl md:text-4xl font-bold">
            With Us
          </span>
        </div>
        {/* Left Text */}
        <div className="flex-1 text-center md:text-right mb-6 md:mb-0">
          <p className="text-l sm:text-xl md:text-2xl font-semibold leading-snug">
            Direct contacts for each
            <br />
            department and branch to serve
            <br />
            you better.
          </p>
        </div>
      </section>

      {/* Customer Services & Support Section */}
      <section className="w-full py-16 px-4 sm:px-6 md:px-20 bg-[#FDFBFC] mt-25">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#DA1D2C] mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-4">
                {/* Name & Email dalam satu row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-[#000065] rounded-lg focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-[#000065] rounded-lg focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-[#000065] rounded-lg focus:border-transparent transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#000065] rounded-lg focus:border-transparent transition-all resize-none"
                    placeholder="Please describe your inquiry in detail..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#000065] hover:bg-[#00004a] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right: Contact Information */}
            <div className="flex flex-col justify-center">
              {/* Description */}
              <div className="mb-18">
                <h3 className="text-2xl font-bold mb-4">
                  We're Here to Assist You
                </h3>
                <p className="leading-snug">
                  For inquiries, assistance, or partnership opportunities,
                  <p className="block">
                    {" "}
                    please reach out to our support team or connect with the
                    <p className="block"> right department below.</p>
                  </p>
                </p>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#DA1D2C] mb-6">
                Customer Service & Support
              </h2>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#000065] text-white p-3 rounded-lg flex-shrink-0">
                    <EmailIcon sx={{ fontSize: 24 }} />{" "}
                    {/* w-6 h-6 equivalent */}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:contactus@dwipakharismamitra.co.id"
                      className="text-[#000065] hover:text-[#00004a] transition-colors"
                    >
                      contactus@dwipakharismamitra.co.id
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-[#000065] text-white p-3 rounded-lg flex-shrink-0">
                    <PhoneIcon sx={{ fontSize: 24 }} />{" "}
                    {/* w-6 h-6 equivalent */}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:02144854918"
                      className="text-[#000065] hover:text-[#00004a] transition-colors"
                    >
                      021 4485 4918
                    </a>
                    <p className="text-sm mt-1 text-[#FD8D0A]">
                      Available Mon - Fri, 08.00 - 17.00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Management Section */}
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
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        // Toggle dropdown state untuk item ini
                        const answers =
                          document.querySelectorAll(".faq-answer");
                        const icons = document.querySelectorAll(".faq-icon");

                        // Toggle current item
                        answers[index].classList.toggle("hidden");
                        icons[index].classList.toggle("rotate-180");
                      }}
                    >
                      <span className="font-semibold">{item.question}</span>
                      <ExpandMoreIcon
                        sx={{ fontSize: 20 }}
                        className="transition-transform faq-icon"
                      />
                    </button>
                    {/* Answer section */}
                    <div className="faq-answer hidden px-6 py-4 bg-gray-50 border-t border-gray-200">
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

      {/* Branch Manager Section */}
      <section className="w-full py-16 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]">
        <div className="max-w-7xl mx-auto">
          {/* Rasio kiri : kanan = 1 : 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
            {/* Left: Branch List */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#DA1D2C] mb-6">
                Branch Manager
              </h2>

              <div className="space-y-4">
                {[
                  {
                    city: "Surabaya",
                    name: "Mr. Kastrianto",
                    email: "yanto@dwipakharismamitra.co.id",
                    phone: "081331146858",
                    mapUrl:
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63329.58256492783!2d112.6062398216797!3d-7.229558299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ff1d60ba778b%3A0xa59d1dd59e49f7a!2sPT.Dwipa%20Kharisma%20Mitra!5e0!3m2!1sid!2sid!4v1760418067052!5m2!1sid!2sid",
                  },
                  {
                    city: "Jakarta",
                    name: "Mr. Jagoar",
                    email: "jagoar@dwipakharismamitra.co.id",
                    phone: "081331146858",
                    mapUrl:
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253896.27090963194!2d106.9449293!3d-6.113298599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a208affffffff%3A0xd4354d2466a205f4!2sPT.%20Dwipa%20Kharisma%20Mitra%20Jakarta!5e0!3m2!1sid!2sid!4v1760418195276!5m2!1sid!2sid",
                  },
                  {
                    city: "Semarang",
                    name: "Mrs. Indra",
                    email: "indra_puspitasari@dwipakharismamitra.co.id",
                    phone: "081331146858",
                    mapUrl:
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63367.89923044979!2d110.34047452167971!3d-6.950941200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f31529baed9f%3A0xecfff0d5beef68fc!2sPT.%20Dwipa%20Kharisma%20Mitra%20Semarang!5e0!3m2!1sid!2sid!4v1760418223987!5m2!1sid!2sid",
                  },
                  {
                    city: "Belawan",
                    name: "Mr. Defri",
                    email: "defri_suwandi@dwipakharismamitra.co.id",
                    phone: "081331146858",
                    mapUrl:
                      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127396.4760292758!2d98.56265014335938!3d3.77972990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3036cc2a5ffbd269%3A0x4da367ddb1e7036d!2sPT.%20Dwipa%20Kharisma%20Mitra%20Belawan!5e0!3m2!1sid!2sid!4v1760418404011!5m2!1sid!2sid",
                  },
                ].map((branch, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-[#000065] rounded-2xl p-4 hover:bg-[#000065] transition-all duration-300 group cursor-pointer"
                    onClick={() => {
                      // Update map ketika kota diklik
                      const mapIframe = document.getElementById("branch-map");
                      if (mapIframe) {
                        mapIframe.src = branch.mapUrl;
                      }
                    }}
                  >
                    <h3 className="font-bold text-base mb-2 group-hover:text-white">
                      {branch.city}
                    </h3>
                    <p className="text-[#FF8D0A] font-semibold mb-3 text-sm">
                      {branch.name}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs group-hover:text-white">
                        <div className="bg-[#000065] text-white p-1 rounded flex-shrink-0 group-hover:bg-white group-hover:text-[#000065] transition-colors">
                          <MailIcon />
                        </div>
                        <span className="break-all text-sm font-bold">
                          {branch.email}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold group-hover:text-white">
                        <div className="bg-[#000065] text-white p-1 rounded flex-shrink-0 group-hover:bg-white group-hover:text-[#000065] transition-colors">
                          <PhoneIconComponent />
                        </div>
                        <span>{branch.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Google Maps */}
            <div className="flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#DA1D2C] mb-6">
                Our Location
              </h2>
              <div className="rounded-xl overflow-hidden shadow-lg h-full min-h-[500px]">
                <iframe
                  id="branch-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63329.58256492783!2d112.6062398216797!3d-7.229558299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ff1d60ba778b%3A0xa59d1dd59e49f7a!2sPT.Dwipa%20Kharisma%20Mitra!5e0!3m2!1sid!2sid!4v1760418067052!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
