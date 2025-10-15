export function CustomerSection() {
  return (
    <>
      <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <img
            src="/assets/dkm_customer.png"
            alt="Customer Logo"
            className="h-24 sm:h-32 md:h-48 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </section>
    </>
  );
}
