import { useState, useEffect } from "react";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

const HeroSection = () => {
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
          {/* Judul dengan 2 baris */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg leading-tight">
            <span className="block">Trusted Container Depot & Logistics</span>
            <span className="block">Solutions in Indonesia</span>
          </h1>

          {/* Deskripsi dengan 2 baris */}
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

          {/* Button dengan text-nowrap */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6 justify-end">
            <button className="bg-[#DA1D2C] hover:bg-[#b01824] text-white font-semibold py-2 px-5 rounded-lg transition-colors text-xs sm:text-sm text-nowrap">
              Explore Services
            </button>
            <button className="bg-[#000065] hover:bg-[#00004a] text-white font-semibold py-2 px-5 rounded-lg transition-colors text-xs sm:text-sm text-nowrap">
              Go to Tracker Portal
            </button>
          </div>

          {/* Footer text dengan 3 baris */}
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

      {/* New Section dengan teks yang sama */}
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
            <button className="bg-[#000065] hover:bg-[#00004a] text-white font-semibold py-2 px-5 rounded-lg transition-colors text-xs sm:text-sm">
              Explore Services
            </button>
            <button className="bg-transparent border-2 border-[#000065] hover:bg-[#000065] text-[#000065] hover:text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 text-xs sm:text-sm">
              Go to Tracker Portal
            </button>
          </div>
        </div>

        {/* Background Image dengan Rounded Corners */}
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
};

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* About Section */}
      <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-m sm:text-l md:text-xl leading-none md:leading-tight">
            DKM Group is an integrated logistics and technology company with
            years of experience in container depot opeartions and supporting
            industries. With in-house technology development, we continue to
            deliver efficient, reliable, and scalable solutions for our partners
            across Indonesia.
          </p>
        </div>

        <div
          className="mt-14 sm:mt-24 text-center font-bold text-sm sm:text-base md:text-lg"
          style={{ color: "#FF8D0A" }}
        >
          <span className="block">Over 1000+ Clients All Over The World</span>
        </div>
      </section>

      {/* Customer Logo Section */}
      <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <img
            src="/assets/dkm_customer.png"
            alt="Customer Logo"
            className="h-24 sm:h-32 md:h-48 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#FDFBFC]">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold"
            style={{ color: "#DA1D2C" }}
          >
            Why Choose Us
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-relaxed px-2 sm:px-4">
            At DKM Group, we combine over three decades of expertise with
            technology-driven operations to deliver reliable container and
            logistics solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 text-center">
          {/* Cards */}
          {[
            {
              img: "/assets/image-card/1.jpg",
              title: "Container Depot",
              subtitle: "(5 Strategic Locations)",
              desc: "Operating five strategic depots across Indonesia, providing trusted container handling and storage services.",
            },
            {
              img: "/assets/image-card/2.jpg",
              title: "Technology Driven",
              subtitle: "(In-house System)",
              desc: "Empowered by our own in-house IT team, we design and build systems tailored to operational needs.",
            },
            {
              img: "/assets/image-card/3.jpg",
              title: "Integrated Logistics",
              subtitle: "(Repair, Trucking, Rail Cargo, Rental)",
              desc: "From container repair to trucking, rail cargo, and reach stacker rental, our services connect every part of the logistics chain.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="h-32 sm:h-36 md:h-40 lg:h-44 xl:h-52 w-full">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col items-center border-2 border-t-0 border-[#000065] rounded-b-lg sm:rounded-b-xl flex-1">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2">
                  {card.title}
                </h3>
                <span className="font-bold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
                  {card.subtitle}
                </span>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 bg-[#FDFBFC]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left: Cards */}
          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 flex-1 w-full">
            {[
              {
                icon: (
                  <Inventory2OutlinedIcon
                    sx={{ fontSize: { xs: 36, sm: 40, md: 44, lg: 48 } }}
                  />
                ),
                title: "Storage",
                desc: "Efficient yard management for safe container storage.",
              },
              {
                icon: (
                  <SettingsOutlinedIcon
                    sx={{ fontSize: { xs: 36, sm: 40, md: 44, lg: 48 } }}
                  />
                ),
                title: "Maintenance & Repair",
                desc: "Keep your containers in top operational condition.",
              },
              {
                icon: (
                  <CleaningServicesOutlinedIcon
                    sx={{ fontSize: { xs: 36, sm: 40, md: 44, lg: 48 } }}
                  />
                ),
                title: "Washing & Cleaning",
                desc: "Trough cleaning services to maintain container hygiene.",
              },
              {
                icon: (
                  <FactCheckOutlinedIcon
                    sx={{ fontSize: { xs: 36, sm: 40, md: 44, lg: 48 } }}
                  />
                ),
                title: "Survey & Inspection",
                desc: "Certified inspection and survey services for shipping standards.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center p-4 sm:p-5 md:p-6 border-2 border-[#000065]"
              >
                {card.icon}
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 mt-2 sm:mt-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Description */}
          <div className="flex-1 flex flex-col justify-center text-center lg:text-left w-full mt-8 lg:mt-0">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6"
              style={{ color: "#DA1D2C" }}
            >
              Our Services
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
              DKM Group delivers comprehensive container depot services with
              high standards in storage, maintenance, and inspection.
            </p>
            <button className="bg-[#000065] hover:bg-[#00004a] px-4 sm:px-5 py-2 rounded-lg font-semibold text-white text-xs sm:text-sm self-center md:self-start mx-auto md:mx-0 mb-32">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* DKM Tracker Portal */}
      <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-4 sm:gap-6">
          <div className="flex-1 text-center md:text-left flex flex-col">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-2"
              style={{ color: "#DA1D2C" }}
            >
              Customer Portal
            </h2>
            <p className="text-base sm:text-base leading-relaxed mb-3 mt-8 flex-grow">
              Access our container tracker for real-time updates and efficient
              monitoring. More smart tools are coming soon as we expand out
              customer portal to deliver faster, technology-driven logistics
              services.
            </p>
            <button className="bg-[#000065] hover:bg-[#00004a] px-4 sm:px-5 py-2 rounded-lg font-semibold text-white text-xs sm:text-sm self-center md:self-start mx-auto md:mx-0 mb-32">
              Go to Tracker Portal
            </button>
          </div>
          <div className="flex-1 w-full mt-4 md:mt-0 flex items-center">
            <img
              src="/assets/portal.jpg"
              alt="Customer Portal"
              className="w-full h-full max-h-64 sm:max-h-80 md:max-h-96 rounded-xl object-cover shadow-md grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* CTA Background Section */}
      <section
        className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-50.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 py-8 sm:py-12 md:py-20 gap-4 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-3xl font-semibold leading-snug italic">
            Ready to move your logistics forward?
            <span className="block text-lg sm:text-xl md:text-3xl font-semibold leading-snug italic mt-1">
              Let's connect with DKM Group today.
            </span>
          </h2>
          <button className="bg-[#DA1D2C] hover:bg-[#b01824] px-4 sm:px-5 py-2 rounded-lg font-semibold text-white text-xs sm:text-sm md:text-base">
            Get in touch
          </button>
        </div>
      </section>
    </>
  );
}
