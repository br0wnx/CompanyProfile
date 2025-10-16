export function TrackerSection() {
  return (
    <>
      <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20 bg-[#FDFBFC] mt-25">
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
            <button className="bg-[#000065] hover:bg-[#00004a] px-4 sm:px-5 py-2 rounded-lg font-semibold text-white text-xs sm:text-sm self-center md:self-start mx-auto md:mx-0 mb-30 cursor-pointer">
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
        <div
          className="mt-14 sm:mt-24 text-center font-bold text-sm sm:text-base md:text-lg"
          style={{ color: "#FF8D0A" }}
        >
          <span className="block italic">
            This portal is continuosly improved to support more digital services
            for our customers.
          </span>
        </div>
      </section>
    </>
  );
}
