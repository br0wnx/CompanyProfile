import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  LocalShipping,
  Forklift,
  Inventory,
  Warehouse,
  AcUnit,
  Description,
} from "@mui/icons-material";

export function OperationalSection() {
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
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#DA1D2C] mb-4">
            Operational Services
          </h2>
        </div>

        {/* Operational Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            {
              icon: (
                <LocalShipping style={{ color: "#000065", fontSize: "3rem" }} />
              ),
              title: "Haulage",
              desc: "Efficient trucking solutions for both 20ft and 40ft containers, ensuring safe and on-time delivery from port to depot or customer site.",
            },
            {
              icon: <Forklift style={{ color: "#000065", fontSize: "3rem" }} />,
              title: (
                <>
                  Lift On <br /> Lift Off
                </>
              ),
              desc: "Professional container handling with heavy-duty side loaders and forklifts, designed for fast and accurate loading or unloading.",
            },
            {
              icon: (
                <Inventory style={{ color: "#000065", fontSize: "3rem" }} />
              ),
              title: "Stuffing & Stripping",
              desc: "Experienced team for stuffing and stripping services, supporting smooth cargo transfer and proper documentation.",
            },
            {
              icon: (
                <Warehouse style={{ color: "#000065", fontSize: "3rem" }} />
              ),
              title: "Container Storage",
              desc: "Secure yard management system with concrete surface and monitors capacity to ensure containers are stored safely and efficiently.",
            },
            {
              icon: <AcUnit style={{ color: "#000065", fontSize: "3rem" }} />,
              title: "Reefer",
              desc: "Specialized reefer technicians provide inspections, electrical checks, and certified repairs to maintain cold chain reliability.",
            },
            {
              icon: (
                <Description style={{ color: "#000065", fontSize: "3rem" }} />
              ),
              title: "Custom Clearances",
              desc: "Assistance with customs documentation and clearance process, ensuring compliance with Indonesian regulations.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-4 sm:p-5 rounded-md shadow transition-all duration-500 hover:shadow-xl hover:bg-gray-100/90 group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-start space-x-4">
                {/* Icon & Title */}
                <div className="flex flex-col items-center justify-center w-24 text-center">
                  <div className="mb-1 transform transition-transform duration-500 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-base font-bold leading-tight transition-all duration-500 group-hover:-translate-y-1 group-hover:text-[#DA1D2C]">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-base leading-snug flex-1 opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-1">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
