import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";

export default function About() {
  return (
    <>
      {/* Hero Section About */}
      <section
        className="w-full h-[75vh] flex flex-col md:flex-row items-center justify-center text-white px-6 md:px-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-about-4.jpg')" }}
      >
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <p className="text-l sm:text-xl md:text-2xl font-semibold leading-snug">
            Driving Indonesia's Container &<br />
            Logistics Industry with
            <br />
            Technology and Trust
          </p>
        </div>

        {/* Right Text */}
        <div className="flex-1 text-center md:text-right">
          <p className="text-xl sm:text-2xl md:text-4xl font-bold">About DKM</p>
          <span className="block text-xl sm:text-2xl md:text-4xl font-bold">
            Group
          </span>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full py-20 px-6 md:px-20 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
          {/* Left: Text */}
          <div className="flex-1 flex flex-col justify-center text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#DA1D2C]">
              Who We Are
            </h2>
            <p className="text-sm sm:text-base md:text-lg  leading-relaxed">
              DKM Group is a leading depot and integrated logistics provider in
              Indonesia. With more than three decades of experience, we support
              shipping lines, freight forwarders, and trucking companies through
              reliable container storage, repair, and transportation solutions.
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg  leading-relaxed">
              Our strength lies in technology-driven operations and nationwide
              coverage, ensuring seamless logistics flow across major Indonesian
              ports.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex items-center">
            <img
              src="/assets/content-who.jpg"
              alt="Who We Are"
              className="w-full h-full max-h-[400px] rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="w-full py-20 px-6 md:px-20 bg-white">
        {(() => {
          const cards = [
            {
              title: "Our Vision",
              img: "/assets/card1.jpg",
              desc: `To be the most trusted and technology-driven logistics and container depot company in Indonesia, delivering efficiency and reliability for global and domestic trade.`,
            },
            {
              title: "Our Mission",
              img: "/assets/card2.jpg",
              desc: `• Provide professional and customer-oriented container services
• Continuously innovate with in-house technology systems
• Expand nationwide coverage to support Indonesia's growing logistics sector
• Create sustainable growth that benefits our partners, employees, and industry`,
            },
          ];

          return (
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              {/* Left: Text - mengambil 1 bagian dari 3 */}
              <div className="flex-1 flex flex-col justify-between text-left">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-[#DA1D2C]">
                    What Drives Us
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed ">
                    Our journey has always been guided by more than just
                    operations — it is about{" "}
                    <strong>
                      building trust, delivering consistency, and embracing
                      innovation.
                    </strong>
                    Logistics is the backbone of trade, and we see our role as
                    more than moving containers; we help connect businesses,
                    industries, and communities across Indonesia.
                  </p>
                </div>
              </div>

              {/* Right: Cards - mengambil 2 bagian dari 3 */}
              <div className="flex-[2] flex flex-col lg:flex-row gap-6 w-full">
                {cards.map((card, idx) => (
                  <div
                    key={idx}
                    className={`bg-white rounded-lg shadow-md flex flex-col overflow-hidden 
      ${idx === 0 ? "lg:w-[35%]" : "lg:w-[65%]"} w-full`}
                  >
                    {/* Gambar */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover rounded-t-xl"
                      />
                    </div>

                    {/* Konten */}
                    <div className="p-6 flex flex-col gap-3 text-left border-2 border-t-0 border-[#000065] rounded-b-lg">
                      <h3 className="text-xl font-bold">{card.title}</h3>
                      <p className="text-sm sm:text-base whitespace-pre-line leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </section>

      {/* Our Journey & Group Section */}
      <section className="w-full py-12 px-6 md:px-20 bg-gray-50">
        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#DA1D2C]">
            Our Journey & Group
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            From humble beginnings to becoming a trusted container depot and
            logistics partner, our journey reflects growth, innovation and
            dedication to service excellence. As part of a strong group of
            companies, we combine depot management, logistics, and IT solutions
            to deliver integrated support for global trade and supply chains.
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Left: 4 Cards - Diperlebar */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "PT. Bintang Rejeki Graha (BRG)",
                img: "/assets/br.png",
                desc: `A trucking company specializing in 20ft & 40ft container transport, established in the 1980s in Surabaya. Known for skilled drivers, competitive pricing, and a strong customer first culture.`,
              },
              {
                title: "PT. Bintang Nusantara Services (BNS)",
                img: "/assets/bns.png",
                desc: `A leading container depot in Surabaya, acquired by DKM Group in 2020. Integrated with DKM Surabaya operations, BNS continues to grow through facility expansion and technology adoption.`,
              },
              {
                title: "PT. Java Sarana Mitra Sejati (JSMS)",
                img: "/assets/java.png",
                desc: `Established in 2001, operating depots in Semarang and Lampung. Providing strategic lands, high-standard repair facilities, and premium depot services to support Indonesia's logistics growth.`,
              },
              {
                title: "PT. Bintang Laut Premium (BLP)",
                img: "/assets/blp.png",
                desc: `Founded in 2008 as a reach stacker rental provider, later expanded into rail cargo transportation in Surabaya, Jakarta, and Semarang. Currently operating daily train services, supporting safer and more efficient logistics.`,
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4 flex flex-col h-full border border-[#000065]"
              >
                {/* Logo + Icon */}
                <div className="w-full h-14 flex items-center justify-between mb-3">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-18 object-contain"
                  />
                  <LaunchOutlinedIcon
                    sx={{ fontSize: 20 }}
                    className="text-[#000065] hover:text-[#00004a] cursor-pointer transition-colors duration-200"
                  />
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-left leading-tight mb-2 ">
                  {card.title}
                </h3>

                {/* Description */}
                <p className=" text-left leading-relaxed flex-grow">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Timeline - Dirampingkan */}
          <div className="lg:w-2/5 flex flex-col gap-4 h-full">
            {[
              {
                text: "Dwipa Kharisma Mitra (DKM), formerly known as Dwipakarsa Manunggal, was founded by Temasek Holding Singapore and a local Indonesian company. Dwipakarsa was operating in two big cities in Indonesia, namely Jakarta and Surabaya.",
                img: "/assets/1.jpg",
              },
              {
                text: "Temasek Holding Singapore took full ownership of Dwipakarsa Manunggal and was rebranded to Dwipa Kharisma Mitra (DKM). DKM then opened up two more branches in Belawan and Semarang.",
                img: "/assets/2.jpg",
              },
              {
                text: "DKM was fully acquired and owned by an Indonesian family for more expansion, and from this point onward DKM's company size has started to grow exponentially.",
                img: "/assets/3.jpg",
              },
              {
                text: "DKM acquired another depot company, Java Sarana Mitra Sejati, which operates in Semarang and Bandar Lampung.",
                img: "/assets/4.jpg",
              },
              {
                text: "DKM opened up a container depot in Cikarang Dry Port, and three rail intermodal container yards in Jakarta, Semarang, and Surabaya.",
                img: "/assets/5.jpg",
              },
              {
                text: "DKM set up a joint venture with CMA CGM, one of the largest shipping container companies in the world, under the name CMA CGM Inland Services (CCIS).",
                img: "/assets/6.png",
              },
              {
                text: "DKM acquired another local depot container company in Surabaya, Bintang Nusantara Services (BNS).",
                img: "/assets/7.jpg",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center md:items-start justify-between gap-4 ${
                  idx % 2 !== 0 ? "md:flex-row-reverse" : ""
                } flex-1`}
              >
                {/* Text - Lebih ramping */}
                <div
                  className={`flex-1 text-xs sm:text-sm leading-relaxed ${
                    idx % 2 !== 0 ? "text-left md:text-right" : "text-left"
                  }`}
                >
                  <p className="line-clamp-4">{step.text}</p>
                </div>

                {/* Image - Diperkecil */}
                <div className="flex-shrink-0">
                  <img
                    src={step.img}
                    alt={`Step ${idx + 1}`}
                    className="w-16 h-16 md:w-18 md:h-18 object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Coverage Section */}
      <section className="w-full py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-[#DA1D2C]">
            Nationwide Coverage
          </h2>

          {/* Main Image */}
          <div className="mb-12">
            <img
              src="/assets/map.png"
              alt="Nationwide Coverage Map"
              className="w-full h-auto object-cover rounded-lg shadow-md mx-auto"
            />
          </div>

          {/* Two Column Text */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            {/* Left Text - Rata Kiri */}
            <div className="flex-1 text-left">
              <p className="text-sm sm:text-base md:text-lg  leading-tight">
                Additionally, through our group company
                <strong className="underline">
                  {" "}
                  PT Java Sarana Mitra Sejati (JSMS),
                </strong>
                we also serve <strong>Lampung</strong> and{" "}
                <strong>Semarang</strong>, further strengthening our nationwide
                presence.
              </p>
            </div>

            {/* Right Text - Rata Kanan */}
            <div className="flex-1 text-left md:text-right">
              <p className="text-sm sm:text-base md:text-lg  leading-tight">
                <strong className="underline">
                  PT Bintang Nusantara Service (BNS){" "}
                </strong>
                operates side-by-side with <strong>DKM Surabaya</strong> and is
                fully integrated into Surabaya operations.
              </p>
            </div>
          </div>

          {/* 4 Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Surabaya */}
            <div className="p-6 border-r border-gray-700">
              <h3 className="font-bold text-lg mb-3">Surabaya</h3>
              <div className="space-y-2 text-sm leading-none">
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    land space
                  </span>
                  <span className="flex-1">2.5 HA + 2.75 HA (Concrete)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Capacity
                  </span>
                  <span className="flex-1">
                    +- 2.500 TEUs (Empty) +- 3.000 TEUs (Full)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Container Repair
                  </span>
                  <span className="flex-1">25 minor, 3 major (2 teams)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Equipment
                  </span>
                  <span className="flex-1">
                    Side Loaders, Washing Machines, Repair Tools
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Operation Hours
                  </span>
                  <span className="flex-1">
                    Mon-Fri 08.00-21.00, Sat 08.00-13.00
                  </span>
                </div>
              </div>
            </div>

            {/* Semarang */}
            <div className="p-6 border-r border-gray-700">
              <h3 className="font-bold text-lg mb-3">Semarang</h3>
              <div className="space-y-2 text-sm leading-none">
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    land space
                  </span>
                  <span className="flex-1">2.136 HA (Concrete)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Capacity
                  </span>
                  <span className="flex-1">+- 1.800 TEUs</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Container Repair
                  </span>
                  <span className="flex-1">25 minor, 3 major (2 teams)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Equipment
                  </span>
                  <span className="flex-1">
                    Side Loaders, Welding Machines, Washing Machine, Hangar
                    Washing (2 trucks)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Operation Hours
                  </span>
                  <span className="flex-1">
                    Mon-Fri 08.00-16.30, Sat 08.00-12.00
                  </span>
                </div>
              </div>
            </div>

            {/* Jakarta */}
            <div className="p-6 border-r border-gray-700">
              <h3 className="font-bold text-lg mb-3">Jakarta</h3>
              <div className="space-y-2 text-sm leading-none">
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    land space
                  </span>
                  <span className="flex-1">2.5 HA (Concrete)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Capacity
                  </span>
                  <span className="flex-1">+- 4.500 TEUs (7 High Stack)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Container Repair
                  </span>
                  <span className="flex-1">
                    30 minor, 5 major (IICL certified staff)
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Equipment
                  </span>
                  <span className="flex-1">
                    Side Loaders, Washing Machines, Welding Machines, Hangar
                    Machines
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Operation Hours
                  </span>
                  <span className="flex-1">
                    Mon-Fri 24 Hours, Sat 08.00-15.00
                  </span>
                </div>
              </div>
            </div>

            {/* Medan */}
            <div className="p-6">
              <h3 className="font-bold text-lg mb-3">Medan</h3>
              <div className="space-y-2 text-sm leading-none">
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    land space
                  </span>
                  <span className="flex-1">2.35 HA (Concrete)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Capacity
                  </span>
                  <span className="flex-1">+- 2.000 TEUs</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Container Repair
                  </span>
                  <span className="flex-1">25 minor, 3 major (2 teams)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Equipment
                  </span>
                  <span className="flex-1">
                    Side Loaders, Forklift, Prime Mover, Chassis, Washing
                    Machines, Welding Machines, Generator
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold flex-shrink-0 w-32">
                    Operation Hours
                  </span>
                  <span className="flex-1">
                    Mon-Fri 08.00-17.00, Sat 08.00-12.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Standards Section */}
      <section className="w-full py-20 px-6 md:px-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-[#DA1D2C]">
            Certifications & Standards
          </h2>

          {/* Description Text */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-sm sm:text-base md:text-lg  leading-relaxed">
              At DKM Group, our certifications reflect our strong commitment to
              international standards and quality assurance in container depot
              and logistics services.
            </p>
          </div>

          {/* 3 Logos Horizontal */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
            {/* Certification 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
                <img
                  src="/assets/iicl.jpg"
                  alt="ISO Certification"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center leading-relaxed">
                Accreditation for container
                <br />
                inspection and repair, ensuring
                <br />
                global compliance
              </p>
            </div>

            {/* Certification 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
                <img
                  src="/assets/sai.webp"
                  alt="IICL Certification"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center leading-relaxed">
                Certified for excellence in quality
                <br />
                management system and
                <br />
                operational consistency
              </p>
            </div>

            {/* Certification 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-64 h-64 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
                <img
                  src="/assets/kan.png"
                  alt="Safety Certification"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center leading-relaxed">
                Recognized for maintaining
                <br />
                quality prosecesses,customer satisfaction,
                <br />
                and continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Background Section */}
      <section
        className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bawah.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 py-8 sm:py-12 md:py-20 gap-4 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-snug italic">
            Partner with DKM Group for reliable
            <span className="block text-xl sm:text-2xl md:text-4xl font-semibold leading-snug italic mt-1">
              and efficient logistics solutions
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
