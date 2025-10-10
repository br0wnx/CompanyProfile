export default function Portal() {
  return (
    <>
      {/* Hero Section Services */}
      <section>
        <div
          className="w-full h-[75vh] flex items-center justify-center text-white px-6 md:px-20 bg-cover bg-center relative"
          style={{ backgroundImage: "url('/assets/port.jpg')" }}
        >
          {/* Overlay Lebih Gelap */}
          <div className="absolute inset-0 bg-black/50 "></div>

          {/* Content */}
          <div className="text-center relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Portal Access
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed italic">
              Your one-stop access to our online systems for operational
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* DKM Tracker Portal */}
      <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-4 sm:gap-6">
          <div className="flex-1 text-center md:text-left flex flex-col">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-2"
              style={{ color: "#DA1D2C" }}
            >
              DKM Tracker Portal
            </h2>
            <p className="text-base sm:text-base leading-relaxed mb-3 mt-8 flex-grow">
              The DKM Tracker Portal is a centralized online system designed to
              make your logistics operations more efficient. With just one
              platform, you can track container, invovices,EIR (Equipment
              Interchange Receipt), and OR (Online Receipt) in real time -
              ensuring transparency and accuracy in every step of your supply
              chahin.
            </p>
            <button className="bg-[#000065] hover:bg-[#00004a] px-4 sm:px-5 py-2 rounded-lg font-semibold text-white text-xs sm:text-sm self-center md:self-start mx-auto md:mx-0 mb-30">
              Go to Tracker Portal
            </button>
          </div>
          <div className="flex-1 w-full mt-4 md:mt-0 flex items-center">
            <img
              src="/assets/portal.jpg"
              alt="Customer Portal"
              className="w-full h-full max-h-64 sm:max-h-80 md:max-h-96 rounded-xl object-cover shadow-md grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
        </div>
      </section>

      {/* CTA Background Section */}
      <section
        className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/123.jpg')" }}
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
