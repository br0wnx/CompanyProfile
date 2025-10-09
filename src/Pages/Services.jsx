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
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
              reliable, technology-driven, and customer-focused solutions for
              your container needs.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
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
                img: "/assets/c2.jpg",
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
                img: "/assets/c3.jpg",
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
      <section className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#DA1D2C] mb-4">
              Operational Services
            </h2>
          </div>

          {/* Operational Services Grid - 2 columns layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              {[
                {
                  title: "Haulage",
                  desc: "Efficient trucking solutions for both 20ft and 40ft containers, ensuring safe and on-time delivery from port to depot or customer site.",
                },
                {
                  title: "Lift On Lift Off",
                  desc: "Professional container handling with heavy-duty side loaders and forklifts, designed for fast and accurate loading or unloading.",
                },
                {
                  title: "Stuffing & Stripping",
                  desc: "Experienced team for stuffing and stripping services, supporting smooth cargo transfer and proper documentation.",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold  mb-3">
                    {service.title}
                  </h3>
                  <p className="leading-tight">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {[
                {
                  title: "Container Storage",
                  desc: "Secure yard management system with concrete surface and monitors capacity to ensure containers are stored safely and efficiently.",
                },
                {
                  title: "Refer",
                  desc: "Specialized reefer technicians provide inspections, electrical checks, and certified repairs to maintain cold chain reliability.",
                },
                {
                  title: "Custom Clearances",
                  desc: "Assistance with customs documentation and clearance process, ensuring compliance with Indonesian regulations.",
                },
              ].map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-md  hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold  mb-3">{service.title}</h3>
                  <p className=" leading-tight">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
