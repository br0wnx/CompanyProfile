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
        className={`min-h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-20 bg-cover bg-center transition-all duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: "url('/assets/bg-home.jpg')" }}
      >
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? "transform translate-y-10 opacity-0"
              : "transform translate-y-0 opacity-100"
          }`}
        >
          <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-white drop-shadow-lg leading-snug">
            <span className="block">Trusted Container Depot & Logistics</span>
            <span className="block text-lg sm:text-2xl md:text-5xl font-bold text-white drop-shadow-lg leading-snug">
              Solutions in Indonesia
            </span>
          </h1>

          <div className="mt-4 sm:mt-6">
            <span className="block font-medium text-xs sm:text-sm md:text-lg text-white">
              Providing reliable container storage, repair, and logistics
              solutions.
            </span>
            <span className="block font-medium text-xs sm:text-sm md:text-lg text-white">
              Nationwide branches ensure seamless operations across Indonesia.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6 justify-center">
            <button className="bg-[#DA1D2C] hover:bg-[#b01824] text-white font-semibold py-2 px-5 rounded-lg transition-colors text-xs sm:text-sm">
              Explore Services
            </button>
            <button className="bg-[#000065] hover:bg-[#00004a] text-white font-semibold py-2 px-5 rounded-lg transition-colors text-xs sm:text-sm">
              Go to Tracker Portal
            </button>
          </div>

          <div
            className="mt-6 sm:mt-10 text-center font-bold italic text-xs sm:text-sm md:text-lg"
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
        className={`min-h-screen w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-20 bg-gray-100 transition-all duration-700 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`max-w-4xl transition-all duration-700 ${
            isScrolled
              ? "transform translate-y-0 opacity-100"
              : "transform translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800 leading-snug mb-6">
            <span className="block">Trusted Container Depot & Logistics</span>
            <span className="block text-lg sm:text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
              Solutions in Indonesia
            </span>
          </h1>

          <div className="mb-6">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
              Providing reliable container storage, repair, and logistics
              solutions.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Nationwide branches ensure seamless operations across Indonesia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <button className="bg-[#DA1D2C] hover:bg-[#b01824] text-white font-semibold py-2 px-5 rounded-lg transition-colors text-xs sm:text-sm">
              Explore Services
            </button>
            <button className="bg-[#000065] hover:bg-[#00004a] text-white font-semibold py-2 px-5 rounded-lg transition-colors text-xs sm:text-sm">
              Go to Tracker Portal
            </button>
          </div>

          <div
            className="text-center font-bold italic text-xs sm:text-sm md:text-lg"
            style={{ color: "#FF8D0A" }}
          >
            <span className="block">Serving shipping lines,</span>
            <span className="block">forwarders, and logistic</span>
            <span className="block">companies since 1988.</span>
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
      <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed md:leading-loose">
            An integrated logistics and technology company with years of
            experience in container depot operations. With in-house technology
            development, we deliver efficient, reliable, and scalable solutions
            for our partners across Indonesia.
          </p>
        </div>

        <div
          className="mt-6 sm:mt-10 text-center font-bold text-sm sm:text-base md:text-lg"
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
      <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20">
        <div className="text-center mb-6 sm:mb-10 md:mb-12">
          <h2
            className="text-xl sm:text-2xl md:text-4xl font-bold"
            style={{ color: "#DA1D2C" }}
          >
            Why Choose Us
          </h2>
          <p className="mt-4 sm:mt-6 max-w-xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed px-1">
            At DKM Group, we combine over three decades of expertise with
            technology-driven operations to deliver reliable container and
            logistics solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 text-center">
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
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col h-full overflow-hidden"
            >
              <div className="h-36 sm:h-44 md:h-52 w-full">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 flex flex-col items-center border-2 border-t-0 border-[#000065] rounded-b-xl flex-1">
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1">
                  {card.title}
                </h3>
                <span className="font-bold mb-2 text-xs sm:text-sm">
                  {card.subtitle}
                </span>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 sm:gap-10 md:gap-16 items-start">
          {/* Left: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 flex-1 w-full">
            {[
              {
                icon: (
                  <Inventory2OutlinedIcon
                    sx={{ fontSize: { xs: 36, sm: 48 } }}
                  />
                ),
                title: "Storage",
                desc: "Efficient yard management for safe container storage.",
              },
              {
                icon: (
                  <SettingsOutlinedIcon sx={{ fontSize: { xs: 36, sm: 48 } }} />
                ),
                title: "Maintenance & Repair",
                desc: "Keep your containers in top operational condition.",
              },
              {
                icon: (
                  <CleaningServicesOutlinedIcon
                    sx={{ fontSize: { xs: 36, sm: 48 } }}
                  />
                ),
                title: "Washing & Cleaning",
                desc: "Trough cleaning services to maintain container hygiene.",
              },
              {
                icon: (
                  <FactCheckOutlinedIcon
                    sx={{ fontSize: { xs: 36, sm: 48 } }}
                  />
                ),
                title: "Survey & Inspection",
                desc: "Certified inspection and survey services for shipping standards.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center p-3 sm:p-4 border-2 border-[#000065]"
              >
                {card.icon}
                <h3 className="text-sm sm:text-base font-bold mb-1">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Description */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left w-full mt-6 md:mt-0">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "#DA1D2C" }}
            >
              Our Services
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed mb-3">
              DKM Group delivers comprehensive container depot services with
              high standards in storage, maintenance, and inspection.
            </p>
            <button className="bg-[#000065] hover:bg-[#00004a] mt-2 sm:mt-4 rounded-lg font-semibold text-white px-4 py-2 w-fit text-xs sm:text-sm mx-auto md:mx-0">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Customer Portal */}
      <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 sm:gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-2"
              style={{ color: "#DA1D2C" }}
            >
              Customer Portal
            </h2>
            <p className="text-base sm:text-base leading-relaxed mb-4">
              Access our container tracker for real-time updates and efficient
              monitoring. More smart tools coming soon.
            </p>
            <button className="bg-[#000065] hover:bg-[#00004a] px-4 sm:px-5 py-2 rounded-lg font-semibold text-white text-xs sm:text-sm">
              Go to Tracker Portal
            </button>
          </div>
          <div className="flex-1 w-full mt-4 md:mt-0">
            <img
              src="/assets/portal.jpg"
              alt="Customer Portal"
              className="w-full h-auto rounded-xl object-cover shadow-md grayscale hover:grayscale-0 transition duration-500"
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
