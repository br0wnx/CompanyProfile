import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { InteractiveLeafletMap } from "../InteractiveMap";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function NationWideSection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <section className="w-full py-20 px-6 md:px-20 bg-[#FDFBFC]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#DA1D2C]"
          data-aos="fade-down"
        >
          Nationwide Coverage
        </h2>

        {/* Main Image */}
        <div data-aos="zoom-in">
          <InteractiveLeafletMap />
        </div>

        {/* Two Column Text */}
        <div
          className="flex flex-col md:flex-row gap-8 mb-16"
          data-aos="fade-up"
        >
          {/* Left Text */}
          <div className="flex-1 text-left">
            <p className="text-base sm:text-base leading-relaxed flex-grow">
              Additionally, through our group company
              <strong className="underline">
                {" "}
                PT Java Sarana Mitra Sejati (JSMS),
              </strong>
              we also serve <strong>Lampung</strong> and{" "}
              <strong>Semarang</strong>, further strengthening our nationwide
              presence.
            </p>
          </div>

          {/* Right Text*/}
          <div className="flex-1 text-left md:text-right">
            <p className="text-base sm:text-base leading-relaxed flex-grow">
              <strong className="underline">
                PT Bintang Nusantara Service (BNS){" "}
              </strong>
              operates side-by-side with <strong>DKM Surabaya</strong> and is
              fully integrated into Surabaya operations.
            </p>
          </div>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Surabaya */}
          <div
            className="p-4 sm:p-5 lg:p-6 border-b sm:border-b-0 sm:border-r border-gray-700"
            data-aos="fade-right"
          >
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 flex items-center justify-between">
              <span className="text-base sm:text-lg lg:text-xl">Surabaya</span>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                <div className="relative group">
                  <div
                    className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center cursor-pointer hover:bg-[#00004a] transition"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/FWUtpsK19miFbNz69",
                        "_blank"
                      )
                    }
                  >
                    <MapOutlinedIcon fontSize="small" />
                  </div>

                  <span className="absolute top-[-32px] left-1/2 -translate-x-1/2 bg-[#000065] text-white text-[10px] sm:text-xs px-2.5 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap shadow-md">
                    Lihat Lokasi
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#000065]"></div>
                  </span>
                </div>
                <div className="relative group">
                  <div
                    className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center cursor-pointer hover:bg-[#00004a] transition"
                    onClick={() =>
                      window.open("https://wa.me/6281331146858", "_blank")
                    }
                  >
                    <WhatsAppIcon fontSize="small" />
                  </div>
                  <span className="absolute top-[-32px] left-1/2 -translate-x-1/2 bg-[#000065] text-white text-[10px] sm:text-xs px-2.5 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap shadow-md">
                    Chat via WhatsApp
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#000065]"></div>
                  </span>
                </div>
              </div>
            </h3>
            <div className="space-y-2 text-xs sm:text-sm leading-none">
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  land space
                </span>
                <span className="flex-1">2.5 HA + 2.75 HA (Concrete)</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Capacity
                </span>
                <span className="flex-1">
                  +- 2.500 TEUs (Empty) +- 3.000 TEUs (Full)
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Container Repair
                </span>
                <span className="flex-1">25 minor, 3 major (2 teams)</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Equipment
                </span>
                <span className="flex-1">
                  Side Loaders, Washing Machines, Repair Tools
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Operation Hours
                </span>
                <span className="flex-1">
                  Mon-Fri 08.00-21.00, Sat 08.00-13.00
                </span>
              </div>
            </div>
          </div>

          {/* Semarang */}
          <div
            className="p-4 sm:p-5 lg:p-6 border-b sm:border-b-0 sm:border-r border-gray-700"
            data-aos="fade-left"
          >
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 flex items-center justify-between">
              <span className="text-base sm:text-lg lg:text-xl">Semarang</span>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                <div className="relative group">
                  <div
                    className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center cursor-pointer hover:bg-[#00004a] transition"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/EmmGhvCNTibQfRWH6",
                        "_blank"
                      )
                    }
                  >
                    <MapOutlinedIcon fontSize="small" />
                  </div>
                  <span className="absolute top-[-32px] left-1/2 -translate-x-1/2 bg-[#000065] text-white text-[10px] sm:text-xs px-2.5 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap shadow-md">
                    Lihat Lokasi
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#000065]"></div>
                  </span>
                </div>
                <div className="relative group">
                  <div
                    className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center cursor-pointer hover:bg-[#00004a] transition"
                    onClick={() =>
                      window.open("https://wa.me/6282133771971", "_blank")
                    }
                  >
                    <WhatsAppIcon fontSize="small" />
                  </div>
                  <span className="absolute top-[-32px] left-1/2 -translate-x-1/2 bg-[#000065] text-white text-[10px] sm:text-xs px-2.5 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap shadow-md">
                    Chat via WhatsApp
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#000065]"></div>
                  </span>
                </div>
              </div>
            </h3>
            <div className="space-y-2 text-xs sm:text-sm leading-none">
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  land space
                </span>
                <span className="flex-1">2.136 HA (Concrete)</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Capacity
                </span>
                <span className="flex-1">+- 1.800 TEUs</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Container Repair
                </span>
                <span className="flex-1">25 minor, 3 major (2 teams)</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Equipment
                </span>
                <span className="flex-1">
                  Side Loaders, Welding Machines, Washing Machine, Hangar
                  Washing (2 trucks)
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Operation Hours
                </span>
                <span className="flex-1">
                  Mon-Fri 08.00-16.30, Sat 08.00-12.00
                </span>
              </div>
            </div>
          </div>

          {/* Jakarta */}
          <div
            className="p-4 sm:p-5 lg:p-6 border-b sm:border-b-0 sm:border-r border-gray-700"
            data-aos="fade-right"
          >
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 flex items-center justify-between">
              <span className="text-base sm:text-lg lg:text-xl">Jakarta</span>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                <div className="relative group">
                  <div
                    className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center cursor-pointer hover:bg-[#00004a] transition"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/aYJUPcEqPpZm5yS46",
                        "_blank"
                      )
                    }
                  >
                    <MapOutlinedIcon fontSize="small" />
                  </div>
                  <span className="absolute top-[-32px] left-1/2 -translate-x-1/2 bg-[#000065] text-white text-[10px] sm:text-xs px-2.5 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap shadow-md">
                    Lihat Lokasi
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#000065]"></div>
                  </span>
                </div>
                <div className="relative group">
                  <div
                    className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center cursor-pointer hover:bg-[#00004a] transition"
                    onClick={() =>
                      window.open("https://wa.me/62811850039", "_blank")
                    }
                  >
                    <WhatsAppIcon fontSize="small" />
                  </div>
                  <span className="absolute top-[-32px] left-1/2 -translate-x-1/2 bg-[#000065] text-white text-[10px] sm:text-xs px-2.5 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap shadow-md">
                    Chat via WhatsApp
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#000065]"></div>
                  </span>
                </div>
              </div>
            </h3>
            <div className="space-y-2 text-xs sm:text-sm leading-none">
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  land space
                </span>
                <span className="flex-1">2.5 HA (Concrete)</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Capacity
                </span>
                <span className="flex-1">+- 4.500 TEUs (7 High Stack)</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Container Repair
                </span>
                <span className="flex-1">
                  30 minor, 5 major (IICL certified staff)
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Equipment
                </span>
                <span className="flex-1">
                  Side Loaders, Washing Machines, Welding Machines, Hangar
                  Machines
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Operation Hours
                </span>
                <span className="flex-1">
                  Mon-Fri 24 Hours, Sat 08.00-15.00
                </span>
              </div>
            </div>
          </div>

          {/* Medan */}
          <div className="p-4 sm:p-5 lg:p-6" data-aos="fade-left">
            <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3 flex items-center justify-between">
              <span className="text-base sm:text-lg lg:text-xl">Medan</span>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
                <div className="relative group">
                  <div
                    className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center cursor-pointer hover:bg-[#00004a] transition"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/search/PT.+Dwipa+Kharisma+Mitra/",
                        "_blank"
                      )
                    }
                  >
                    <MapOutlinedIcon fontSize="small" />
                  </div>

                  <span className="absolute top-[-32px] left-1/2 -translate-x-1/2 bg-[#000065] text-white text-[10px] sm:text-xs px-2.5 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap shadow-md">
                    Lihat Lokasi
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#000065]"></div>
                  </span>
                </div>
                <div className="relative group">
                  <div
                    className="bg-[#000065] text-white p-1 sm:p-1.5 rounded flex items-center justify-center cursor-pointer hover:bg-[#00004a] transition"
                    onClick={() =>
                      window.open("https://wa.me/62811632204", "_blank")
                    }
                  >
                    <WhatsAppIcon fontSize="small" />
                  </div>
                  <span className="absolute top-[-32px] left-1/2 -translate-x-1/2 bg-[#000065] text-white text-[10px] sm:text-xs px-2.5 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap shadow-md">
                    Chat via WhatsApp
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#000065]"></div>
                  </span>
                </div>
              </div>
            </h3>
            <div className="space-y-2 text-xs sm:text-sm leading-none">
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  land space
                </span>
                <span className="flex-1">2.35 HA (Concrete)</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Capacity
                </span>
                <span className="flex-1">+- 2.000 TEUs</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Container Repair
                </span>
                <span className="flex-1">25 minor, 3 major (2 teams)</span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Equipment
                </span>
                <span className="flex-1">
                  Side Loaders, Forklift, Prime Mover, Chassis, Washing
                  Machines, Welding Machines, Generator
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-semibold flex-shrink-0 w-24 sm:w-28 lg:w-32">
                  Operation Hours
                </span>
                <span className="flex-1">
                  Mon-Fri 08.00-17.00, Sat 08.00-12.00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
