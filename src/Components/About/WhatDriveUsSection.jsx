import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function WhatDriveUsSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  const cards = [
    {
      title: "Our Vision",
      img: "/assets/card1.jpg",
      desc: `To be the most trusted and technology-driven logistics and container depot company in Indonesia, delivering efficiency and reliability for global and domestic trade.`,
    },
    {
      title: "Our Mission",
      img: "/assets/card2.jpg",
      desc: `• Provide professional and customer-oriented container services
• Continuously innovate with in-house technology systems
• Expand nationwide coverage to support Indonesia's growing logistics sector
• Create sustainable growth that benefits our partners, employees, and industry`,
    },
  ];

  return (
    <>
      <section className="w-full py-20 px-6 md:px-20 bg-[#FDFBFC]">
        <div
          className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-12"
          data-aos="fade-up"
        >
          {/* Left: Text */}
          <div
            className="flex-1 flex flex-col justify-between text-left"
            data-aos="fade-right"
          >
            <div>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#C6463D]"
                data-aos="fade-down"
              >
                What Drives Us
              </h2>
              <p
                className="text-base sm:text-base leading-relaxed flex-grow"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Our journey has always been guided by more than just operations
                — it is about{" "}
                <strong>
                  building trust, delivering consistency, and embracing
                  innovation.
                </strong>{" "}
                Logistics is the backbone of trade, and we see our role as more
                than moving containers; we help connect businesses, industries,
                and communities across Indonesia.
              </p>
            </div>
          </div>

          {/* Right: Cards */}
          <div
            className="flex-[2] flex flex-col lg:flex-row gap-6 w-full items-stretch"
            data-aos="fade-left"
          >
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`${idx === 0 ? "lg:w-[35%]" : "lg:w-[65%]"} w-full flex`}
                data-aos="zoom-in"
                data-aos-delay={idx * 150}
              >
                {/* Wrapper stabil */}
                <div
                  className="group bg-white rounded-lg shadow-md flex flex-col overflow-hidden border border-transparent transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:shadow-[0_12px_35px_rgba(31,45,75,0.15)] flex-grow"
                >
                  {/* Lapisan yang animasi */}
                  <div className="flex flex-col h-full transform transition-transform duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-2">
                    {/* Gambar */}
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover rounded-t-xl transform transition-transform duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-110"
                      />
                    </div>

                    {/* Konten */}
                    <div className="p-6 flex flex-col gap-3 text-left border-2 border-t-0 border-[#1F2D4B] rounded-b-lg flex-grow transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:border-[#C6463D]/50">
                      <h3 className="text-xl font-bold transition-colors duration-700 group-hover:text-[#C6463D]">
                        {card.title}
                      </h3>
                      <p className="text-base sm:text-base whitespace-pre-line leading-relaxed flex-grow">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
