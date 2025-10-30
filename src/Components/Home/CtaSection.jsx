import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export function CtaSection() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <>
      <section
        className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-50.jpg')" }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 py-8 sm:py-12 md:py-20 gap-4 max-w-3xl mx-auto">
          <h2
            className="text-lg sm:text-xl md:text-3xl font-semibold leading-snug italic"
            data-aos="fade-down"
          >
            Ready to move your logistics forward?
            <span
              className="block text-lg sm:text-xl md:text-3xl font-semibold leading-snug italic mt-1"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Let's connect with DKM Group today.
            </span>
          </h2>
          <button
            onClick={() => {
              navigate("/contact");
              window.scrollTo(0, 0);
            }}
            className="bg-[#C6463D] hover:bg-[#9F392F] px-4 sm:px-5 py-2 rounded-lg font-semibold text-white text-xs sm:text-sm md:text-base cursor-pointer transition-transform duration-700 ease-in-out hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            Get in touch
          </button>
        </div>
      </section>
    </>
  );
}
