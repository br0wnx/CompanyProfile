import {
  LocalShippingOutlined,
  LocalShipping,
  Forklift,
  Inventory,
  Warehouse,
  AcUnit,
  Description,
} from "@mui/icons-material";

export default function Services() {
  return (
    <>
      {/* Hero Section Services */}
      <section>
        <div
          className="w-full h-[75vh] flex items-center justify-center text-white px-6 md:px-20 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/assets/servis.jpg')" }}
        >
          {/* Overlay Lebih Gelap */}
          <div className="absolute inset-0 bg-black/50 "></div>

          {/* Content */}
          <div className="text-center relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed italic">
              reliable, technology-driven, and customer-focused solutions for
              <span className="block">your container needs.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 px-6 md:px-20 bg-[#FDFBFC] mt-25">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#DA1D2C] mb-4">
              Core Services
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/assets/c1.jpg",
                title: "Depot Services",
                desc: (
                  <ul className="space-y-2 text-m leading-tight">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Empty & full container storage.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Nationwide coverage in Jakarta, Surabaya, Medan,
                        Semarang.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>FIFO container release system.</span>
                    </li>
                  </ul>
                ),
              },
              {
                img: "/assets/las1.jpg",
                title: "Maintenance & Repair",
                desc: (
                  <ul className="space-y-2 text-m leading-tight">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Certified by IICL.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Minor & major repair capability.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Welding, washing, reefer plugs, and inspection.
                      </span>
                    </li>
                  </ul>
                ),
              },
              {
                img: "/assets/truk.jpg",
                title: "Trucking & Transportation (BRG)",
                desc: (
                  <ul className="space-y-2 text-m leading-tight">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>20ft & 40ft container trucking.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Experienced drivers.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Cost-efficient & safe delivery.</span>
                    </li>
                  </ul>
                ),
              },
              {
                img: "/assets/c4.jpg",
                title: "Rail Cargo Solutions (BLP)",
                desc: (
                  <ul className="space-y-2 text-m leading-tight">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Intermodal transport: Jakarta, Surabaya, Semarang.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Complies with truck load regulation (Permenhub
                        134/2015).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>7 days a week services.</span>
                    </li>
                  </ul>
                ),
              },
              {
                img: "/assets/c5.jpg",
                title: "Depot Facilities & Equipment",
                desc: (
                  <ul className="space-y-2 text-m leading-tight">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>High stacking side loaders.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Forklift, prime movers, washing machines, welding
                        machines.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Reefer plug facilities.</span>
                    </li>
                  </ul>
                ),
              },
              {
                img: "/assets/c6.jpg",
                title: "Reporting & Technology",
                desc: (
                  <ul className="space-y-2 text-m leading-tight">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Standardize daily reporting system.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Delivery via EDI (Codeco), email, online portal.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        Customizable frequency (2x/day or by request).
                      </span>
                    </li>
                  </ul>
                ),
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-48  flex items-center justify-center overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Border muncul mulai dari bawah gambar */}
                <div className="p-6 flex flex-col flex-grow border-2 border-t-0 border-[#000065] rounded-b-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {service.title}
                  </h3>
                  <div className="leading-tight flex-grow ">{service.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Services Section */}
      <section className="py-16 px-6 md:px-20 bg-[#FDFBFC]">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#DA1D2C] mb-4">
              Operational Services
            </h2>
          </div>

          {/* Operational Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <LocalShippingOutlined
                    style={{ color: "#000065", fontSize: "3rem" }}
                  />
                ),
                title: "Haulage",
                desc: "Efficient trucking solutions for both 20ft and 40ft containers, ensuring safe and on-time delivery from port to depot or customer site.",
              },
              {
                icon: (
                  <Forklift style={{ color: "#000065", fontSize: "3rem" }} />
                ),
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
                className="bg-gray-100 p-4 sm:p-5 rounded-md shadow hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  {/* Icon & Title */}
                  <div className="flex flex-col items-center justify-center w-24 text-center">
                    <div className="mb-1">{service.icon}</div>
                    <h3 className="text-base font-bold leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base leading-snug flex-1">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tariff Information Section */}
      <section className="py-16 px-6 md:px-20 bg-[#FDFBFC]">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
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
                className="bg-white border border-[#000065] rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                {/* Title */}
                <h3 className="text-lg font-bold  mb-3">{tariff.title}</h3>

                {/* Price */}
                <div className="mb-4">
                  <p className="text-2xl font-bold text-[#000065]">
                    Starting from {tariff.price}
                  </p>
                </div>

                {/* Description */}
                <p className=" mb-4 leading-snug">{tariff.desc}</p>

                {/* Note */}
                <p className="text-xs  italic border-t border-gray-200 pt-3">
                  {tariff.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Background Section */}
      <section
        className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/cta.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 py-8 sm:py-12 md:py-20 gap-6 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-tight italic whitespace-nowrap">
            Looking for detailed quotations or customized solutions? Get in
            <span className="block">touch with our team today.</span>
          </h2>
          <button className="bg-[#DA1D2C] hover:bg-[#b01824] px-4 sm:px-5 py-2 rounded-lg font-semibold text-white text-xs sm:text-sm md:text-base">
            Get in touch
          </button>
        </div>
      </section>
    </>
  );
}
