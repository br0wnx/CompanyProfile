export function AboutSection() {
  return (
    <>
      <section className="w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-20 bg-[#FDFBFC]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-m sm:text-l md:text-xl leading-none md:leading-tight">
            DKM Group is an integrated logistics and technology company with
            years of experience in container depot opeartions and supporting
            industries. With in-house technology development, we continue to
            deliver efficient, reliable, and scalable solutions for our partners
            across Indonesia.
          </p>
        </div>

        <div
          className="mt-14 sm:mt-24 text-center font-bold text-sm sm:text-base md:text-lg"
          style={{ color: "#FF8D0A" }}
        >
          <span className="block">Over 1000+ Clients All Over The World</span>
        </div>
      </section>
    </>
  );
}
