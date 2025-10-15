export function TrackerSection() {
  return (
    <>
      <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-4 sm:gap-6">
          <div className="flex-1 text-center md:text-left flex flex-col">
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-2"
              style={{ color: "#DA1D2C" }}
            >
              Customer Portal
            </h2>
            <p className="text-base sm:text-base leading-relaxed mb-3 mt-8 flex-grow">
              Access our container tracker for real-time updates and efficient
              monitoring. More smart tools are coming soon as we expand out
              customer portal to deliver faster, technology-driven logistics
              services.
            </p>
            <button className="bg-[#000065] hover:bg-[#00004a] px-4 sm:px-5 py-2 rounded-lg font-semibold text-white text-xs sm:text-sm self-center md:self-start mx-auto md:mx-0 mb-32">
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
    </>
  );
}
