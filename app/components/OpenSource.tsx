const OpenSource = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="group ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8 text-left w-full">
                  Built in the Open, Evolving with You
                </h2>
                <p className="text-xl text-foreground mb-8 text-left">
                  We're inviting a select group of developers and researchers to
                  shape Ragas together.
                </p>
                <div className="flex flex-wrap gap-4 justify-start w-full">
                  <a
                    href="https://github.com/explodinggradients/ragas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-gradient-to-b from-gray-100 to-white text-black border-[#E5E5E5] border px-6 py-2.5 text-sm hover:opacity-90 transition-opacity flex items-center gap-3 font-semibold"
                  >
                    <span className="text-gray-500 text-xl">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </span>
                    View on GitHub
                  </a>
                  <a
                    href="#join-community"
                    className="rounded-md font-semibold bg-gradient-to-r from-[#FDD674] to-[#FBD83C] px-6 py-2.5 text-sm hover:opacity-90 transition-opacity text-black"
                  >
                    Join Our Community
                  </a>
                </div>
              </div>

              <div className="relative h-60 flex items-center justify-center bg-gradient-to-br from-white to-amber-50 rounded-lg">
                <div className="w-52 h-52 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full drop-shadow-md"
                  >
                    <defs>
                      <linearGradient
                        id="openSourceGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#D97706" />
                        <stop offset="100%" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                    {/* Central Circle representing the community */}
                    <circle
                      cx="100"
                      cy="100"
                      r="35"
                      fill="#FFFFFF"
                      stroke="#92400E"
                      strokeWidth="2"
                    />
                    <circle
                      cx="100"
                      cy="100"
                      r="30"
                      fill="url(#openSourceGradient)"
                      opacity="0.2"
                    />

                    {/* People icons around the circle */}
                    <g transform="translate(85, 80)">
                      <circle cx="0" cy="0" r="8" fill="#B45309" />
                      <circle cx="0" cy="-4" r="4" fill="#B45309" />
                      <rect
                        x="-8"
                        y="0"
                        width="16"
                        height="16"
                        rx="4"
                        fill="#B45309"
                      />
                    </g>

                    <g transform="translate(105, 85)">
                      <circle cx="0" cy="0" r="6" fill="#D97706" />
                      <circle cx="0" cy="-3" r="3" fill="#D97706" />
                      <rect
                        x="-6"
                        y="0"
                        width="12"
                        height="12"
                        rx="3"
                        fill="#D97706"
                      />
                    </g>

                    <g transform="translate(120, 100)">
                      <circle cx="0" cy="0" r="7" fill="#F59E0B" />
                      <circle cx="0" cy="-3.5" r="3.5" fill="#F59E0B" />
                      <rect
                        x="-7"
                        y="0"
                        width="14"
                        height="14"
                        rx="3.5"
                        fill="#F59E0B"
                      />
                    </g>

                    <g transform="translate(95, 115)">
                      <circle cx="0" cy="0" r="6" fill="#FBBF24" />
                      <circle cx="0" cy="-3" r="3" fill="#FBBF24" />
                      <rect
                        x="-6"
                        y="0"
                        width="12"
                        height="12"
                        rx="3"
                        fill="#FBBF24"
                      />
                    </g>

                    <g transform="translate(80, 105)">
                      <circle cx="0" cy="0" r="7" fill="#D97706" />
                      <circle cx="0" cy="-3.5" r="3.5" fill="#D97706" />
                      <rect
                        x="-7"
                        y="0"
                        width="14"
                        height="14"
                        rx="3.5"
                        fill="#D97706"
                      />
                    </g>

                    {/* Connection lines */}
                    <line
                      x1="85"
                      y1="80"
                      x2="100"
                      y2="100"
                      stroke="#B45309"
                      strokeWidth="1"
                    />
                    <line
                      x1="105"
                      y1="85"
                      x2="100"
                      y2="100"
                      stroke="#D97706"
                      strokeWidth="1"
                    />
                    <line
                      x1="120"
                      y1="100"
                      x2="100"
                      y2="100"
                      stroke="#F59E0B"
                      strokeWidth="1"
                    />
                    <line
                      x1="95"
                      y1="115"
                      x2="100"
                      y2="100"
                      stroke="#FBBF24"
                      strokeWidth="1"
                    />
                    <line
                      x1="80"
                      y1="105"
                      x2="100"
                      y2="100"
                      stroke="#D97706"
                      strokeWidth="1"
                    />

                    {/* Code/Branch elements */}
                    <g transform="translate(40, 40)">
                      <circle
                        cx="0"
                        cy="0"
                        r="15"
                        fill="#FFFFFF"
                        stroke="#92400E"
                        strokeWidth="2"
                      />
                      <line
                        x1="-5"
                        y1="-5"
                        x2="5"
                        y2="5"
                        stroke="#B45309"
                        strokeWidth="2"
                      />
                      <line
                        x1="-5"
                        y1="5"
                        x2="5"
                        y2="-5"
                        stroke="#B45309"
                        strokeWidth="2"
                      />
                    </g>

                    <g transform="translate(150, 50)">
                      <circle
                        cx="0"
                        cy="0"
                        r="15"
                        fill="#FFFFFF"
                        stroke="#92400E"
                        strokeWidth="2"
                      />
                      <line
                        x1="-7"
                        y1="0"
                        x2="7"
                        y2="0"
                        stroke="#B45309"
                        strokeWidth="2"
                      />
                      <line
                        x1="0"
                        y1="-7"
                        x2="0"
                        y2="7"
                        stroke="#B45309"
                        strokeWidth="2"
                      />
                    </g>

                    <g transform="translate(160, 140)">
                      <circle
                        cx="0"
                        cy="0"
                        r="15"
                        fill="#FFFFFF"
                        stroke="#92400E"
                        strokeWidth="2"
                      />
                      <rect
                        x="-5"
                        y="-5"
                        width="10"
                        height="10"
                        fill="#B45309"
                      />
                    </g>

                    <g transform="translate(40, 150)">
                      <circle
                        cx="0"
                        cy="0"
                        r="15"
                        fill="#FFFFFF"
                        stroke="#92400E"
                        strokeWidth="2"
                      />
                      <circle cx="0" cy="0" r="5" fill="#B45309" />
                    </g>

                    {/* Connection lines to community */}
                    <path
                      d="M40 40 Q70 60 100 100"
                      fill="none"
                      stroke="#92400E"
                      strokeWidth="1"
                      strokeDasharray="3 2"
                    />
                    <path
                      d="M150 50 Q130 75 100 100"
                      fill="none"
                      stroke="#92400E"
                      strokeWidth="1"
                      strokeDasharray="3 2"
                    />
                    <path
                      d="M160 140 Q130 125 100 100"
                      fill="none"
                      stroke="#92400E"
                      strokeWidth="1"
                      strokeDasharray="3 2"
                    />
                    <path
                      d="M40 150 Q70 130 100 100"
                      fill="none"
                      stroke="#92400E"
                      strokeWidth="1"
                      strokeDasharray="3 2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
