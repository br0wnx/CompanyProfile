import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";

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
    <section
      className="w-full py-20 px-6 md:px-20 bg-[#FDFBFC]"
      data-aos="fade-up"
    >
      {/* Intro Text */}
      <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-down">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#DA1D2C] tracking-tight">
          Our Journey & Group
        </h2>
        <p className="text-base sm:text-base leading-relaxed flex-grow">
          From humble beginnings to becoming a trusted container depot and
          logistics partner, our story is one of growth, innovation, and
          dedication to service excellence.
        </p>
      </div>

      <div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* LEFT: Company Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          data-aos="fade-right"
        >
          {[
            {
              title: "PT. Bintang Rejeki Graha (BRG)",
              img: "/assets/br.png",
              desc: `A trucking company specializing in 20ft & 40ft container transport, established in the 1980s in Surabaya.`,
              link: "https://bintangrejeki.com/",
            },
            {
              title: "PT. Bintang Nusantara Services (BNS)",
              img: "/assets/bns.png",
              desc: `A leading container depot in Surabaya, acquired by DKM Group in 2020, now integrated with advanced technology.`,
              link: "https://www.bns.com",
            },
            {
              title: "PT. Java Sarana Mitra Sejati (JSMS)",
              img: "/assets/java.png",
              desc: `Operating depots in Semarang and Lampung with high-standard facilities supporting logistics growth.`,
              link: "https://javasaranamitrasejati.com",
            },
            {
              title: "PT. Bintang Laut Premium (BLP)",
              img: "/assets/blp.png",
              desc: `Founded in 2008 as a reach stacker rental provider, later expanded into rail cargo transportation.`,
              link: "https://bintanglautplatinum.com/",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="group bg-white/80 backdrop-blur-md rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              {/* Image Section */}
              <div className="relative w-full h-36 flex flex-col items-center justify-center bg-gradient-to-b from-[#f9fafb] to-[#f2f4f8] border-b border-gray-100">
                <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-sm ring-1 ring-gray-200 group-hover:ring-[#DA1D2C]/30 transition-all duration-300">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Icon */}
                <div className="absolute top-3 right-3">
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center group"
                  >
                    <LaunchOutlinedIcon
                      className="text-[#000065] hover:text-[#00004a] cursor-pointer"
                      fontSize="small"
                    />
                    {/* Tooltip  */}
                    <span className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 bg-[#000065] text-white text-[10px] sm:text-xs px-2.5 py-1.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out whitespace-nowrap shadow-md">
                      Visit Site
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#000065]"></div>
                    </span>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <h3 className="font-semibold text-lg mb-2 text-[#000065] group-hover:text-[#DA1D2C] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed flex-grow">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="relative" data-aos="fade-left">
          {/* Garis Timeline */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#000065] via-[#DA1D2C]/70 to-[#000065]"></div>

          {/* Isi Timeline */}
          <div className="pl-10 space-y-12">
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
                className="relative flex items-start gap-5 group transition-all duration-700 ease-in-out hover:scale-[1.02] hover:translate-x-1"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Titik Timeline */}
                <div
                  className="absolute -left-[6px] top-2 w-4 h-4 
                  bg-[#000065] rounded-full ring-4 ring-white shadow-md 
                  opacity-100 scale-100 translate-x-0 translate-y-0
                  transition-all duration-700 ease-in-out 
                  group-hover:bg-[#DA1D2C] group-hover:scale-125 group-hover:opacity-0 group-hover:translate-x-2 group-hover:translate-y-2"
                ></div>

                {/* Gambar */}
                <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm flex-shrink-0 transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(0,0,101,0.15)]">
                  <img
                    src={step.img}
                    alt={step.year}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                </div>

                {/* Teks */}
                <div className="flex-1 transition-all duration-700 ease-in-out group-hover:text-[#000065]">
                  <span className="block text-sm font-bold text-[#DA1D2C] mb-1 transition-colors duration-500 ease-in-out group-hover:text-[#DA1D2C]">
                    {step.year}
                  </span>
                  <p className="text-sm leading-relaxed transition-colors duration-700 ease-in-out group-hover:text-gray-700">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
