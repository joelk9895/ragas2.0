"use client";

import { useState } from "react";
import MetricsVisualization from "./MetricsVisualization";
import Link from "next/link";
import WaitlistModal from "./WaitlistModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openWaitlistModal = () => {
    setIsModalOpen(true);
  };

  return (
    <section className="flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-4 pt-24 md:pt-32 pb-12 md:pb-20">
      <Link
        href={"/#"}
        className="mb-6 md:mb-10 font-thin border border-[#E5E5E5] dark:border-gray-800 rounded-full px-4 py-1 text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
      >
        Ragas.io is live now{" "}
        <span className="font-semibold ml-2">Read More →</span>
      </Link>
      <h1 className="font-serif text-4xl sm:text-5xl md:text-[7rem] leading-tight mb-4 font-[var(--font-instrument)]">
        Supercharge LLM Evaluation.
        <br className="hidden sm:block" />
        The Right Way.
      </h1>
      <p className="text-muted-foregrounstilld text-base md:text-lg mb-6 md:mb-8 max-w-2xl">
        Private testing is underway. Get early access to shape the roadmap.
      </p>
      <div className="flex gap-3 md:gap-4 flex-col sm:flex-row w-full sm:w-auto justify-center">
        <button className="rounded-md bg-gradient-to-b from-gray-100 to-white text-black border-[#E5E5E5] border px-5 md:px-6 py-2.5 text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 md:gap-3 font-semibold">
          <span className="text-gray-500 text-lg md:text-xl">▷</span> Watch Demo
        </button>
        <button
          onClick={openWaitlistModal}
          className="rounded-md font-semibold bg-gradient-to-r from-[#FDD674] to-[#FBD83C] px-5 md:px-6 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors text-black"
        >
          Join the waitlist
        </button>
      </div>
      <div className="mt-10 md:mt-16 w-full overflow-x-hidden">
        <MetricsVisualization />
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </section>
  );
}
