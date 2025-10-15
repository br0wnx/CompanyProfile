export function CtaSection() {
  return (
    <>
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
