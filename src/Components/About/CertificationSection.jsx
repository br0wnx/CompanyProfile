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
    
    <section id="certification" className="w-full py-20 px-6 md:px-20 bg-[#FDFBFC] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-[#FDFBFC] opacity-60 pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-[#C6463D]"
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
            <p className="text-center leading-relaxed mt-3 group-hover:text-[#1F2D4B]">
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
            <a
              href="https://register.saiglobal.com/client/schedule.aspx?setID=SF01&custID=AS205962&appCertNo=QEC27745"
              target="_blank"
              rel="noopener noreferrer"
              className="w-64 h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center rounded-2xl shadow-md transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:shadow-[0_8px_30px_rgba(218,29,44,0.2)] group-hover:bg-white/60 backdrop-blur"
            >
              <span className="absolute top-[-36px] left-1/2 -translate-x-1/2 bg-[#C6463D] text-white text-[10px] sm:text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md whitespace-nowrap">
                Klik untuk melihat sertifikat
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#C6463D]"></div>
              </span>
              <img
                src="/assets/iso.png"
                alt="IICL Certification"
                className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </a>
            <p className="text-center leading-relaxed mt-3 group-hover:text-[#C6463D]">
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
                src="/assets/kan2.png"
                alt="Safety Certification"
                className="w-full h-full object-contain transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            </div>
            <p className="text-center leading-relaxed mt-3 group-hover:text-[#1F2D4B]">
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
