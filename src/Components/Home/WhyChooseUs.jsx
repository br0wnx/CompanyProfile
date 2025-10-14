

function WhyChooseUs () {
  return (
    <>
    {/* Why Choose Us */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#FDFBFC]">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold"
            style={{ color: "#DA1D2C" }}
          >
            Why Choose Us
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-relaxed px-2 sm:px-4">
            At DKM Group, we combine over three decades of expertise with
            technology-driven operations to deliver reliable container and
            logistics solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 text-center">
          {/* Cards */}
          {[
            {
              img: "/assets/image-card/1.jpg",
              title: "Container Depot",
              subtitle: "(5 Strategic Locations)",
              desc: "Operating five strategic depots across Indonesia, providing trusted container handling and storage services.",
            },
            {
              img: "/assets/image-card/2.jpg",
              title: "Technology Driven",
              subtitle: "(In-house System)",
              desc: "Empowered by our own in-house IT team, we design and build systems tailored to operational needs.",
            },
            {
              img: "/assets/image-card/3.jpg",
              title: "Integrated Logistics",
              subtitle: "(Repair, Trucking, Rail Cargo, Rental)",
              desc: "From container repair to trucking, rail cargo, and reach stacker rental, our services connect every part of the logistics chain.",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="h-32 sm:h-36 md:h-40 lg:h-44 xl:h-52 w-full">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col items-center border-2 border-t-0 border-[#000065] rounded-b-lg sm:rounded-b-xl flex-1">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2">
                  {card.title}
                </h3>
                <span className="font-bold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base">
                  {card.subtitle}
                </span>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs