import React from "react";

const WhatsComingNext = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground col-span-1 sm:col-span-2 md:col-span-4 mb-4 md:mb-6">
            What&apos;s Coming Next
          </h2>

          {/* Visual Dashboard Feature - Spans 2 columns on medium+ screens */}
          <div className="group col-span-1 sm:col-span-1 md:col-span-2 rounded-xl border border-amber-100/20 p-4 sm:p-6 md:p-8 hover:border-amber-400 transition-all duration-300 shadow-sm shadow-amber-100/10 hover:shadow-amber-200/40 hover:-translate-y-1">
            <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-foreground flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 text-primary rounded-full mr-2 sm:mr-3 flex-shrink-0">
                1
              </span>
              <span className="leading-tight">
                Visual Dashboard & Reporting
              </span>
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-8 text-sm sm:text-base">
              Enhanced visualization tools with customizable dashboards and
              automated reporting features.
            </p>
            <div className="relative h-36 sm:h-44 flex items-center justify-center bg-gradient-to-br from-transparent to-primary/5 rounded-lg">
              <div className="w-40 h-32 sm:w-48 sm:h-36 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 120"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-md"
                >
                  <defs>
                    <linearGradient
                      id="dashboardGradient1"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#F7D055" />
                      <stop offset="100%" stopColor="#D4A017" />
                    </linearGradient>
                    <linearGradient
                      id="dashboardGradient2"
                      x1="0%"
                      y1="0%"
                      x2="0%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFDF00" />
                      <stop offset="100%" stopColor="#EAC117" />
                    </linearGradient>
                    <filter
                      id="dashboardShadow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feDropShadow
                        dx="1"
                        dy="1"
                        stdDeviation="2"
                        floodColor="#DAA520"
                        floodOpacity="0.3"
                      />
                    </filter>
                  </defs>
                  {/* Dashboard Frame */}
                  <rect
                    x="20"
                    y="10"
                    width="160"
                    height="100"
                    rx="5"
                    fill="none"
                    stroke="#CFB53B"
                    strokeWidth="2"
                    strokeOpacity="0.4"
                  />

                  {/* Chart Elements */}
                  <rect
                    x="30"
                    y="50"
                    width="30"
                    height="40"
                    rx="2"
                    fill="url(#dashboardGradient1)"
                    filter="url(#dashboardShadow)"
                  />
                  <rect
                    x="70"
                    y="30"
                    width="30"
                    height="60"
                    rx="2"
                    fill="url(#dashboardGradient2)"
                    filter="url(#dashboardShadow)"
                  />
                  <rect
                    x="110"
                    y="40"
                    width="30"
                    height="50"
                    rx="2"
                    fill="url(#dashboardGradient1)"
                    filter="url(#dashboardShadow)"
                  />
                  <rect
                    x="150"
                    y="20"
                    width="20"
                    height="70"
                    rx="2"
                    fill="url(#dashboardGradient2)"
                    filter="url(#dashboardShadow)"
                  />

                  {/* Header */}
                  <rect
                    x="20"
                    y="10"
                    width="160"
                    height="20"
                    rx="5"
                    fill="#E6C200"
                    fillOpacity="0.2"
                  />
                  <circle cx="35" cy="20" r="5" fill="#FFD700" fillOpacity="0.8" />
                  <circle cx="50" cy="20" r="5" fill="#DAA520" fillOpacity="0.8" />
                  <circle cx="65" cy="20" r="5" fill="#B8860B" fillOpacity="0.8" />
                </svg>
              </div>
            </div>
          </div>

          {/* Custom Metric SDK - Spans 2 columns on medium+ screens */}
          <div className="group col-span-1 sm:col-span-1 md:col-span-2 rounded-xl border border-amber-100/20 p-4 sm:p-6 md:p-8 hover:border-amber-400 transition-all duration-300 shadow-sm shadow-amber-100/10 hover:shadow-amber-200/40 hover:-translate-y-1">
            <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-foreground flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 text-primary rounded-full mr-2 sm:mr-3 flex-shrink-0">
                2
              </span>
              <span className="leading-tight">Custom Metric SDK</span>
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-8 text-sm sm:text-base">
              Build and deploy your own evaluation metrics with our easy-to-use
              software development kit.
            </p>
            <div className="relative h-36 sm:h-44 flex items-center justify-center bg-gradient-to-bl from-transparent to-primary/5 rounded-lg">
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-md"
                >
                  <defs>
                    <linearGradient
                      id="sdkGradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#F7D055" />
                      <stop offset="100%" stopColor="#DAA520" />
                    </linearGradient>
                    <linearGradient
                      id="goldGlow"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#FFDF00" />
                      <stop offset="100%" stopColor="#CFB53B" />
                    </linearGradient>
                  </defs>
                  {/* Code Window */}
                  <rect
                    x="40"
                    y="40"
                    width="120"
                    height="120"
                    rx="5"
                    fill="none"
                    stroke="#CFB53B"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                  />
                  <rect
                    x="40"
                    y="40"
                    width="120"
                    height="20"
                    rx="5"
                    fill="#E6C200"
                    fillOpacity="0.2"
                  />

                  {/* Code Lines */}
                  <line
                    x1="50"
                    y1="80"
                    x2="110"
                    y2="80"
                    stroke="#DAA520"
                    strokeOpacity="0.8"
                    strokeWidth="2"
                  />
                  <line
                    x1="60"
                    y1="90"
                    x2="140"
                    y2="90"
                    stroke="#CFB53B"
                    strokeOpacity="0.7"
                    strokeWidth="2"
                  />
                  <line
                    x1="60"
                    y1="100"
                    x2="120"
                    y2="100"
                    stroke="#CFB53B"
                    strokeOpacity="0.7"
                    strokeWidth="2"
                  />
                  <line
                    x1="50"
                    y1="110"
                    x2="130"
                    y2="110"
                    stroke="#DAA520"
                    strokeOpacity="0.8"
                    strokeWidth="2"
                  />
                  <line
                    x1="60"
                    y1="120"
                    x2="100"
                    y2="120"
                    stroke="#CFB53B"
                    strokeOpacity="0.7"
                    strokeWidth="2"
                  />
                  <line
                    x1="50"
                    y1="130"
                    x2="90"
                    y2="130"
                    stroke="#DAA520"
                    strokeOpacity="0.8"
                    strokeWidth="2"
                  />

                  {/* Gear Icon */}
                  <circle
                    cx="145"
                    cy="145"
                    r="25"
                    fill="url(#sdkGradient1)"
                    opacity="0.8"
                  />
                  <circle cx="145" cy="145" r="15" fill="none" stroke="#FFD700" strokeWidth="1" strokeOpacity="0.6" />
                  <circle cx="145" cy="145" r="5" fill="#DAA520" fillOpacity="0.9" />

                  {/* Gear Teeth */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <rect
                      key={i}
                      x="140"
                      y="115"
                      width="10"
                      height="10"
                      rx="2"
                      fill="#FFD700"
                      fillOpacity="0.9"
                      transform={`rotate(${angle}, 145, 145)`}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Granular Failure Analysis - Spans 3 columns on medium+ screens */}
          <div className="group col-span-1 sm:col-span-1 md:col-span-3 rounded-xl border border-amber-100/20 p-4 sm:p-6 md:p-8 hover:border-amber-400 transition-all duration-300 shadow-sm shadow-amber-100/10 hover:shadow-amber-200/40 hover:-translate-y-1">
            <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-foreground flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 text-primary rounded-full mr-2 sm:mr-3 flex-shrink-0">
                3
              </span>
              <span className="leading-tight">Granular Failure Analysis</span>
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-8 text-sm sm:text-base">
              Detailed insights into specific failure modes with actionable
              recommendations.
            </p>
            <div className="relative h-36 sm:h-44 flex items-center justify-center bg-gradient-to-br from-transparent to-primary/5 rounded-lg">
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-md"
                >
                  <defs>
                    <linearGradient
                      id="analysisGradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#E6C200" />
                      <stop offset="100%" stopColor="#B8860B" />
                    </linearGradient>
                    <linearGradient
                      id="analysisGradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#F7D055" />
                      <stop offset="100%" stopColor="#DAA520" />
                    </linearGradient>
                  </defs>
                  {/* Magnifying Glass */}
                  <circle
                    cx="85"
                    cy="85"
                    r="40"
                    fill="none"
                    stroke="url(#analysisGradient2)"
                    strokeWidth="6"
                  />
                  <line
                    x1="115"
                    y1="115"
                    x2="150"
                    y2="150"
                    stroke="url(#analysisGradient1)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />

                  {/* Analysis Elements */}
                  <rect
                    x="70"
                    y="75"
                    width="30"
                    height="5"
                    fill="#DAA520"
                    fillOpacity="0.8"
                    rx="1"
                  />
                  <rect
                    x="70"
                    y="85"
                    width="20"
                    height="5"
                    fill="#DAA520"
                    fillOpacity="0.8"
                    rx="1"
                  />
                  <rect
                    x="70"
                    y="95"
                    width="25"
                    height="5"
                    fill="#DAA520"
                    fillOpacity="0.8"
                    rx="1"
                  />

                  {/* Error Highlight */}
                  <circle
                    cx="155"
                    cy="50"
                    r="20"
                    fill="none"
                    stroke="#FFD700"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                  />
                  <line
                    x1="145"
                    y1="50"
                    x2="165"
                    y2="50"
                    stroke="#DAA520"
                    strokeWidth="3"
                    strokeOpacity="0.9"
                  />
                  <line
                    x1="155"
                    y1="40"
                    x2="155"
                    y2="60"
                    stroke="#DAA520"
                    strokeWidth="3"
                    strokeOpacity="0.9"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Evaluation Dataset Hub - Spans 1 column */}
          <div className="group col-span-1 sm:col-span-1 md:col-span-1 rounded-xl border border-amber-100/20 p-4 sm:p-6 md:p-8 hover:border-amber-400 transition-all duration-300 shadow-sm shadow-amber-100/10 hover:shadow-amber-200/40 hover:-translate-y-1">
            <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-foreground flex items-center">
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 text-primary rounded-full mr-2 sm:mr-3 flex-shrink-0">
                4
              </span>
              <span className="leading-tight">Dataset Hub</span>
            </h3>
            <p className="text-muted-foreground mb-4 sm:mb-8 text-sm sm:text-base">
              Access curated evaluation datasets across domains.
            </p>
            <div className="relative h-36 sm:h-44 flex items-center justify-center bg-gradient-to-bl from-transparent to-primary/5 rounded-lg">
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-md"
                >
                  <defs>
                    <linearGradient
                      id="datasetGradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#F7D055" />
                      <stop offset="100%" stopColor="#CFB53B" />
                    </linearGradient>
                    <linearGradient
                      id="datasetGradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#FFDF00" />
                      <stop offset="100%" stopColor="#DAA520" />
                    </linearGradient>
                  </defs>
                  {/* Stack of Books/Datasets */}
                  <rect
                    x="50"
                    y="120"
                    width="100"
                    height="20"
                    rx="3"
                    fill="url(#datasetGradient1)"
                  />
                  <rect
                    x="55"
                    y="100"
                    width="100"
                    height="20"
                    rx="3"
                    fill="url(#datasetGradient2)"
                  />
                  <rect
                    x="60"
                    y="80"
                    width="100"
                    height="20"
                    rx="3"
                    fill="url(#datasetGradient1)"
                  />
                  <rect
                    x="65"
                    y="60"
                    width="100"
                    height="20"
                    rx="3"
                    fill="url(#datasetGradient2)"
                  />

                  {/* Book Text Lines */}
                  <line
                    x1="75"
                    y1="70"
                    x2="145"
                    y2="70"
                    stroke="#FFD700"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                  />
                  <line
                    x1="80"
                    y1="90"
                    x2="140"
                    y2="90"
                    stroke="#FFD700"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                  />
                  <line
                    x1="70"
                    y1="110"
                    x2="135"
                    y2="110"
                    stroke="#FFD700"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                  />
                  <line
                    x1="65"
                    y1="130"
                    x2="130"
                    y2="130"
                    stroke="#FFD700"
                    strokeOpacity="0.5"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsComingNext;
