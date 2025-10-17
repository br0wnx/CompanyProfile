import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function TariffSection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-[#FDFBFC]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#DA1D2C] mb-4">
            Tariff Information
          </h2>
        </div>

        {/* Tariff Grid - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Lift Off & Lift On",
              price: "Rp 350.000",
              desc: "Fast, reliable handling for both full and empty containers.",
              note: "Exclude VAT. Price may change anytime without prior notice.",
            },
            {
              title: "Service Charge",
              price: "Rp 75.000",
              desc: "Covers administration and basic depot handling services.",
              note: "Exclude VAT. Price may change anytime without prior notice.",
            },
            {
              title: "Washing",
              price: "Rp 165.000",
              desc: "High-pressure washing and cleaning services to maintain container hygiene.",
              note: "Exclude VAT. Price may change anytime without prior notice.",
            },
            {
              title: "Storage",
              price: "Rp 1.000",
              desc: "Daily storage fee for containers, with FIFO release system applied.",
              note: "Exclude VAT. Price may change anytime without prior notice.",
            },
          ].map((tariff, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#000065] rounded-lg p-6 transition-all duration-500 hover:shadow-xl hover:scale-105 group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Title */}
              <h3 className="text-lg font-bold mb-3 transition-transform duration-500 group-hover:translate-y-[-4px] group-hover:delay-75">
                {tariff.title}
              </h3>

              {/* Price */}
              <div className="mb-4 transition-transform duration-500 group-hover:translate-y-[-3px] group-hover:delay-150">
                <p className="text-2xl font-bold text-[#000065]">
                  Starting from {tariff.price}
                </p>
              </div>

              {/* Description */}
              <p className="mb-4 leading-snug opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-[-2px] group-hover:delay-200">
                {tariff.desc}
              </p>

              {/* Note */}
              <p className="text-xs italic border-t border-gray-200 pt-3 opacity-70 transition-opacity duration-500 group-hover:opacity-100 group-hover:translate-y-[-1px] group-hover:delay-250">
                {tariff.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
