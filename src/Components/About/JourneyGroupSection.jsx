import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";


export function JourneyGroupSection() {
  return (
    <>
      <section className="w-full py-12 px-6 md:px-20 bg-[#FDFBFC]">
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
          {/* Left: 4 Cards*/}
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

          {/* Right: Timeline*/}
          <div className="lg:w-2/5 flex flex-col gap-4 h-full">
            {[
              {
                year: "1988",
                text: "Dwipa Kharisma Mitra (DKM), formerly known as Dwipakarsa Manunggal, was founded by Temasek Holding Singapore and a local Indonesian company. Dwipakarsa was operating in two big cities in Indonesia, namely Jakarta and Surabaya.",
                img: "/assets/1.jpg",
              },
              {
                year: "1995",
                text: "Temasek Holding Singapore took full ownership of Dwipakarsa Manunggal and was rebranded to Dwipa Kharisma Mitra (DKM). DKM then opened up two more branches in Belawan and Semarang.",
                img: "/assets/2.jpg",
              },
              {
                year: "2006",
                text: "DKM was fully acquired and owned by an Indonesian family for more expansion, and from this point onward DKM's company size has started to grow exponentially.",
                img: "/assets/3.jpg",
              },
              {
                year: "2010",
                text: "DKM acquired another depot company, Java Sarana Mitra Sejati, which operates in Semarang and Bandar Lampung.",
                img: "/assets/4.jpg",
              },
              {
                year: "2016",
                text: "DKM opened up a container depot in Cikarang Dry Port, and three rail intermodal container yards in Jakarta, Semarang, and Surabaya.",
                img: "/assets/5.jpg",
              },
              {
                year: "2019",
                text: "DKM set up a joint venture with CMA CGM, one of the largest shipping container companies in the world, under the name CMA CGM Inland Services (CCIS).",
                img: "/assets/6.png",
              },
              {
                year: "2020",
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
                {/* Text */}
                <div
                  className={`flex-1 text-xs sm:text-sm leading-relaxed ${
                    idx % 2 !== 0 ? "text-left md:text-right" : "text-left"
                  }`}
                >
                  <p className="line-clamp-4">{step.text}</p>
                </div>

                {/* Image */}
                <div
                  className="flex-shrink-0 relative w-16 h-16 md:w-18 md:h-18 rounded-lg shadow-sm bg-cover bg-center"
                  style={{ backgroundImage: `url('${step.img}')` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-[#000065]/55 rounded-lg flex items-center justify-center">
                    <span className="text-[#FF8D0A] font-bold text-sm md:text-base drop-shadow-lg">
                      {step.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
