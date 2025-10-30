import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export function CtaSection() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <section
      className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/cta.jpg')" }}
      data-aos="fade-up"
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div
        className="relative flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 py-8 sm:py-12 md:py-20 gap-6 max-w-3xl mx-auto"
        data-aos="fade-up"
      >
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-tight italic whitespace-normal md:whitespace-nowrap">
          Looking for detailed quotations or customized solutions? Get in
          <span className="block">touch with our team today.</span>
        </h2>
        <button
          onClick={() => {
            navigate("/contact");
            window.scrollTo(0, 0);
          }}
          className="bg-[#C6463D] hover:bg-[#9F392F] px-4 sm:px-5 py-2 rounded-lg font-semibold text-white text-xs sm:text-sm md:text-base cursor-pointer transition-transform duration-700 ease-in-out hover:scale-105"
          data-aos="zoom-in"
        >
          Get in touch
        </button>
      </div>
    </section>
  );
}
