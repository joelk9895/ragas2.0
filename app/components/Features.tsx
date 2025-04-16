export default function Features() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-6 md:gap-y-8 max-w-6xl justify-center mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center sm:text-left col-span-1 md:col-span-2 mb-2 md:mb-0 relative">
            <span className="text-foreground">Feature Highlights</span>
          </h2>
          {/* First Feature */}
          <div className="group rounded-xl border border-amber-200 p-4 sm:p-6 md:p-8 hover:border-amber-400 transition-all duration-300 bg-white shadow-lg shadow-amber-100/30 hover:shadow-amber-200/40 hover:-translate-y-1">
            <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-black flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-amber-100 text-amber-800 rounded-full mr-2 sm:mr-3 flex-shrink-0">
                1
              </span>
              <span className="leading-tight">Evaluate with Trusted Metrics</span>
            </h3>
            <p className="text-slate-600 mb-4 sm:mb-8 text-sm sm:text-base">
              Out-of-the-box support for factuality, faithfulness, coherence,
              and answer relevance.
            </p>
            <div className="relative h-36 sm:h-44 flex items-center justify-center bg-gradient-to-br from-transparent to-amber-50 rounded-lg">
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-md"
                >
                  <defs>
                    <linearGradient
                      id="circleGradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#D97706" />
                      <stop offset="100%" stopColor="#FBBF24" />
                    </linearGradient>
                    <linearGradient
                      id="circleGradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#B45309" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                    <linearGradient
                      id="circleGradient3"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#92400E" />
                      <stop offset="100%" stopColor="#B45309" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="url(#circleGradient1)"
                    strokeWidth="8"
                    strokeDasharray="502"
                    strokeDashoffset="150"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="url(#circleGradient2)"
                    strokeWidth="8"
                    strokeDasharray="377"
                    strokeDashoffset="110"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="40"
                    fill="none"
                    stroke="url(#circleGradient3)"
                    strokeWidth="8"
                    strokeDasharray="251"
                    strokeDashoffset="70"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="25"
                    fill="#FBBF24"
                    opacity="0.2"
                  />
                  <text
                    x="100"
                    y="105"
                    textAnchor="middle"
                    fill="#92400E"
                    fontSize="24"
                    fontWeight="bold"
                  >
                    95%
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Second Feature */}
          <div className="group rounded-xl border border-amber-200 p-4 sm:p-6 md:p-8 hover:border-amber-400 transition-all duration-300 bg-white shadow-lg shadow-amber-100/30 hover:shadow-amber-200/40 hover:-translate-y-1">
            <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-black flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-amber-100 text-amber-800 rounded-full mr-2 sm:mr-3 flex-shrink-0">
                2
              </span>
              <span className="leading-tight">Tailor It to Your Needs</span>
            </h3>
            <p className="text-slate-600 mb-4 sm:mb-8 text-sm sm:text-base">
              Create and run your own custom-metrics for niche workflows.
            </p>
            <div className="relative h-36 sm:h-44 flex items-center justify-center bg-gradient-to-bl from-transparent to-amber-50 rounded-lg">
              <div className="w-40 h-30 sm:w-48 sm:h-36 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 120"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-md"
                >
                  <defs>
                    <linearGradient
                      id="barGradient1"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#D97706" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                    <linearGradient
                      id="barGradient2"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#92400E" />
                      <stop offset="100%" stopColor="#B45309" />
                    </linearGradient>
                    <filter
                      id="dropShadow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feDropShadow
                        dx="1"
                        dy="1"
                        stdDeviation="2"
                        floodColor="#9a711e"
                        floodOpacity="0.2"
                      />
                    </filter>
                  </defs>
                  <rect
                    x="20"
                    y="80"
                    width="26"
                    height="30"
                    rx="3"
                    fill="url(#barGradient1)"
                    filter="url(#dropShadow)"
                  />
                  <rect
                    x="60"
                    y="50"
                    width="26"
                    height="60"
                    rx="3"
                    fill="url(#barGradient2)"
                    filter="url(#dropShadow)"
                  />
                  <rect
                    x="100"
                    y="20"
                    width="26"
                    height="90"
                    rx="3"
                    fill="url(#barGradient1)"
                    filter="url(#dropShadow)"
                  />
                  <rect
                    x="140"
                    y="40"
                    width="26"
                    height="70"
                    rx="3"
                    fill="url(#barGradient2)"
                    filter="url(#dropShadow)"
                  />
                  <line
                    x1="10"
                    y1="110"
                    x2="180"
                    y2="110"
                    stroke="#92400E"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                  />
                  <line
                    x1="20"
                    y1="115"
                    x2="20"
                    y2="15"
                    stroke="#92400E"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Third Feature */}
          <div className="col-span-1 md:col-span-2 group rounded-xl border border-amber-200 p-4 sm:p-6 md:p-8 hover:border-amber-400 transition-all duration-300 bg-white shadow-lg shadow-amber-100/30 hover:shadow-amber-200/40 hover:-translate-y-1">
            <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-black flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-amber-100 text-amber-800 rounded-full mr-2 sm:mr-3 flex-shrink-0">
                3
              </span>
              <span className="leading-tight">Plug into Your Stack</span>
            </h3>
            <p className="text-slate-600 mb-4 sm:mb-8 text-sm sm:text-base">
              Works seamlessly with LangChain, LlamaIndex, and OpenInference.
            </p>
            <div className="relative h-36 sm:h-44 flex items-center justify-center rounded-lg overflow-x-auto">
              <div className="flex items-center justify-center gap-3 sm:gap-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-50 to-amber-200 rounded-xl flex items-center justify-center shadow-md shadow-amber-100 group-hover:shadow-amber-200 transition-all duration-300 border border-amber-100 flex-shrink-0">
                  <span className="text-xl sm:text-2xl font-bold text-amber-800">L</span>
                </div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-100 to-amber-300 rounded-xl flex items-center justify-center shadow-md shadow-amber-100 group-hover:shadow-amber-200 transition-all duration-300 border border-amber-100 flex-shrink-0">
                  <span className="text-xl sm:text-2xl font-bold text-amber-900">L</span>
                </div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-200 to-amber-400 rounded-xl flex items-center justify-center shadow-md shadow-amber-100 group-hover:shadow-amber-200 transition-all duration-300 border border-amber-100 flex-shrink-0">
                  <span className="text-xl sm:text-2xl font-bold text-amber-900">O</span>
                </div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-100 to-amber-300 rounded-xl flex items-center justify-center shadow-md shadow-amber-100 group-hover:shadow-amber-200 transition-all duration-300 border border-amber-100 p-4 sm:p-5 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#92400E"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-50 to-amber-200 rounded-xl flex items-center justify-center shadow-md shadow-amber-100 group-hover:shadow-amber-200 transition-all duration-300 border border-amber-100 flex-shrink-0">
                  <span className="text-xl sm:text-2xl font-bold text-amber-800">R</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
