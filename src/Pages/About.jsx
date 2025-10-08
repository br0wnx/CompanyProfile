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

      <section className="w-full py-20 px-6 md:px-20 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: Text */}
          <div className="flex-1 text-left">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "#DA1D2C" }}
            >
              Who We Are
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              DKM Group is a leading depot and integrated logistics provider in
              Indonesia. With more than three decades of experience, we support
              shipping lines, freight forwarders, and trucking companies through
              reliable container storage, repair, and transportation solutions.
            </p>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Our strength lies in technology-driven operations and nationwide
              coverage, ensuring seamless logistics flow across major Indonesian
              ports.
            </p>
          </div>

          {/* Right: Image */}
          <div className="flex-1 w-full ml-64">
            <img
              src="/assets/content-who.jpg"
              alt="Who We Are"
              className="w-75 h-75 rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      const cards = [
    {
      title: "Our Vision",
      desc: `To be the most trusted and technology-driven logistics and container depot company in 
Indonesia, delivering efficiency and reliability for global and domestic trade.`,
    },
    {
      title: "Our Mission",
      desc: `• Provide professional and customer-oriented container services
• Continuously innovate with in-house
• Expand nationwide coverage to support Indonesia's growing logistics sector
• Create sustainable growth that benefits our partners, employees, and industry`,
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left: Text */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" style={{ color: "#DA1D2C" }}>
            What Drives Us
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            Our journey has always been 
            guided by more than just 
            operations it is about building
            trust, delivering consistency,
            and embracing innovation.
            Logistics is the backbone of
            trade, and we see our role as
            more than moving containers; we
            help connect businesses,
            industries, and communities
            across Indonesia.
          </p>
        </div>

        {/* Right: Cards */}
        <div className="flex-1 grid grid-cols-1 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow-md p-6 border-b-4 border-[#000065] flex flex-col gap-4"
            >
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p className="text-sm sm:text-base md:text-base text-gray-700 whitespace-pre-line">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
