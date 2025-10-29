import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

export function OurServices() {
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
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 bg-[#FDFBFC]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start">
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
                className="bg-white rounded-xl shadow-md flex flex-col items-center text-center p-4 sm:p-5 md:p-6 border-2 border-[#000065] cursor-pointer transition-all duration-700 ease-in-out hover:scale-105 hover:border-[#DA1D2C] hover:shadow-[0_8px_25px_rgba(218,29,44,0.25)] group"
                data-aos="fade-up"
                data-aos-delay={idx * 150}
              >
                {/* Icon */}
                <div className="transform transition-transform duration-500 group-hover:scale-110">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 mt-2 sm:mt-3 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-[#DA1D2C]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1">
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
              data-aos="fade-down"
            >
              Our Services
            </h2>
            <p
              className="text-base sm:text-base leading-relaxed mb-4 flex-grow"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              DKM Group delivers comprehensive container depot services with
              high standards in storage, maintenance, and inspection.
            </p>
            <button
              onClick={() => {
                navigate("/services");
                window.scrollTo(0, 0); 
              }}
              className="bg-[#000065] hover:bg-[#00004a] px-4 sm:px-5 py-2 rounded-lg font-semibold text-white text-xs sm:text-sm self-center lg:self-start mx-auto lg:mx-0 mb-38 cursor-pointer transition-transform duration-700 ease-in-out hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              View All Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
