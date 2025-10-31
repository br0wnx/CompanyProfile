import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function CoreServices() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });
  }, []);

  const services = [
    {
      img: "/assets/c1.jpg",
      title: "Depot Services",
      desc: (
        <ul className="space-y-2 text-sm leading-tight">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Empty & full container storage.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Nationwide coverage in Jakarta, Surabaya, Medan, Semarang.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>FIFO container release system.</span>
          </li>
        </ul>
      ),
    },
    {
      img: "/assets/las1.jpg",
      title: "Maintenance & Repair",
      desc: (
        <ul className="space-y-2 text-sm leading-tight">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Certified by IICL.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Minor & major repair capability.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Welding, washing, reefer plugs, and inspection.</span>
          </li>
        </ul>
      ),
    },
    {
      img: "/assets/truk.jpg",
      title: "Trucking & Transportation (BRG)",
      desc: (
        <ul className="space-y-2 text-sm leading-tight">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>20ft & 40ft container trucking.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Experienced drivers.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Cost-efficient & safe delivery.</span>
          </li>
        </ul>
      ),
    },
    {
      img: "/assets/c4.jpg",
      title: "Rail Cargo Solutions (BLP)",
      desc: (
        <ul className="space-y-2 text-sm leading-tight">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Intermodal transport: Jakarta, Surabaya, Semarang.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Complies with truck load regulation (Permenhub 134/2015).
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>7 days a week services.</span>
          </li>
        </ul>
      ),
    },
    {
      img: "/assets/c5.jpg",
      title: "Depot Facilities & Equipment",
      desc: (
        <ul className="space-y-2 text-sm leading-tight">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>High stacking side loaders.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Forklift, prime movers, washing machines, welding
              machines.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Reefer plug facilities.</span>
          </li>
        </ul>
      ),
    },
    {
      img: "/assets/c6.jpg",
      title: "Reporting & Technology",
      desc: (
        <ul className="space-y-2 text-sm leading-tight">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Standardize daily reporting system.</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Delivery via EDI (Codeco), email, online portal.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Customizable frequency (2x/day or by request).</span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-[#FDFBFC] mt-25">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#C6463D] mb-4">
            Core Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white/90"
            >
              <div className="h-40 sm:h-48 flex items-center justify-center overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-4 sm:p-6 flex flex-col flex-grow border-2 border-t-0 border-[#1F2D4B] rounded-b-lg transition-all duration-500 hover:border-[#C6463D]">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center text-[#1F2D4B]">
                  {service.title}
                </h3>
                <div className="leading-tight flex-grow text-gray-700">{service.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}