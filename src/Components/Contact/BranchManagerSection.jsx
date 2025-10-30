import { useState, useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AOS from "aos";
import "aos/dist/aos.css";

export function BranchManagerSection() {
  const [activeBranch, setActiveBranch] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });
  }, []);

  const branches = [
    {
      city: "Surabaya",
      name: "Mr. Kastrianto",
      email: "yanto@dwipakharismamitra.co.id",
      phone: "081331146858",
      waLink: "https://wa.me/6281331146858",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63329.58256492783!2d112.6062398216797!3d-7.229558299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7ff1d60ba778b%3A0xa59d1dd59e49f7a!2sPT.Dwipa%20Kharisma%20Mitra!5e0!3m2!1sid!2sid!4v1760418067052!5m2!1sid!2sid",
    },
    {
      city: "Jakarta",
      name: "Mr. Jagoar",
      email: "jagoar@dwipakharismamitra.co.id",
      phone: "0811850039",
      waLink: "https://wa.me/62811850039",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253896.27090963194!2d106.9449293!3d-6.113298599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a208affffffff%3A0xd4354d2466a205f4!2sPT.%20Dwipa%20Kharisma%20Mitra%20Jakarta!5e0!3m2!1sid!2sid!4v1760418195276!5m2!1sid!2sid",
    },
    {
      city: "Semarang",
      name: "Mrs. Indra",
      email: "indra_puspitasari@dwipakharismamitra.co.id",
      phone: "082133771971",
      waLink: "https://wa.me/6282133771971",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63367.89923044979!2d110.34047452167971!3d-6.950941200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f31529baed9f%3A0xecfff0d5beef68fc!2sPT.%20Dwipa%20Kharisma%20Mitra%20Semarang!5e0!3m2!1sid!2sid!4v1760418223987!5m2!1sid!2sid",
    },
    {
      city: "Belawan",
      name: "Mr. Defri",
      email: "defri_suwandi@dwipakharismamitra.co.id",
      phone: "62811632204",
      waLink: "https://wa.me/62811632204",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127396.4760292758!2d98.56265014335938!3d3.77972990000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3036cc2a5ffbd269%3A0x4da367ddb1e7036d!2sPT.%20Dwipa%20Kharisma%20Mitra%20Belawan!5e0!3m2!1sid!2sid!4v1760418404011!5m2!1sid!2sid",
    },
  ];

  return (
    <section
      className="w-full py-16 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
          {/* Left: Branch List */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#DA1D2C] mb-6">
              Branch Manager
            </h2>

            <div className="space-y-4">
              {branches.map((branch, index) => (
                <a
                  key={index}
                  href={branch.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative block border-2 rounded-2xl p-4 transition-all duration-300 cursor-pointer group
                    ${
                      activeBranch === index
                        ? "bg-[#000065] text-white border-[#000065]"
                        : "bg-white border-[#000065] hover:bg-[#000065] hover:text-white"
                    }`}
                >
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#000065] text-white text-xs px-3 py-1.5 rounded-full opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out shadow-md">
                    Klik untuk chat via WhatsApp
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#000065]"></div>
                  </span>

                  <h3
                    className={`font-bold text-base mb-2 ${
                      activeBranch === index
                        ? "text-white"
                        : "group-hover:text-white"
                    }`}
                  >
                    {branch.city}
                  </h3>
                  <p className="font-semibold mb-3 text-sm text-[#FF8D0A]">
                    {branch.name}
                  </p>

                  <div className="space-y-2 text-xs font-bold">
                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0 ${
                          activeBranch === index
                            ? "bg-white text-[#000065]"
                            : "bg-[#000065] text-white group-hover:bg-white group-hover:text-[#000065]"
                        }`}
                      >
                        <EmailIcon sx={{ fontSize: 18 }} />
                      </div>
                      <span>{branch.email}</span>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center w-7 h-7 rounded-md flex-shrink-0 ${
                          activeBranch === index
                            ? "bg-white text-[#000065]"
                            : "bg-[#000065] text-white group-hover:bg-white group-hover:text-[#000065]"
                        }`}
                      >
                        <WhatsAppIcon sx={{ fontSize: 18 }} />
                      </div>
                      <span>{branch.phone}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Google Maps */}
          <div
            className="flex flex-col bg-white border border-[#E5E7EB] rounded-3xl shadow-md p-6 sm:p-8 relative overflow-hidden"
            data-aos="fade-left"
          >
            {/* Decorative Background Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#000065]/5 rounded-full blur-3xl -z-10"></div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#DA1D2C] mb-8 text-center sm:text-left">
              Our Location
            </h2>

            {/* Tab Filter */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 mb-8">
              {branches.map((branch, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBranch(index)}
                  className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer 
          ${
            activeBranch === index
              ? "bg-[#000065] text-white shadow-lg scale-105"
              : "bg-white text-[#000065] border border-[#000065] hover:bg-[#000065] hover:text-white hover:shadow-md"
          }`}
                >
                  {branch.city}

                  {/* Active indicator (underline) */}
                  {activeBranch === index && (
                    <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-3 h-1 rounded-full bg-[#FF8D0A]"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Map Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E5E7EB] group">
              {/* Map iframe */}
              <iframe
                src={branches[activeBranch].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl transition-transform duration-500 group-hover:scale-[1.02] min-h-[450px] sm:min-h-[500px]"
              />

              {/* Overlay Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#000065] text-white text-xs sm:text-sm px-4 py-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300">
                Showing location:{" "}
                <span className="text-[#FF8D0A] font-semibold">
                  {branches[activeBranch].city}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
