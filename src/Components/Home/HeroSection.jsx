import { useEffect, useState } from "react";

function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroElement = document.getElementById("home");

      if (heroElement) {
        const heroHeight = heroElement.offsetHeight;

        if (scrollPosition > heroHeight * 0.3) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className={`min-h-screen w-full flex flex-col items-end justify-center px-4 sm:px-6 md:px-20 bg-cover bg-center transition-all duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: "url('/assets/bg-home.jpg')" }}
      >
        <div
          className={`transition-all duration-500 max-w-2xl text-right ${
            isScrolled
              ? "transform translate-y-10 opacity-0"
              : "transform translate-y-0 opacity-100"
          }`}
        >
          {/* Judul */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
            <span className="block">Trusted Container Depot & Logistics</span>
            <span className="block">Solutions in Indonesia</span>
          </h1>

          {/* Deskripsi  */}
          <div className="mt-4 sm:mt-6">
            <p className="font-medium text-xs sm:text-sm md:text-lg leading-relaxed">
              <span className="block">
                Providing reliable container storage, repair, and logistics
                solutions.
              </span>
              <span className="block">
                With in-house systems and nationwide branches, we ensure
                seamless operations across Indonesia.
              </span>
            </p>
          </div>

          {/* Button */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6 justify-end">
            <button className="bg-[#DA1D2C] hover:bg-[#b01824] text-white font-semibold py-2 px-5 rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 text-xs sm:text-sm self-center md:self-start mx-auto md:mx-0 cursor-pointer">
              Explore Services
            </button>
            <button className="bg-[#000065] hover:bg-[#00004a] text-white font-semibold py-2 px-5 rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 text-xs sm:text-sm self-center md:self-start mx-auto md:mx-0 cursor-pointer">
              Go to Tracker Portal
            </button>
          </div>

          {/* Footer text */}
          <div
            className="mt-24 sm:mt-28 font-bold italic text-xs sm:text-sm md:text-lg text-right"
            style={{ color: "#FF8D0A" }}
          >
            <span className="block">Serving shipping lines,</span>
            <span className="block">forwarders, and logistic</span>
            <span className="block">companies since 1988.</span>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section
        id="content-section"
        className={`min-h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-20 transition-all duration-700 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`max-w-4xl ${
            isScrolled
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#DA1D2C] leading-tight text-center mb-6">
            <span className="block">Trusted Container Depot & Logistics</span>
            <span className="block text-xl sm:text-2xl md:text-4xl font-bold text-[#DA1D2C] leading-tight mt-2">
              Solutions in Indonesia
            </span>
          </h1>

          <div className="mb-6">
            <p className="text-sm sm:text-base md:text-lg leading-tight ">
              Providing reliable container storage, repair, and logistics
              solutions. With in-house systems and
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-tight ">
              logistics solutions. With in-house systems and nationwide
              branches, we ensure seamless operations across Indonesia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <button className="flex-1 sm:flex-none bg-[#000065] hover:bg-[#00004a] text-white font-semibold py-2 px-5 rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 text-xs sm:text-sm self-center cursor-pointer text-center">
              Explore Services
            </button>
            <button className="flex-1 sm:flex-none bg-transparent border-2 border-[#000065] hover:bg-[#000065] text-[#000065] hover:text-white font-semibold py-2 px-5 rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 text-xs sm:text-sm self-center cursor-pointer text-center">
              Go to Tracker Portal
            </button>
          </div>
        </div>

        {/* Background Image */}
        <div
          className="text-center font-bold italic text-xs sm:text-sm md:text-lg py-16 bg-cover bg-center w-full h-100 relative mt-8 rounded-xl mx-4"
          style={{
            backgroundImage: "url('/assets/new.jpg')",
            color: "#FF8D0A",
          }}
        >
          {/* Konten teks */}
          <div className="relative z-10" style={{ color: "#FF8D0A" }}>
            <span className="block drop-shadow-lg">
              Serving shipping lines, forwarders, and logistic
            </span>
            <span className="block drop-shadow-lg"></span>
            <span className="block drop-shadow-lg">companies since 1988.</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
