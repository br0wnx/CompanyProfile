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

export function WhatDriveUsSection() {
  return (
    <>
      <section className="w-full py-20 px-6 md:px-20 bg-[#FDFBFC]">
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
              {/* Left: Text */}
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

              {/* Right: Cards */}
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
    </>
  );
}
