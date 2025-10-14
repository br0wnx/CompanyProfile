import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CleaningServicesOutlinedIcon from "@mui/icons-material/CleaningServicesOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import HeroSection from "../Components/Home/HeroSection";


export default function Home() {
  return (
    <>
      <HeroSection/>
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
      <WhyChooseUs/>

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
