import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function CertificationSection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <section className="w-full py-20 px-6 md:px-20 bg-[#FDFBFC] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-[#FDFBFC] opacity-60 pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-[#DA1D2C]"
          data-aos="fade-down"
        >
          Certifications & Standards
        </h2>

        {/* Description Text */}
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <p className="text-base sm:text-base leading-relaxed flex-grow">
            At DKM Group, our certifications reflect our strong commitment to
            international standards and quality assurance in container depot and
            logistics services.
          </p>
        </div>

        {/* 3 Logos Horizontal */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10">
          {/* Certification 1 */}
          <div
            className="flex flex-col items-center text-center group"
            data-aos="zoom-in"
          >
            <div className="w-64 h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center rounded-2xl shadow-md transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(0,0,101,0.15)] group-hover:bg-white/60 backdrop-blur">
              <img
                src="/assets/iicl.png"
                alt="ISO Certification"
                className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>
            <p className="text-center leading-relaxed mt-3 group-hover:text-[#000065]">
              Accreditation for container
              <br />
              inspection and repair, ensuring
              <br />
              global compliance
            </p>
          </div>

          {/* Certification 2 */}
          <div
            className="flex flex-col items-center text-center group"
            data-aos="zoom-in"
          >
            <div className="w-64 h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center rounded-2xl shadow-md transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(218,29,44,0.2)] group-hover:bg-white/60 backdrop-blur">
              <img
                src="/assets/sai.webp"
                alt="IICL Certification"
                className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>
            <p className="text-center leading-relaxed mt-3 group-hover:text-[#DA1D2C]">
              Certified for excellence in quality
              <br />
              management system and
              <br />
              operational consistency
            </p>
          </div>

          {/* Certification 3 */}
          <div
            className="flex flex-col items-center text-center group"
            data-aos="zoom-in"
          >
            <div className="w-64 h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center rounded-2xl shadow-md transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(0,0,101,0.15)] group-hover:bg-white/60 backdrop-blur">
              <img
                src="/assets/kan.png"
                alt="Safety Certification"
                className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>
            <p className="text-center leading-relaxed mt-3 group-hover:text-[#000065]">
              Recognized for maintaining
              <br />
              quality processes, customer satisfaction,
              <br />
              and continuous improvement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
