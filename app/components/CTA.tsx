import React from "react";

const CTA = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-4 py-20">
      <h2 className="font-serif text-[2rem] md:text-[4rem] leading-tight mb-4 font-[var(--font-instrument)]">
        Early Access
      </h2>
      <p className="text-muted-foreground text-lg mb-8 max-w-2xl">
        Get access to early features
      </p>
      <div className="flex gap-4 flex-col sm:flex-row">
        <button className="rounded-md font-semibold bg-gradient-to-r from-[#FDD674] to-[#FBD83C] px-6 py-2.5 text-sm hover:opacity-90 transition-opacity text-black">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default CTA;
