import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import { Helmet } from "react-helmet-async";


export function JourneyGroupSection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <>
    <Helmet>
        <title>Our Revolution | Dwipa Kharisma Mitra</title>
        <meta
          name="description"
          content="Discover the evolution of Dwipa Kharisma Mitra — from humble beginnings to a trusted logistics partner."
        />
        <meta
          name="keywords"
          content="Dwipa Kharisma Mitra, Our Revolution, company journey, logistics partner, container depot"
        />
    </Helmet>
    <section
      id="journey"
      className="w-full py-20 px-6 md:px-20 bg-[#FDFBFC]"
      data-aos="fade-up"
    >
      {/* Intro Text */}
      <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-down">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#C6463D] tracking-tight">
          Our Revolution
        </h2>
        <p className="text-base sm:text-base leading-relaxed flex-grow">
          From humble beginnings to becoming a trusted container depot and
          logistics partner, our story is one of growth, innovation, and
          dedication to service excellence.
        </p>
      </div>

      {/* Timeline*/}
      <div
        className="max-w-7xl mx-auto overflow-x-auto pb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex gap-0">
          {[
            {
              year: "1988",
              text: "Dwipa Kharisma Mitra (DKM), formerly known as Dwipakarsa Manunggal, was founded by Temasek Holding Singapore and a local Indonesian company.",
              img: "/assets/1.jpg",
            },
            {
              year: "1995",
              text: "Temasek Holding Singapore took full ownership of Dwipakarsa Manunggal and was rebranded to Dwipa Kharisma Mitra (DKM).",
              img: "/assets/2.jpg",
            },
            {
              year: "2006",
              text: "DKM was fully acquired and owned by an Indonesian family for more expansion.",
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
              text: "DKM set up a joint venture with CMA CGM, one of the largest shipping container companies in the world.",
              img: "/assets/6.png",
            },
            {
              year: "2020",
              text: "DKM acquired another local depot container company in Surabaya, Bintang Nusantara Services (BNS).",
              img: "/assets/7.jpg",
            },
          ].map((step, idx, arr) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 flex flex-col items-center gap-4 relative px-6"
            >
              <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-xl border-2 border-white hover:scale-105 transition-transform duration-300">
                <img
                  src={step.img}
                  alt={step.year}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-r from-[#C6463D] to-[#A2342E] text-white px-5 py-2 rounded-full font-bold text-lg shadow-md">
                {step.year}
              </div>
              <p className="text-sm text-center leading-relaxed text-gray-700 px-2">
                {step.text}
              </p>
              {idx < arr.length - 1 && (
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Card */}
      <div
        className="max-w-7xl mx-auto mt-16"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Section Divider */}
        <div className="flex items-center justify-center mb-12 gap-4">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-[#C6463D]/40 to-[#C6463D]"></div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#C6463D]"></div>
            <div className="w-2 h-2 rounded-full bg-[#C6463D]/60"></div>
            <div className="w-2 h-2 rounded-full bg-[#C6463D]/30"></div>
          </div>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-[#C6463D]/40 to-[#C6463D]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "PT. Bintang Rejeki Graha (BRG)",
              img: "/assets/br.png",
              desc: "A trucking company specializing in 20ft & 40ft container transport, established in the 1980s in Surabaya.",
              link: "https://bintangrejeki.com/",
            },
            {
              title: "PT. Bintang Nusantara Services (BNS)",
              img: "/assets/bns.png",
              desc: "A leading container depot in Surabaya, acquired by DKM Group in 2020, now integrated with advanced technology.",
              link: "#",
            },
            {
              title: "PT. Java Sarana Mitra Sejati (JSMS)",
              img: "/assets/java.png",
              desc: "Operating depots in Semarang and Lampung with high-standard facilities supporting logistics growth.",
              link: "https://javasaranamitrasejati.com",
            },
            {
              title: "PT. Bintang Laut Premium (BLP)",
              img: "/assets/blp.png",
              desc: "Founded in 2008 as a reach stacker rental provider, later expanded into rail cargo transportation.",
              link: "https://bintanglautplatinum.com/",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border-2 border-gray-200/50 shadow-xl hover:shadow-2xl hover:scale-105 hover:border-[#C6463D]/30 transition-all duration-500 flex flex-col overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C6463D] to-[#A2342E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              {/* Image */}
              <div className="relative w-full h-40 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b-2 border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C6463D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-28 h-28 flex items-center justify-center bg-white rounded-2xl shadow-md border border-gray-100 group-hover:shadow-xl group-hover:scale-110 transition-all duration-500 relative z-10">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-16 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-3 text-[#1F2D4B] group-hover:text-[#C6463D] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 flex-grow mb-4">
                  {card.desc}
                </p>

                {/* Link button */}
                {card.link !== "#" && (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#C6463D] hover:gap-3 transition-all duration-300 group/link"
                  >
                    <span>Visit Website</span>
                    <LaunchOutlinedIcon className="text-base group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
