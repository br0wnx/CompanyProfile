import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export function BranchManagerSection() {
  const [activeBranch, setActiveBranch] = useState(0);

  const MailIcon = () => <EmailIcon sx={{ fontSize: 20 }} />;

  const PhoneIconComponent = () => <PhoneIcon sx={{ fontSize: 20 }} />;

  const branches = [
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
  ];

  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
          {/* Left: Branch List */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#DA1D2C] mb-6">
              Branch Manager
            </h2>

            <div className="space-y-4">
              {branches.map((branch, index) => (
                <div
                  key={index}
                  className={`border-2 rounded-2xl p-4 transition-all duration-300 cursor-pointer group ${
                    activeBranch === index
                      ? "bg-[#000065] text-white border-[#000065]"
                      : "bg-white border-[#000065] hover:bg-[#000065] hover:text-white"
                  }`}
                  onClick={() => setActiveBranch(index)}
                >
                  <h3
                    className={`font-bold text-base mb-2 ${
                      activeBranch === index
                        ? "text-white"
                        : "group-hover:text-white"
                    }`}
                  >
                    {branch.city}
                  </h3>
                  <p
                    className={`font-semibold mb-3 text-sm ${
                      activeBranch === index
                        ? "text-[#FF8D0A]"
                        : "text-[#FF8D0A]"
                    }`}
                  >
                    {branch.name}
                  </p>
                  <div className="space-y-2">
                    {/* Email */}
                    <div
                      className={`flex items-center gap-2 text-xs font-bold ${
                        activeBranch === index
                          ? "text-white"
                          : "group-hover:text-white"
                      }`}
                    >
                      <div
                        className={`p-1 rounded flex-shrink-0 transition-colors ${
                          activeBranch === index
                            ? "bg-white text-[#000065]"
                            : "bg-[#000065] text-white group-hover:bg-white group-hover:text-[#000065]"
                        }`}
                      >
                        <MailIcon />
                      </div>
                      <span className="break-all text-sm">{branch.email}</span>
                    </div>

                    {/* Phone */}
                    <div
                      className={`flex items-center gap-2 text-sm font-bold ${
                        activeBranch === index
                          ? "text-white"
                          : "group-hover:text-white"
                      }`}
                    >
                      <div
                        className={`p-1 rounded flex-shrink-0 transition-colors ${
                          activeBranch === index
                            ? "bg-white text-[#000065]"
                            : "bg-[#000065] text-white group-hover:bg-white group-hover:text-[#000065]"
                        }`}
                      >
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
                src={branches[activeBranch].mapUrl}
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
  );
}
